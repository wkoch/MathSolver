import {
  assert,
  assertArrayContains,
  assertEquals,
  assertMatch,
  assertNotEquals,
  assertStrictEquals,
  assertStringContains,
  assertThrows,
  equal,
  unimplemented,
  unreachable,
} from "../deps.ts";

import { tokenize } from "./tokenizer.ts";

let data = [
  {
    code: "+ 1 2",
    result: ["+", "1", "2"]
  },
  {
    code: "(+ 1 2)",
    result: ["(", "+", "1", "2", ")"]
  },
  {
    code: "(+ 1 (* 2 2))",
    result: ["(", "+", "1", "(", "*", "2", "2", ")", ")"]
  },
  {
    code: "(+ 1 (- 2.1 (* 3.25 (/ 4 (^ 56 42)))))",
    result: ["(", "+", "1", "(", "-", "2.1", "(", "*", "3.25", "(", "/", "4", "(", "^", "56", "42", ")", ")", ")", ")", ")"],
  }
]

// Test Code
data.forEach(e => {
  Deno.test(`${e.code} should tokenize correctly`, () => {
    let tokenized = tokenize(e.code);
    assertEquals(tokenized, e.result);
  });
});