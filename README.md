# Jessy [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL] [![Coverage Status][CoverageIMGURL]][CoverageURL]

[BuildStatusURL]: https://github.com/coderaiser/jessy/actions?query=workflow%3A%22Node+CI%22 "Build Status"
[BuildStatusIMGURL]: https://github.com/coderaiser/jessy/workflows/Node%20CI/badge.svg
[NPMURL]: https://npmjs.org/package/jessy "npm"
[NPMIMGURL]: https://img.shields.io/npm/v/jessy.svg?style=flat
[LicenseURL]: https://tldrlegal.com/license/mit-license "MIT License"
[LicenseIMGURL]: https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[CoverageURL]: https://coveralls.io/github/coderaiser/jessy?branch=master
[CoverageIMGURL]: https://coveralls.io/repos/coderaiser/jessy/badge.svg?branch=master&service=github

Get value by object property.

## Install

`npm i jessy --save`

## Hot to use?

```js
const jessy = require('jessy');

jessy('hello.world', {
    hello: {
        world: 'could be used in browser as well',
    },
});

// returns
'could be used in browser as well';

jessy('work-with-divider', '-', {
    work: {
        with: {
            divider: 'could use divider as well',
        },
    },
});

// returns
'could use divider as well';

jessy('', {
    hello: 'world',
});

// returns
{
    hello: 'world';
}
```

## Related

- [nessy](https://github.com/coderaiser/nessy "nessy") - set value in nested object.
- [all-object-keys](https://github.com/coderaiser/all-object-keys "all-object-keys") - get all keys of object.
- [finicky](https://github.com/coderaiser/finicky "finicky") - delete property of an object

## License

MIT
