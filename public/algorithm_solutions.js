window.algorithms = (function algorithms() {
  // Algo 00 Palindrome Checker

  function palindrome(str) {
    const AlphaNumRegex = /[a-zA-Z0-9]/g;
    const arr = str.toLowerCase().match(AlphaNumRegex);

    for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
      if (arr[i] !== arr[j]) {
        return false;
      }
    }

    return true;
  }

  function testPalindrome() {
    function assertEqual(argument, expectation) {
      if (palindrome(argument) !== expectation) {
        const msg = `palindrome(${argument}) does not equal ${expectation}`;
        console.log(msg);
        throw Error(msg);
      }
    }

    [
      ["eye", true],
      ["_eye", true],
      ["race car", true],
      ["not a palindrome", false],
      ["A man, a plan, a canal. Panama", true],
      ["never odd or even", true],
      ["nope", false],
      ["almostomla", false],
      ["My age is 0, 0 si ega ym.", true],
      ["1 eye for of 1 eye.", false],
      ["0_0 (: /- :) 0-0", true],
      ["five|_/|four", false],
    ].forEach(([argument, expectation]) => assertEqual(argument, expectation));
  }

  // Algo 01 Roman Numeral

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

  // Algo 02 Caesar's Cipher

  function rot13(str) {
    const A_CHAR_CODE = 65;
    const ROT13_OFFSET = 13;
    const ALPHA_COUNT = 26;

    const answer = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] < "A" || "Z" < str[i]) {
        answer.push(str[i]);
        continue;
      }

      let charCode = str.charCodeAt(i);
      charCode -= A_CHAR_CODE;
      charCode += ROT13_OFFSET;
      charCode %= ALPHA_COUNT;
      charCode += A_CHAR_CODE;

      answer.push(String.fromCharCode(charCode));
    }

    return answer.join("");
  }

  function testRot13() {
    assert_eq(rot13("SERR PBQR PNZC"), "FREE CODE CAMP");
    assert_eq(rot13("SERR CVMMN!"), "FREE PIZZA!");
    assert_eq(rot13("SERR YBIR?"), "FREE LOVE?");
    assert_eq(
      rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."),
      "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
    );
  }

  function assert_eq(a, b) {
    if (a !== b) {
      console.log(a, "!=", b);
      throw Error;
    }
    console.log(a, "==", b);
  }

  // Algo 03 Telephone Number Validator

  function telephoneCheck(str) {
    // 5555555, 15555555
    const UNFORMATTED_REGEX = /^1?\d{10}$/;

    // 555-555-5555, 1 555-555-5555
    const DASH_FORMATTED_REGEX = /^(1 )?\d{3}-\d{3}-\d{4}$/;

    // (555)555-5555, 1(555)555-5555, 1 (555)555-5555, 1 (555) 555-5555
    const PAREN_FORMATTED_REGEX = /^(1 |1)?\(\d{3}\) ?\d{3}-\d{4}$/;

    // 555 555 5555, 1 555 555 5555
    const SPACE_FORMATTED_REGEX = /^(1 )?\d{3} \d{3} \d{4}$/;

    if (UNFORMATTED_REGEX.test(str)) {
      return true;
    }
    if (DASH_FORMATTED_REGEX.test(str)) {
      return true;
    }
    if (PAREN_FORMATTED_REGEX.test(str)) {
      return true;
    }
    if (SPACE_FORMATTED_REGEX.test(str)) {
      return true;
    }

    return false;
  }

  function assertEqual(a, b) {
    if (a !== b) {
      throw Error;
    }
  }

  function testTelephoneCheck() {
    assertEqual(telephoneCheck("1 555-555-5555"), true);
    assertEqual(telephoneCheck("1 (555) 555-5555"), true);
    assertEqual(telephoneCheck("1(555)555-5555"), true);
    assertEqual(telephoneCheck("1 555 555 5555"), true);
    assertEqual(telephoneCheck("1 456 789 4444"), true);

    assertEqual(telephoneCheck("5555555555"), true);
    assertEqual(telephoneCheck("555-555-5555"), true);
    assertEqual(telephoneCheck("(555)555-5555"), true);

    assertEqual(telephoneCheck("1 555)555-5555"), false);
    assertEqual(telephoneCheck("2(757)6227382"), false);
    assertEqual(telephoneCheck("2(757)622-7382"), false);
    assertEqual(telephoneCheck("2 (757) 622-7382"), false);
    assertEqual(telephoneCheck("0 (757) 622-7382"), false);
    assertEqual(telephoneCheck("-1 (757) 622-7382"), false);
    assertEqual(telephoneCheck("2 757 622-7382"), false);
    assertEqual(telephoneCheck("10 (757) 622-7382"), false);
    assertEqual(telephoneCheck("27576227382"), false);

    assertEqual(telephoneCheck("555-5555"), false);
    assertEqual(telephoneCheck("5555555"), false);
    assertEqual(telephoneCheck("123**&!!asdf#"), false);
    assertEqual(telephoneCheck("55555555"), false);
    assertEqual(telephoneCheck("(6054756961)"), false);
    assertEqual(telephoneCheck("(275)76227382"), false);
    assertEqual(telephoneCheck("555)-555-5555"), false);
    assertEqual(telephoneCheck("(555-555-5555"), false);
    assertEqual(telephoneCheck("(555)5(55?)-5555"), false);
  }

  // Algo 04 Cash Register

  function checkCashRegister(price, cash, cashInDrawer) {
    const MONIES_ORDER = [
      "ONE HUNDRED",
      "TWENTY",
      "TEN",
      "FIVE",
      "ONE",
      "QUARTER",
      "DIME",
      "NICKEL",
      "PENNY",
    ];
    const MONEY_VALUES = {
      "ONE HUNDRED": 10000,
      TWENTY: 2000,
      TEN: 1000,
      FIVE: 500,
      ONE: 100,
      QUARTER: 25,
      DIME: 10,
      NICKEL: 5,
      PENNY: 1,
    };
    const TOTAL = "TOTAL";
    const REMAINING = "REMAINING";

    const amountPayable = (cash - price) * 100;
    const moneyDue = { TOTAL: amountPayable, REMAINING: amountPayable };
    const drawerTotals = cashInDrawer.reduce(
      (acc, [name, value]) => {
        acc[name] = value * 100;
        acc[TOTAL] += value * 100;
        acc[REMAINING] += value * 100;
        return acc;
      },
      {
        TOTAL: 0,
        countFor: (moneyKey) => drawerTotals[moneyKey] / MONEY_VALUES[moneyKey],
      }
    );

    const change = [];
    for (const moneyKey of MONIES_ORDER) {
      let count = 0;
      // while money remains
      while (drawerTotals.countFor(moneyKey) - count > 0) {
        const incrementValue = (count + 1) * MONEY_VALUES[moneyKey];
        if (incrementValue > moneyDue[REMAINING]) {
          break;
        } else {
          count++;
        }
      }

      moneyDue[REMAINING] -= count * MONEY_VALUES[moneyKey];
      change.push([moneyKey, (count * MONEY_VALUES[moneyKey]) / 100]);
    }

    if (moneyDue[REMAINING] !== 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (drawerTotals[TOTAL] === moneyDue[TOTAL]) {
      return { status: "CLOSED", change: change.reverse() };
    } else {
      return { status: "OPEN", change: change.filter(([, value]) => value) };
    }
  }

  function checkNestedEquality(a, b) {
    if (a["status"] !== b["status"]) {
      console.log(a, b);
      throw Error(`${a} != ${b}`);
    }

    if (a["change"].length !== b["change"].length) {
      console.log(a, b);
      throw Error(`${a} != ${b}`);
    }

    for (let i = 0; i < a["change"].length; i++) {
      for (const j of [0, 1]) {
        if (a["change"][i][j] !== b["change"][i][j]) {
          console.log(a, b);
          throw Error(`${a} != ${b}`);
        }
      }
    }
  }

  function testCheckCashRegister() {
    checkNestedEquality(
      checkCashRegister(19.5, 20, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
      ]),
      { status: "OPEN", change: [["QUARTER", 0.5]] }
    );

    checkNestedEquality(
      checkCashRegister(3.26, 100, [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100],
      ]),
      {
        status: "OPEN",
        change: [
          ["TWENTY", 60],
          ["TEN", 20],
          ["FIVE", 15],
          ["ONE", 1],
          ["QUARTER", 0.5],
          ["DIME", 0.2],
          ["PENNY", 0.04],
        ],
      }
    );

    checkNestedEquality(
      checkCashRegister(19.5, 20, [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
      ]),
      { status: "INSUFFICIENT_FUNDS", change: [] }
    );

    checkNestedEquality(
      checkCashRegister(19.5, 20, [
        ["PENNY", 0.01],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 1],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
      ]),
      { status: "INSUFFICIENT_FUNDS", change: [] }
    );

    checkNestedEquality(
      checkCashRegister(19.5, 20, [
        ["PENNY", 0.5],
        ["NICKEL", 0],
        ["DIME", 0],
        ["QUARTER", 0],
        ["ONE", 0],
        ["FIVE", 0],
        ["TEN", 0],
        ["TWENTY", 0],
        ["ONE HUNDRED", 0],
      ]),
      {
        status: "CLOSED",
        change: [
          ["PENNY", 0.5],
          ["NICKEL", 0],
          ["DIME", 0],
          ["QUARTER", 0],
          ["ONE", 0],
          ["FIVE", 0],
          ["TEN", 0],
          ["TWENTY", 0],
          ["ONE HUNDRED", 0],
        ],
      }
    );
  }

  return {
    palindrome,
    testPalindrome,
    convertToRoman,
    testConvertToRoman,
    rot13,
    testRot13,
    telephoneCheck,
    testTelephoneCheck,
    checkCashRegister,
    testCheckCashRegister,
  };
})();
