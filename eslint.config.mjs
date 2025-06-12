import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


const types = {
  isObject: true,
  isArray: true,
  isNull:true,
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
        getNode:true,
      }
    },
    rules: {
      "no-unused-vars":"off"
    }
  },
]);
