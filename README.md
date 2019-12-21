# Jessy [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

Get value by object property.

## Install

`npm i jessy --save`

## Hot to use?

```js
const jessy = require('jessy');

jessy('hello.world', {
    hello: {
        world: {
            'could be used in browser as well'
        }
    }
});
// returns
'could be used in browser as well'

jessy('work-with-divider', '-', {
    work: {
        with: {
            divider: {
                'could use divider as well'
            }
        }
    }
});
// returns
'could use divider as well'
```

## Related

- [nessy](https://github.com/coderaiser/nessy "nessy") - set value in nested object.
- [all-object-keys](https://github.com/coderaiser/all-object-keys "all-object-keys") - get all keys of object.
- [finicky](https://github.com/coderaiser/finicky "finicky") - delete property of an object

## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/jessy.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/jessy/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/david/coderaiser/jessy.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/jessy "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/jessy  "Build Status"
[DependencyStatusURL]:      https://david-dm.org/coderaiser/jessy "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

[CoverageURL]:              https://coveralls.io/github/coderaiser/jessy?branch=master
[CoverageIMGURL]:           https://coveralls.io/repos/coderaiser/jessy/badge.svg?branch=master&service=github

