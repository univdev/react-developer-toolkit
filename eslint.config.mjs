import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [{
    files: ["**/*.ts"],
}, {
    plugins: {
        "@typescript-eslint": typescriptEslint,
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 2022,
        sourceType: "module",
    },

    rules: {
        'curly': ['error', 'multi-line'],
        "@typescript-eslint/naming-convention": ["warn", {
            selector: "import",
            format: ["camelCase", "PascalCase"],
        }],
        eqeqeq: "warn",
        "no-throw-literal": "warn",
        semi: "warn",
    },
}];