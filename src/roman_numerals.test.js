import { toRomanNumerals, fromRomanNumerals } from "./roman_numerals";

const romanNumeralTestCaseBase = [
    {decimal: 1, roman: "I"},
    {decimal: 2, roman: "II"},
    { roman:"CCLXXV", decimal: 275},
    { roman:"CCXXXIX", decimal: 239},
    { roman:"CCCLXI", decimal: 361},
    { roman:"DCCCVI", decimal: 806},
    { roman:"CCCXIX", decimal: 319},
    { roman:"DXVII", decimal: 517},
    { roman:"CDXCVI", decimal: 496},
    { roman:"DCCCXCIX", decimal: 899},
    { roman:"CCCV", decimal: 305},
    { roman:"CCXCV", decimal: 295},
    { roman:"DCCCXI", decimal: 811},
    { roman:"DLVI", decimal: 556},
    { roman:"DCXIV", decimal: 614},
    { roman:"CMXXXIX", decimal: 939},
    { roman:"CCLXV", decimal: 265},
    { roman:"CCCXCIX", decimal: 399},
    { roman:"CMLXXIII", decimal: 973},
    { roman:"CDLXXXIII", decimal: 483},
    { roman:"DCCLII", decimal: 752},
    { roman:"CCCXXX", decimal: 330},
    { roman:"DCLXXXI", decimal: 681},
    { roman:"CXLVII", decimal: 147},
    { roman:"CCLXXXVI", decimal: 286},
    { roman:"CCCLX", decimal: 360},
    { roman:"DXXII", decimal: 522},
    { roman:"DCCLVIII", decimal: 758},
    { roman:"DCCCXLVIII", decimal: 848},
    { roman:"CXIV", decimal: 114},
    { roman:"CDXCVI", decimal: 496},
    { roman:"CMLVII", decimal: 957},
    { roman:"DCCXCII", decimal: 792},
    { roman:"DCXXXVI", decimal: 636},
    { roman:"DCCLXXVI", decimal: 776},
    { roman:"CCC", decimal: 300},
    { roman:"CXXXII", decimal: 132},
    { roman:"DCCCLXV", decimal: 865},
    { roman:"CCCXXVI", decimal: 326},
    { roman:"DCCVII", decimal: 707},
    { roman:"CLXII", decimal: 162},
    { roman:"MMCMIII", decimal: 2903}
]

// romanFromDecimal tests
romanNumeralTestCaseBase.forEach(({decimal, roman}) => {
    test(`toRomanNumerals: test case ${decimal}=${roman}`, () => expect(toRomanNumerals(decimal)).toBe(roman));
});
/*
describe("toRomanNumerals()", () => {
    test("toRomanNumerals() with no parameter gives error", () => expect(toRomanNumerals().toThrowError("Numeric required")));
    test("toRomanNumerals() with string gives error", () => expect(toRomanNumerals("").toThrowError("Numeric required")));
    test("toRomanNumerals() with array gives error", () => expect(toRomanNumerals([]).toThrowError("Numeric required")));
    test("toRomanNumerals() with non-numeric gives error", () => expect(toRomanNumerals(3001).toThrowError("Out of Range")));
    test("toRomanNumerals() with non-numeric gives error", () => expect(toRomanNumerals(3001).toThrowError("Out of Range")));
    test("toRomanNumerals() with non-numeric gives error", () => expect(toRomanNumerals(12301).toThrowError("Out of Range")));
    test("toRomanNumerals() with negative value gives error", () => expect(toRomanNumerals(-1).toThrowError("Out of range")));
    test("toRomanNumerals() with negative value gives error", () => expect(toRomanNumerals(0).toThrowError("Out of range")));
    test("toRomanNumerals() with negative value gives error", () => expect(toRomanNumerals(-234).toThrowError("Out of range")));
    test("toRomanNumerals() with non-integer gives error", () => expect(toRomanNumerals(3.243).toThrowError("Integer required")));
    test("toRomanNumerals() with non-integer gives error", () => expect(toRomanNumerals(2342.993).toThrowError("Integer required")));
});
*/
// decimalFromRoman tests
romanNumeralTestCaseBase.forEach(({decimal, roman}) => {
    test(`fromRomanNumerals: test case ${roman}=${decimal}`, () => expect(fromRomanNumerals(roman)).toBe(decimal));
});


/* 
test("fromRomanNumerals() without parameters gives error", () => expect(fromRomanNumerals().toThrowError("romanFromDecimal: paramater required - string containing roman numerals"))));
test("fromRomanNumerals() with negative value gives error", () => expect(fromRomanNumerals(-1).toThrowError("romanFromDecimal: error, positive values only"))));
test("fromRomanNumerals() with negative value gives error", () => expect(fromRomanNumerals(0).toThrowError("romanFromDecimal: error, positive values only"))));
test("fromRomanNumerals() with negative value gives error", () => expect(fromRomanNumerals(-234).toThrowError("romanFromDecimal: error, positive values only"))));
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals("").toThrowError("romanFromDecimal: error, non-numeric value passed"))));
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals([]).toThrowError("romanFromDecimal: error, non-numeric value passed"))));
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals(3001).toThrowError("romanFromDecimal: error, maximum value 3000"))));
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals(3001).toThrowError("romanFromDecimal: error, maximum value 3000"))));
test("fromRomanNumerals() with non-numeric gives error", () => expect(fromRomanNumerals(12301).toThrowError("romanFromDecimal: error, maximum value 3000"))));
*/
