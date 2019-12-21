'use strict';

const {run} = require('madrun');

module.exports = {
    'test': () => 'tape test/*.js',
    'watcher': () => 'nodemon -w test -w lib --exec',
    'watch:test': () => run(['watcher'], 'npm test'),
    'eslint': () => 'eslint lib test',
    'putout': () => 'putout lib test',
    'lint': () => run(['putout', 'eslint']),
    'fix:lint': () => run(['putout', 'eslint'], '--fix'),
    'build': () => run(['clean', 'init', '6to5', 'legacy:*', 'bundle', 'bundle:es6', 'minify']),
    'minify': () => 'minify dist/jessy.js > dist/jessy.min.js',
    'wisdom': () => run(['build']),
    'init': () => 'mkdirp dist legacy',
    'clean': () => 'rimraf legacy dist',
    'bundle:base': () => 'browserify -s jessy --ng false',
    'bundle': () => run(
        ['bundle:base'],
        '-r ./legacy/lib/jessy.js:jessy ./legacy/lib/jessy.js -o dist/jessy.js',
    ),
    'bundle:es6:base': () => run(['bundle:base'], '-r ./lib/jessy.js:jessy ./lib/jessy.js'),
    'bundle:es6': () => run(['bundle:es6:base'], '-o dist/jessy.es6.js'),
    'coverage': () => 'nyc npm test',
    'report': () => 'nyc report --reporter=text-lcov | coveralls',
    '6to5': () => 'babel lib -d legacy/lib',
    'legacy:index': () => 'echo "module.exports = require(\'./lib/jessy\');" > legacy/index.js',
};

