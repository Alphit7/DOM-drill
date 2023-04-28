import { listUlChildren, alertName } from "./List-ulChildren.js";
import { removeDuplicates } from "./remove-duplicates.js";
import { reorder } from "./reorder-list.js";
import { filter } from "./Select-important.js";

removeDuplicates();
listUlChildren();
alertName();
document.addEventListener("keyup", reorder);
