
export { fromRomanNumerals, toRomanNumerals };

function fromRomanNumerals(roman) {
    // Create an object that maps Roman numeral characters to numbers
    const romanToNumberMap = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
    // Split the Roman numeral string into an array of characters
    const numerals = roman.split('');
  
    // Use the reduce method to iterate through the array of characters
    // and convert them to numbers
    return numerals.reduce((accumulator, currentValue) => {
      // Get the numeric value of the current character
      const currentValueNumber = romanToNumberMap[currentValue];
  
      // If the numeric value of the current character is greater than
      // or equal to the numeric value of the previous character,
      // add it to the accumulator
      if (currentValueNumber >= romanToNumberMap[accumulator[accumulator.length - 1]]) {
        return accumulator + currentValueNumber;
      }
      // If the numeric value of the current character is less than
      // the numeric value of the previous character,
      // subtract it from the accumulator
      return accumulator - currentValueNumber;
    }, 0);
}
  


function toRomanNumerals( decimal ) { return "X"; };
