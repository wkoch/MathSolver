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
import { parse } from "./parser.ts";
import { evaluate } from "./evaluator.ts";

let data = [
  {
    code: "1",
    result: 1,
  },
  {
    code: "(1)",
    result: 1,
  },
  {
    code: "(+ 1 1)",
    result: 2,
  },
  {
    code: "(+ 120 10.123)",
    result: 130.123,
  },
  {
    code: "(+ 10 (- 20 (* 3 2)))",
    result: 24,
  },
];

// Test Code
data.forEach((e) => {
  Deno.test(`${e.code} should evaluate to ${e.result}.`, () => {
    let result = evaluate(parse(tokenize(e.code)));
    assertEquals(result, e.result);
  });
});
