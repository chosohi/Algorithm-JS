function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    lookup[letter] ? lookup[letter]++ : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // loockup에 해당 알파벳의 갯수가 0 이하이면 false
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
