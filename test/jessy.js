'use strict';

const test = require('tape');
const jessy = require('../src/jessy');

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

test('result: missing value from object', (t) => {
    const actual = jessy('hello.world', {});
    
    t.equal(actual, null, 'should return value from object');
    t.end();
});

test('result: value is an object', (t) => {
    const obj = {
        hello: {}
    }
    const actual = jessy('hello', obj);
    
    t.deepEqual(actual, {}, 'should return value from object');
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

test('jessy: name with "_"', (t) => {
    const obj = {
        hello: {
            world_min: 'something'
        }
    };
    
    const actual = jessy('hello_world_min', '_', obj);
    
    t.equal(actual, 'something', 'should return value from object');
    t.end();
});

test('jessy: name with "_": similar', (t) => {
    const obj = {
        hello: {
            world: 'hello',
            world_min: 'something'
        }
    };
    
    const actual = jessy('hello_world_min', '_', obj);
    
    t.equal(actual, 'something', 'should return value from object');
    t.end();
});

