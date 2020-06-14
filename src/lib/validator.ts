import {
    error,
    success,
    warning,
    errorLog,
    successLog,
    warningLog,
  } from "https://deno.land/x/colorlog/mod.ts";

// Validates the syntax
export function validate(tokens: string[], strict: boolean = false): boolean {
  let parenthesisCheck = checkParenthesis(tokens);
  if (strict) {
    if (parenthesisCheck) {
      successLog("Syntax check: OK!");
    } else {
      throw "Syntax error. Missing parenthesis!";
    }
  }
  return parenthesisCheck;
}

function checkParenthesis(tokens: string[]): boolean {
  let opening_tags = 0;
  let closing_tags = 0;
  opening_tags = tokens.filter((e: string) => e == "(").length;
  closing_tags = tokens.filter((e: string) => e == ")").length;
  if (opening_tags == closing_tags) {
    return true;
  } else {
    return false;
  }
}