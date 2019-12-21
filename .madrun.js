'use strict';

const {run} = require('madrun');

module.exports = {
    'test': () => 'tape test/*.js',
    'watcher': () => 'nodemon -w test -w lib --exec',
    'watch:test': () => run('watcher', 'npm test'),
    'lint': () => 'putout lib test .madrun.js',
    'fix:lint': () => run('lint', '--fix'),
    'coverage': () => 'nyc npm test',
    'report': () => 'nyc report --reporter=text-lcov | coveralls',
};

