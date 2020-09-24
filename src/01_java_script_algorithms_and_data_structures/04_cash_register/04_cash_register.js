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

export { checkCashRegister, testCheckCashRegister };
