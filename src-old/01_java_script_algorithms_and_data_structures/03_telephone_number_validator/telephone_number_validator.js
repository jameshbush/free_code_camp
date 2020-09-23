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

function telephoneCheckTest() {
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
