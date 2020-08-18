function rot13(str) {
    const A_CHAR_CODE = 65
    const ROT13_OFFSET = 13
    const ALPHA_COUNT = 26

    let answer = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] < 'A' || 'Z' < str[i]) {
            answer += str[i]
            continue
        }

        answer += String.fromCharCode(
            (
                (
                    (
                        (
                            str.charCodeAt(i)
                        ) - A_CHAR_CODE
                    ) + ROT13_OFFSET
                ) % ALPHA_COUNT
            ) + A_CHAR_CODE
        )
    }

    return answer
}

function rot13Test() {
    assert(rot13("SERR PBQR PNZC") === "FREE CODE CAMP")
    assert(rot13("SERR CVMMN!") === "FREE PIZZA!")
    assert(rot13("SERR YBIR?") === "FREE LOVE?")
    assert(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") === "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.")
}

function assert(b) {
    if(!b) {
        throw(Error)
    }
}
