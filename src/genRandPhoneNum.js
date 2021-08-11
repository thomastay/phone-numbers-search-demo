function genRandPhoneNumber() {
  return Math.floor(100_000_000 + Math.random() * 9_999_999_999).toString();
}

export function genPhoneNums(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(genRandPhoneNumber());
  }
  return result;
}
