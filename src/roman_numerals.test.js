import { toRomanNumerals, fromRomanNumerals } from "./roman_numerals";

const romanNumeralTestCaseBase = [
    {arabic: 1, roman: "I"},
    {arabic: 2, roman: "II"},
    { roman:"CCLXXV", arabic: 275},
    { roman:"CCXXXIX", arabic: 239},
    { roman:"CCCLXI", arabic: 361},
    { roman:"DCCCVI", arabic: 806},
    { roman:"CCCXIX", arabic: 319},
    { roman:"DXVII", arabic: 517},
    { roman:"CDXCVI", arabic: 496},
    { roman:"DCCCXCIX", arabic: 899},
    { roman:"CCCV", arabic: 305},
    { roman:"CCXCV", arabic: 295},
    { roman:"DCCCXI", arabic: 811},
    { roman:"DLVI", arabic: 556},
    { roman:"DCXIV", arabic: 614},
    { roman:"CMXXXIX", arabic: 939},
    { roman:"CCLXV", arabic: 265},
    { roman:"CCCXCIX", arabic: 399},
    { roman:"CMLXXIII", arabic: 973},
    { roman:"CDLXXXIII", arabic: 483},
    { roman:"DCCLII", arabic: 752},
    { roman:"CCCXXX", arabic: 330},
    { roman:"DCLXXXI", arabic: 681},
    { roman:"CXLVII", arabic: 147},
    { roman:"CCLXXXVI", arabic: 286},
    { roman:"CCCLX", arabic: 360},
    { roman:"DXXII", arabic: 522},
    { roman:"DCCLVIII", arabic: 758},
    { roman:"DCCCXLVIII", arabic: 848},
    { roman:"CXIV", arabic: 114},
    { roman:"CDXCVI", arabic: 496},
    { roman:"CMLVII", arabic: 957},
    { roman:"DCCXCII", arabic: 792},
    { roman:"DCXXXVI", arabic: 636},
    { roman:"DCCLXXVI", arabic: 776},
    { roman:"CCC", arabic: 300},
    { roman:"CXXXII", arabic: 132},
    { roman:"DCCCLXV", arabic: 865},
    { roman:"CCCXXVI", arabic: 326},
    { roman:"DCCVII", arabic: 707},
    { roman:"CLXII", arabic: 162},
    { roman:"MMCMIII", arabic: 2903}
]

// romanFromDecimal tests

describe("toRomanNumerals()", () => {

    test(`Test cases`, () => 
        romanNumeralTestCaseBase.forEach(({arabic, roman}) => 
            expect(toRomanNumerals(arabic)).toBe(roman))
    );
    

    test("Non-numeric parameter, throws error", () => {
        expect(() => toRomanNumerals().toThrowError("Numeric required"));
        expect(() => toRomanNumerals("").toThrowError("Numeric required"));
        expect(() => toRomanNumerals([]).toThrowError("Numeric required"));
    });

    test("With parameter outside range 1.. 3899, throws error", () => {
        expect(() => toRomanNumerals(3001).toThrowError("Out of Range"));
        expect(() => toRomanNumerals(3001).toThrowError("Out of Range"));
        expect(() => toRomanNumerals(12301).toThrowError("Out of Range"));
        expect(() => toRomanNumerals(-1).toThrowError("Out of range"));
        expect(() => toRomanNumerals(0).toThrowError("Out of range"));
        expect(() => toRomanNumerals(-2130).toThrowError("Out of range"));
    });

    test("With non-integer, throws error", () => {
        expect(() => toRomanNumerals(3.243).toThrowError("Integer required"));
        expect(() => toRomanNumerals(1233.001).toThrowError("Integer required"));
    });

});

describe("fromRomanNumerals()", () => {
    test(`Test cases`, () => 
    romanNumeralTestCaseBase.forEach(({arabic, roman}) => 
        expect(fromRomanNumerals(roman)).toBe(arabic))
    );
});
/* 
test("fromRomanNumerals() without parameters gives error", () => expect(fromRomanNumerals().toThrowError("romanFromarabic: paramater required - string containing roman numerals"))));
test("fromRomanNumerals() with negative value gives error", () => expect(fromRomanNumerals(-1).toThrowError("romanFromarabic: error, positive values only"))));
test("fromRomanNumerals() with negative value gives error", () => expect(fromRomanNumerals(0).toThrowError("romanFromarabic: error, positive values only"))));
test("fromRomanNumerals() with negative value gives error", () => expect(fromRomanNumerals(-234).toThrowError("romanFromarabic: error, positive values only"))));
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals("").toThrowError("romanFromarabic: error, non-numeric value passed"))));
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals([]).toThrowError("romanFromarabic: error, non-numeric value passed"))));
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals(3001).toThrowError("romanFromarabic: error, maximum value 3000"))));
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals(3001).toThrowError("romanFromarabic: error, maximum value 3000"))));
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals(12301).toThrowError("romanFromarabic: error, maximum value 3000"))));
*/
