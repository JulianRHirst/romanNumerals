export { fromRomanNumerals, toRomanNumerals };

const fromRomanNumerals = (roman) => {

    const value = Object.freeze({
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    });

    if (roman === undefined || typeof roman !== 'string' || roman ==="" ) throw new Error("String of roman numerals required");
    if (!/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/.test(roman)) throw new Error("Invalid characters in parameter / out of range");

    return [...roman].reduce(
        (total, numeral, position, roman) =>
            value[numeral] < value[roman[position + 1]]
                ? total - value[numeral] : total + value[numeral]
        , 0
    );
};

function toRomanNumerals( num ) { 

    if(isNaN(num)) throw new Error("Numeric required");

    if( num < 1 || num > 3999 ) throw new Error("Out of range");

    if( !Number.isInteger(num) ) throw new Error("Integer required");

    const mapToRoman = Object.freeze([
        Object.freeze(["","I","II","III","IV","V","VI","VII","VIII","IX"]),
        Object.freeze(["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"]),
        Object.freeze(["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"]),
        Object.freeze(["","M", "MM", "MMM", "MMMM"])
    ]);

    return [...String(num)].reverse().reduce((roman, digit, position) => mapToRoman[position][digit]+roman , "");
}