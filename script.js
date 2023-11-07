function convertToRoman(num) {
  const obj = {
    0: ['M', 1000],
    1: ['D', 500],
    2: ['C', 100],
    3: ['L', 50],
    4: ['X', 10],
    5: ['V', 5],
    6: ['I', 1]
  };

  let roman = '';

  for (let i = 0; i < 7; i++) {
    while (num >= obj[i][1]) {
      roman += obj[i][0];
      num -= obj[i][1];
    }

    if (i % 2 === 0 && i < 6) {
      const nextValue = obj[i + 2][1];
      if (num >= obj[i][1] - nextValue) {
        roman += obj[i + 2][0] + obj[i][0];
        num -= obj[i][1] - nextValue;
      }
    } else if (i % 2 === 1 && i < 6) {
      const nextValue = obj[i + 1][1];
      if (num >= obj[i][1] - nextValue) {
        roman += obj[i + 1][0] + obj[i][0];
        num -= obj[i][1] - nextValue;
      }
    }
  }

  return roman;
}

// Example usage:
console.log(convertToRoman(36)); // Output: "XXXVI"
