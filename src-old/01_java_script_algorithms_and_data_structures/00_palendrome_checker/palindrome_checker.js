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
    assert(typeof palindrome("eye") === "boolean")
    assert(palindrome("eye") === true)
    assert(palindrome("_eye") === true)
    assert(palindrome("race car") === true)
    assert(palindrome("not a palindrome") === false)
    assert(palindrome("A man, a plan, a canal. Panama") === true)
    assert(palindrome("never odd or even") === true)
    assert(palindrome("nope") === false)
    assert(palindrome("almostomla") === false)
    assert(palindrome("My age is 0, 0 si ega ym.") === true)
    assert(palindrome("1 eye for of 1 eye.") === false)
    assert(palindrome("0_0 (: /-\ :) 0-0") === true)
    assert(palindrome("five|\_/|four") === false)
}

function assert(b) {
    if(!b) {
        throw(Error)
    }
}