import { toRomanNumerals, fromRomanNumerals } from "./roman_numerals";

const romanNumeralTestCaseBase = [
    { roman: "I", arabic: 1},
    { roman:"XII", arabic: 12},
    { roman:"CXXIII", arabic: 123},
    { roman:"MCCXXXIV", arabic: 1234},
    { roman:"MMCCCXLV", arabic: 2345},
    { roman:"MMMCDLVI", arabic: 3456},
    { roman:"DLXVII", arabic: 567},
    { roman:"DCLXXVIII", arabic: 678},
    { roman:"DCCLXXXIX", arabic: 789},
    { roman:"DCCCXC", arabic: 890},
    { roman:"CM", arabic: 900},
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
    { roman:"MMDCCCXLVIII", arabic: 2848},
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

describe("toRomanNumerals", () => {

    test(`Test cases`, () => 
        romanNumeralTestCaseBase.forEach(({arabic, roman}) => 
            expect(toRomanNumerals(arabic)).toBe(roman))
    );
    

    test("Non-numeric parameter, throws error", () => {
        expect(() => toRomanNumerals()).toThrow("Numeric required");
        expect(() => toRomanNumerals("hello!")).toThrow("Numeric required");
        expect(() => toRomanNumerals([1, 2])).toThrow("Numeric required");
        expect(() => toRomanNumerals({a:0})).toThrow("Numeric required");
    });

    test("With parameter outside range 1.. 3899, throws error", () => {
        expect(() => toRomanNumerals(3900)).toThrowError("Out of range");
        expect(() => toRomanNumerals(12301)).toThrow("Out of range");
        expect(() => toRomanNumerals(-1)).toThrow("Out of range");
        expect(() => toRomanNumerals(0)).toThrow("Out of range");
        expect(() => toRomanNumerals(-2130)).toThrow("Out of range");
    });

    test("With non-integer, throws error", () => {
        expect(() => toRomanNumerals(3.243)).toThrow("Integer required");
        expect(() => toRomanNumerals(1233.001)).toThrow("Integer required");
    });
});

describe("fromRomanNumerals", () => {
    test(`Test cases`, () => 
    romanNumeralTestCaseBase.forEach(({arabic, roman}) => 
        expect(fromRomanNumerals(roman)).toBe(arabic))
    );
});
/* 
test("fromRomanNumerals() without parameters gives error", () => expect(fromRomanNumerals().toThrow("romanFromarabic: paramater required - string containing roman numerals"))));
test("fromRomanNumerals() with invalid characters or nonstring gives error", () => expect(fromRomanNumerals(-1).toThrow("romanFromarabic: error, positive values only"))));
test("fromRomanNumerals() with negative value gives error", () => expect(fromRomanNumerals(0).toThrow("romanFromarabic: error, positive values only"))));
test("fromRomanNumerals() with negative value gives error", () => expect(fromRomanNumerals(-234).toThrow("romanFromarabic: error, positive values only"))));
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals("").toThrow("romanFromarabic: error, non-numeric value passed"))));
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals([]).toThrow("romanFromarabic: error, non-numeric value passed"))));
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals(3001).toThrow("romanFromarabic: error, maximum value 3000"))));
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals(3001).toThrow("romanFromarabic: error, maximum value 3000"))));
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals(12301).toThrow("romanFromarabic: error, maximum value 3000"))));
*/
