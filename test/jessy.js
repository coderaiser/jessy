'use strict';

let test    = require('tape');
let jessy   = require('../src/jessy');

test('arguments: no', (t) => {
    t.throws(jessy, /selector should be string!/, 'should throw when no path');
    t.end();
});

test('arguments: no obj', (t) => {
    let fn = () => jessy('hello');
    
    t.throws(fn, /obj should be object!/, 'should throw when no obj');
    t.end();
});

test('result: value from object', (t) => {
    const obj = {
        hello: {
            world: 'something'
        }
    };
    
    const actual        = jessy('hello.world', obj);
    
    t.equal(actual, 'something', 'should return value from object');
    t.end();
});

test('divider', (t) => {
    const obj = {
        hello: {
            world: 'something'
        }
    };
    
    const actual = jessy('hello-world', '-', obj);
    
    t.equal(actual, 'something', 'should return value from object');
    t.end();
});
