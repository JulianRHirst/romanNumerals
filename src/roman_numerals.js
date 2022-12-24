export { fromRomanNumerals, toRomanNumerals };

const fromRomanNumerals = (roman) => {

    const numeralValues = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    return [...roman.toUpperCase()].reduce(
        (total, numeral, position, roman) =>
            numeralValues[numeral] < numeralValues[roman[position + 1]]
                ? total - numeralValues[numeral] : total + numeralValues[numeral]
        , 0
    );
};

function toRomanNumerals( num ) { 

    if( isNaN(num)) throw new Error("Numeric required");


    if( num < 1 || num >3899 ) throw new Error("Out of range");

    if( !Number.isInteger(num) ) throw new Error("Integer required");

    const mapToRoman = [
            ["","I","II","III","IV","V","VI","VII","VIII","IX"],
            ["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],
            ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
            ["","M", "MM", "MMM"]
        ];

    return [...String(num)].reverse().reduce((roman, digit, position) => mapToRoman[position][digit]+roman , "");
}
