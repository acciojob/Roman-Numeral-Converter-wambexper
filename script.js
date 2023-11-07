function convertToRoman(num) {
  const romanNumerals = [
    { value: 100000, numeral: "C̅" },
    { value: 10000, numeral: "X̅" },
    { value: 5000, numeral: "V̅" },
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];

  let roman = "";

  for (const numeral of romanNumerals) {
    while (num >= numeral.value) {
      roman += numeral.numeral;
      num -= numeral.value;
    }
  }

  return roman;
}

// Example usage:
console.log(convertToRoman(14)); // Output: "XIV"
console.log(convertToRoman(798)); // Output: "DCCXCVIII"

