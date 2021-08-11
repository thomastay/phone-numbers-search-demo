const NINES = 1e12 - 1;
const TEN = 1e11;

function genRandPhoneNumber() {
  const result = TEN + Math.floor(Math.random() * NINES);
  return `+${result}`;
}

export function genPhoneNums(n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(genRandPhoneNumber());
  }
  return result;
}
