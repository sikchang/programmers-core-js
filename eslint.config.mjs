import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


const types = {
  isObject: true,
  isArray: true,
  isNull: true,
  isString: true,
  isUndefined: true,
};

const lib = {
  getNode: true,
  attr: true,
  css:true,
  insertLast: true,
};

export default defineConfig([
  // 1번째 괄호 플러그인
  { 
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  
  { 
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...types,
        ...lib,
        gsap:true,
      }
    },
    rules: {
      "no-unused-vars":"off"
    }
  },
]);
