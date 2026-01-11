import test from 'supertape';
import tryCatch from 'try-catch';
import jessy from '../lib/jessy.js';

test('arguments: no', (t) => {
    const [error] = tryCatch(jessy);
    
    t.equal(error.message, 'selector should be string!', 'should throw when no path');
    t.end();
});

test('arguments: no obj', (t) => {
    const [error] = tryCatch(jessy, 'hello');
    
    t.equal(error.message, 'obj should be object!', 'should throw when no obj');
    t.end();
});

test('jessy: result: value from object', (t) => {
    const obj = {
        hello: {
            world: 'something',
        },
    };
    
    const actual = jessy('hello.world', obj);
    
    t.equal(actual, 'something', 'should return value from object');
    t.end();
});

test('jessy: result: value from empty object', (t) => {
    const obj = {};
    const result = jessy('', obj);
    const expected = {};
    
    t.deepEqual(result, expected, 'should return value from object');
    t.end();
});

test('result: missing value from empty object', (t) => {
    const actual = jessy('hello.world', {});
    
    t.notOk(actual, 'should return undefined');
    t.end();
});

test('result: missing value from object', (t) => {
    const actual = jessy('hello.world', {
        some: {
            value: 'hi',
        },
    });
    
    t.notOk(actual, 'should return undefined');
    t.end();
});

test('result: empty selector', (t) => {
    const obj = {
        hello: {
            world: 'something',
        },
    };
    
    const actual = jessy('', obj);
    
    t.equal(actual, obj);
    t.end();
});

test('result: value is an object', (t) => {
    const obj = {
        hello: {},
    };
    
    const actual = jessy('hello', obj);
    
    t.deepEqual(actual, {}, 'should return value from object');
    t.end();
});

test('jessy: divider', (t) => {
    const obj = {
        hello: {
            world: 'something',
        },
    };
    
    const actual = jessy('hello-world', '-', obj);
    
    t.equal(actual, 'something', 'should return value from object');
    t.end();
});

test('jessy: name with "_"', (t) => {
    const obj = {
        hello: {
            world_min: 'something',
        },
    };
    
    const actual = jessy('hello_world_min', '_', obj);
    
    t.equal(actual, 'something', 'should return value from object');
    t.end();
});

test('jessy: name with "_": similar', (t) => {
    const obj = {
        hello: {
            world: 'hello',
            world_min: 'something',
        },
    };
    
    const actual = jessy('hello_world_min', '_', obj);
    
    t.equal(actual, 'something', 'should return value from object');
    t.end();
});

test('jessy: "/" at the beginning', (t) => {
    const obj = {
        hello: {
            world: 'hello',
        },
    };
    
    const actual = jessy('/hello/world', '/', obj);
    
    t.equal(actual, 'hello');
    t.end();
});
