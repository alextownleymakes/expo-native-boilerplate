import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

export default [
  {
    ignores: ["node_modules", ".expo", "dist", "build"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        fetch: "readonly"
      }
    }
  },
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser
    },
    plugins: {
      "@typescript-eslint": ts,
      react,
      "react-hooks": reactHooks
    },
    rules: {
      "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }],
      "import/extensions": "off",
      "import/no-unresolved": "off",
      "no-use-before-define": "off"
    }
  },
  prettier
];
