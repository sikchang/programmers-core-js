import { isString } from "../utils/type.js";
import { addClass, removeClass } from "./css.js";
import { getNode as $ } from "./getNode.js";


export function showAlert(
  { target: node,
    message = '오류발생',
    timeout = 1000,
    className = 'active' }) {
    // if (isString(node)) node = $(node)

    addClass(node, className);
    $(node).textContent = message;

    setTimeout(() => {
      removeClass(node, className);
    },  timeout);
}