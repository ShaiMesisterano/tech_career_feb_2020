// Arrange
// Act
// Assert
const calc = require('./calc');
// Given - when - then
describe('Given a calculator', () => {
    describe('When adding two numbers', () => {
        // arrange
        const num1 = 3;
        const num2 = 4;
        // act
        const result = calc.add(num1, num2);
        // assert
         it('Then the correct result should be returned', () => {
             expect(result).toBe(7);
         })
    });
    describe('When adding a string', () => {
        const num1 = "QA";
        const num2 = 2;
        it('Then an error should occur', () => {
            expect(() => calc.add(num1, num2)).toThrow();
        })
    });
    describe('when dividing two numbers', () => {
        it('should return the correct result', () => {
            // arrange
            const num1 = 5;
            const num2 = 1;
            // act
            const result = calc.divide(num1, num2);
            // assert
            expect(result).toBe(5);
        });
    });
    describe('when dividing in zero', () => {
        it('Then an error should be thrown', () => {
            const num1 = 5;
            calc.isZero = function() {
                return true;
            }
            expect(() => calc.divide(num1, num2)).toThrow();
        })
    })
});