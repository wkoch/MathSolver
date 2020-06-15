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
    result: { type: "number", token: "1", next: null },
  },
  {
    code: "(1)",
    result: [{ type: "number", token: "1", next: null }],
  },
  {
    code: "(+ 1.2 22.36)",
    result: [
      {
        type: "operator",
        token: "+",
        next: {
          type: "number",
          token: "1.2",
          next: { type: "number", token: "22.36", next: null },
        },
      },
    ],
  },
  {
    code: "(+ 10 (- 20 (* 3 2)))",
    result: [
      {
        type: "operator",
        token: "+",
        next: {
          type: "number",
          token: "10",
          next: [
            {
              type: "operator",
              token: "-",
              next: {
                type: "number",
                token: "20",
                next: [
                  {
                    type: "operator",
                    token: "*",
                    next: {
                      type: "number",
                      token: "3",
                      next: { type: "number", token: "2", next: null },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
];

// Test Code
data.forEach((e) => {
  Deno.test(`${e.code} should parse correctly`, () => {
    let parsed = parse(tokenize(e.code));
    assertEquals(parsed, e.result);
  });
});
