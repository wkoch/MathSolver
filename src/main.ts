import {
  error,
  success,
  warning,
  errorLog,
  successLog,
  warningLog,
} from "https://deno.land/x/colorlog/mod.ts";

import { tokenize } from "./lib/tokenizer.ts";
import { validate } from "./lib/validator.ts";
import { parse } from "./lib/parser.ts";

let sample = `(+ 1 1)`;

validate(tokenize(sample), true);
console.log("\n");
console.log(tokenize(sample));
console.log(parse(tokenize(sample)));
