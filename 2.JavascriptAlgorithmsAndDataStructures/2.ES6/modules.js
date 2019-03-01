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
// ----------------------------------------------
// Create an export fallback with export default
"use strict";
export default function subtract(x,y) {return x - y};
// ----------------------------------------------
// Import a default export
import subtract from "math_functions";

"use strict";
subtract(7,4);
