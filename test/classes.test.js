var assert = require('assert');
var number = require('./../src/modules/number');
var numbers = require('./../src/modules/numbers');

describe('Testando Classes Number e Numbers', () =>{
    describe('Testando Number', () =>{
        describe('Testando sum', () =>{
            it('Deve retornar 2', () =>{
                assert.equal(number.sum(1,1), 2);
            });
            it('Deve retornar 10', () =>{
                assert.equal(number.sum(15,-5), 10);
            });
            it('Deve retornar 0', () =>{
                assert.equal(number.sum(1,-1), 0);
            });
            it('Deve retornar  One of the values is not a number', () =>{
                assert.equal(number.sum('a',1), 'One of the values is not a number');
            });
        });
        describe('Testando divide', () =>{
            it('Deve retornar 5', () =>{
                assert.equal(number.divide(10,2), 5);
            });
            it('Deve retornar -10', () =>{
                assert.equal(number.divide(100,-10), -10);
            });
            it('Deve retornar 0', () =>{
                assert.equal(number.divide(1,0), Infinity);
            });
            it('Deve retornar 0', () =>{
                assert.equal(number.divide(0,1), 0);
            });
            it('Deve retornar  One of the values is not a number', () =>{
                assert.equal(number.divide('c',1), 'One of the values is not a number');
            });
        });
    });
    describe('Testando Numbers', () =>{
        describe('Testando sum', () =>{
            it('Deve retornar 20', () =>{
                assert.equal(numbers.sum([15,5]), 20);
            });
            it('Deve retornar 0', () =>{
                assert.equal(numbers.sum([5,-5]), 0);
            });
            it('Deve retornar -7', () =>{
                assert.equal(numbers.sum([7,-14]), -7);
            });
            it('Deve retornar  One of the values is not a number', () =>{
                assert.equal(numbers.sum(['d',1]), 'One of the values is not a number');
            });
            it('Deve retornar  The value is not a valid object', () =>{
                assert.equal(numbers.sum(1), 'The value is not a valid object');
            });
        });
        describe('Testando average', () =>{
            it('Deve retornar 3', () =>{
                assert.equal(numbers.average([3,3,3]), 3);
            });
            it('Deve retornar 3', () =>{
                assert.equal(numbers.average([10,-20,-30]), -13.33);
            });
            it('Deve retornar 11', () =>{
                assert.equal(numbers.average([100,33,-100]), 11);
            });
            it('Deve retornar  One of the values is not a number', () =>{
                assert.equal(numbers.average(['e',1]), 'One of the values is not a number');
            });
            it('Deve retornar  The value is not a valid object', () =>{
                assert.equal(numbers.average(12), 'The value is not a valid object');
            });
        });
    });
});