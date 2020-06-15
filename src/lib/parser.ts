type List = {
  level: number;
  type: string;
  token: string;
  children: List[] | Operator[] | Numerical[];
};

type Operator = {
  level: number;
  type: string;
  token: string;
};

type Numerical = {
  position: number;
  level: number;
  type: string;
  token: string;
};

export function parse(
  tokens: string[],
  remaining: number = tokens.length,
): any {
  if (tokens.length >= 1) {
    let head: string = String(tokens.shift());
    let tail = tokens;

    if (head == "(") {
      // List starts
      return [parse(tail, tail.length)];
    } else if (head == ")") {
      // List ends
      return null;
    } else if (["+", "-", "*", "/", "^"].includes(head)) {
      // Operator
      return { type: "operator", token: head, next: parse(tail) };
    } else {
      // Number
      return { type: "number", token: head, next: parse(tail) };
    }
  } else {
    return null;
  }
}
