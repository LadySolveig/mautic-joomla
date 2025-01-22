import globals from "globals";
import js from "@eslint/js";

export default [
	js.configs.recommended,
    {
        ignores: ["vendor/**"],
    },
    {
        files: ["**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                Joomla: true,
                mt: true,
                ...globals.browser,
                ...globals.es2021,
            },
        },
        rules: {
            indent: ["error", "tab", { SwitchCase: 1 }],
            "linebreak-style": ["error", "unix"],
            quotes: ["error", "single"],
            semi: ["error", "always"],
        },
    },
    {
        files: [".eslintrc.{js,cjs}"],
        languageOptions: {
            sourceType: "script",
            globals: globals.node,
        },
    },
];