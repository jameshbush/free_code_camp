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

function palindromeTest() {
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

export { palindrome, palindromeTest };
