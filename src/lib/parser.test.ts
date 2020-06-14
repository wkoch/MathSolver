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

let data = [
  {
    code: "1",
    result: [{ level: 0, type: "number", token: "1" }],
  },
  // {
  //   code: "(1)",
  //   result: [{ level: 1, type: "number", token: "1" }],
  // },
  // {
  //   code: "(+ 1.2 22.36)",
  //   result: [
  //       { level: 1, type: "operator", token: "+" },
  //       { level: 1, type: "number", token: "1.2" },
  //       { level: 1, type: "number", token: "22.36" },
  //   ],
  // },
  // {
  //   code: "(+ 10 (- 20 (* 3 2)))",
  //   result: [
  //       { level: 1, type: "operator", token: "+" },
  //       { level: 1, type: "number", token: "10" },
  //       [
  //         { level: 1, type: "operator", token: "-" },
  //         { level: 1, type: "number", token: "20" },
  //         [
  //           { level: 1, type: "operator", token: "*" },
  //           { level: 1, type: "number", token: "3" },
  //           { level: 1, type: "number", token: "2" }
  //         ]
  //       ]
  //   ],
  // },
];

// Test Code
data.forEach((e) => {
  Deno.test(`${e.code} should parse correctly`, () => {
    let parsed = parse(tokenize(e.code));
    assertEquals(parsed, e.result);
  });
});
