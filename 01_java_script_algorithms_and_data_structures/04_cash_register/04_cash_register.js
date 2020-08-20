function checkCashRegister(price, cash, cashInDrawer) {
    const MONIES_ORDER = ['ONE HUNDRED', 'TWENTY', 'TEN', 'FIVE', 'ONE', 'QUARTER', 'DIME', 'NICKEL', 'PENNY']
    const MONEY_VALUES = { 'ONE HUNDRED': 10000, 'TWENTY': 2000, 'TEN': 1000, 'FIVE': 500, 'ONE': 100, 'QUARTER': 25, 'DIME': 10, 'NICKEL': 5, 'PENNY': 1, }
    const TOTAL = 'TOTAL'
    const DRAWER_VALUES = cashInDrawer.reduce((acc, [name, value]) => {
        acc[name] = value * 100
        acc[TOTAL] += acc[name]
        return acc
    }, { TOTAL: 0 })
    const moneyDueTotal = (cash - price) * 100
    let moneyDueRemaining = moneyDueTotal
    const change = []

    for (const key of MONIES_ORDER) {
        let count = 0
        while (((DRAWER_VALUES[key]) / MONEY_VALUES[key]) - count > 0) {
            const nextValue = MONEY_VALUES[key] * (count + 1)
            if (moneyDueRemaining - nextValue < 0) { break }
            count++
        }
        moneyDueRemaining -= count * MONEY_VALUES[key]
        change.push([key, count * MONEY_VALUES[key] / 100])
    }

    if (moneyDueRemaining !== 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] }
    } else if (DRAWER_VALUES[TOTAL] === moneyDueTotal) {
        return { status: "CLOSED", change: change.reverse() }
    } else {
        return { status: "OPEN", change: change.filter(([, value]) => value) }
    }
}

function checkCashRegisterTest() {
    console.log(checkCashRegister(19.5, 20,
        [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]),
        { status: "OPEN", change: [["QUARTER", 0.5]] })

    console.log(checkCashRegister(3.26, 100,
        [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]),
        { status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]] })

    console.log(checkCashRegister(19.5, 20,
        [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]),
        { status: "INSUFFICIENT_FUNDS", change: [] })

    console.log(checkCashRegister(19.5, 20,
        [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]),
        { status: "INSUFFICIENT_FUNDS", change: [] })

    console.log(checkCashRegister(19.5, 20,
        [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]),
        { status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]] })
}

