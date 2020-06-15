export function parse(tokens: string[]): any {
  if (tokens.length >= 1) {
    let token: string = String(tokens.shift());

    if (token == "(") {
      // List starts
      return [parse(tokens)];
    } else if (token == ")") {
      // List ends
      return null;
    } else if (["+", "-", "*", "/", "^"].includes(token)) {
      // Operator
      return { type: "operator", token: token, next: parse(tokens) };
    } else {
      // Number
      return { type: "number", token: token, next: parse(tokens) };
    }
  } else {
    return null;
  }
}
