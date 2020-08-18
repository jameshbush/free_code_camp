function rot13(str) {
    const A_CHAR_CODE = 65
    const ROT13_OFFSET = 13
    const ALPHA_COUNT = 26

    const answer = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] < 'A' || 'Z' < str[i]) {
            answer.push(str[i])
            continue
        }

        let charCode = str.charCodeAt(i)
        charCode -= A_CHAR_CODE
        charCode += ROT13_OFFSET
        charCode %= ALPHA_COUNT
        charCode += A_CHAR_CODE

        answer.push(String.fromCharCode(charCode))
    }

    return answer.join('')
}

function rot13Test() {
    assert_eq(rot13("SERR PBQR PNZC"), "FREE CODE CAMP")
    assert_eq(rot13("SERR CVMMN!"), "FREE PIZZA!")
    assert_eq(rot13("SERR YBIR?"), "FREE LOVE?")
    assert_eq(
        rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."),
        "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
    )
}

function assert_eq(a, b) {
    if (a !== b) {
        console.log(a, '!=', b)
        throw (Error)
    }
    console.log(a, '==', b)
}
