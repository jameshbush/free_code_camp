function convertToRoman(num) {
  if (num < 0 || num > 10000) {
    throw Error("Input " + String(num) + " out of range (0-10,000)");
  }

  const SYMBOLS = [
    "I",
    "V", // 1, 5,
    "X",
    "L", // 10, 50,
    "C",
    "D", // 100, 500,
    "M",
    "v", // 1000, 5000,
    "x", // 10000,
  ];

  const integers = String(num).split("").map(Number).reverse();
  let romanNumeral = "";

  for (let i = 0; i < integers.length; i++) {
    const base = SYMBOLS[i * 2];
    const half = SYMBOLS[i * 2 + 1];
    const next = SYMBOLS[i * 2 + 2];
    let current = "";

    if ([0, 1, 2, 3].includes(integers[i])) {
      for (let j = 0; j < integers[i]; j++) {
        current += base;
      }
    } else if (integers[i] === 4) {
      current = base + half;
    } else if ([5, 6, 7, 8].includes(integers[i])) {
      current = half;
      for (let j = 5; j < integers[i]; j++) {
        current += base;
      }
    } else if (integers[i] === 9) {
      current = base + next;
    } else {
      throw Error("Unknown integer " + integers[i]);
    }

    romanNumeral = current + romanNumeral;
  }

  romanNumeral = romanNumeral.replace(/Mv/g, "MMMM");
  romanNumeral = romanNumeral.replace(/v/g, "MMMMM");
  romanNumeral = romanNumeral.replace(/Mx/g, "MMMMMMMMM");
  romanNumeral = romanNumeral.replace(/x/g, "MMMMMMMMMM");

  return romanNumeral;
}

function testConvertToRoman() {
  assert(convertToRoman(2) === "II");
  assert(convertToRoman(3) === "III");
  assert(convertToRoman(4) === "IV");
  assert(convertToRoman(5) === "V");
  assert(convertToRoman(9) === "IX");
  assert(convertToRoman(12) === "XII");
  assert(convertToRoman(16) === "XVI");
  assert(convertToRoman(29) === "XXIX");
  assert(convertToRoman(44) === "XLIV");
  assert(convertToRoman(45) === "XLV");
  assert(convertToRoman(68) === "LXVIII");
  assert(convertToRoman(83) === "LXXXIII");
  assert(convertToRoman(97) === "XCVII");
  assert(convertToRoman(99) === "XCIX");
  assert(convertToRoman(400) === "CD");
  assert(convertToRoman(500) === "D");
  assert(convertToRoman(501) === "DI");
  assert(convertToRoman(649) === "DCXLIX");
  assert(convertToRoman(798) === "DCCXCVIII");
  assert(convertToRoman(891) === "DCCCXCI");
  assert(convertToRoman(1000) === "M");
  assert(convertToRoman(1004) === "MIV");
  assert(convertToRoman(1006) === "MVI");
  assert(convertToRoman(1023) === "MXXIII");
  assert(convertToRoman(2014) === "MMXIV");
  assert(convertToRoman(3999) === "MMMCMXCIX");
}

function assert(b) {
  if (!b) {
    throw Error;
  }
}

export { convertToRoman, testConvertToRoman };
