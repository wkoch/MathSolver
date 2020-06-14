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
  level: number;
  type: string;
  token: string;
};

export function parse(tokens: string[]): List[] {
  let level = 0;
  let result: any[] = [];
  let current: any[] = [];
  let counter = 0;
  let total = tokens.length;

  tokens.forEach((token) => {
    counter += 1;
    if (token == "(") {
      if (current != []) {
        result.push(current);
        current = [];
      }
      level += 1;
    } else if (["+", "-", "*", "/", "^"].includes(token)) {
      let child: Operator = {
        level: level,
        type: "operator",
        token: token,
      };
      current.push(child);
    } else if (token == ")") {
      level -= 1;
      result.push(current);
    } else {
      let newChild: Numerical = {
        level: level,
        type: "number",
        token: token,
      };
      current.push(newChild);
    }
    // console.log(`${counter} de ${total}.`);
    if (counter == total) { // When there's no parenthesis.
      result.push(current);
    }
  });
  return result;
}
