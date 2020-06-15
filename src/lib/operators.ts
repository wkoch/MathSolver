export function add(a: number, b: number) {
  return a + b;
}

export function subtract(a: number, b: number) {
  return a - b;
}

export function multiply(a: number, b: number) {
  return a * b;
}

export function divide(a: number, b: number) {
  return a / b;
}

export function exponential(a: number, b: number) {
  return a ^ b;
}
// function addList(list) { return list.reduce((acc, n) => Number(acc) + Number(n)); }
// function subtractList(list) { return list.reduce((acc, n) => Number(acc) - Number(n)); }

export const keywords = {
  "+": add,
  "-": subtract,
  "*": multiply,
  "/": divide,
  "^": exponential,
};
