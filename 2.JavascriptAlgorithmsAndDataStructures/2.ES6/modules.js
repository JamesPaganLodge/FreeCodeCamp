// Understand the difference between import and require
import { capitalizeString } from "string_functions";

"use strict";
capitalizeString("hello!");
// ----------------------------------------------
// Use export to reuse a code block
"use strict";
export const foo = "bar";
export const bar = "foo";
// ----------------------------------------------
// Use * to import everything from a file
import * as capitalize from "capitalize_strings";
"use strict";
