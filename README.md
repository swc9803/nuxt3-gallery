# Nuxt 3 Eslint Install

1. yarn add -D eslint eslint-plugin-vue typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser @nuxtjs/eslint-config-typescript

2. yarn run eslint --init
    JavaScript modules (import/export)
    Vue.js
    No
    Node
    JavaScript
    No

3. .eslintrc.js
    module.exports = {
        "env": {
            "es2021": true,
            "node": true
        },
        "extends": [
            "eslint:recommended",
            "plugin:vue/essential",
            "plugin:@typescript-eslint/recommended",
            "@nuxtjs/eslint-config-typescript"
        ],
        "parserOptions": {
            "ecmaVersion": 13,
            "parser": "@typescript-eslint/parser",
            "sourceType": "module"
        },
        "plugins": [
            "vue",
            "@typescript-eslint"
        ],
        "rules": {
        }
    };
4. package.json
  "lint": "eslint --ext .ts,.js,.vue ."

5. yarn init

6. restart vscode# nuxt-eslint-template
