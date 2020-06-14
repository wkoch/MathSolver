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
  import { validate } from "./validator.ts";
  
  let data = [
    {
      code: "1",
      result: true,
      msg: "OK"
    },
    {
      code: "(1)",
      result: true,
      msg: "OK"
    },
    {
      code: "(1",
      result: false,
      msg: "Wrong"
    },
    {
      code: "1)",
      result: false,
      msg: "Wrong"
    },
    {
      code: "(+ 1 2)",
      result: true,
      msg: "OK"
    },
    {
      code: "(+ 1 (* 2 2))",
      result: true,
      msg: "OK"
    },
    {
      code: "(+ 1 (* 2 2))))",
      result: false,
      msg: "Wrong"
    }
  ]
  
  // Test Code
  data.forEach(e => {
    Deno.test(`${e.code} should be ${e.msg}`, () => {
      validate(tokenize(e.code));
    });
  });