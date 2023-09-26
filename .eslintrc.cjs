module.exports = {
  env: {
    browser: true, //代码运行在流浪器端
    es2021: true, //基于es2021检查
  },
  extends: [
    //继承已有规则
    //eslint全部默认规则是关闭的，这个配置项开启推荐规则，推荐规则参照文档
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", //ts语法规则
    "plugin:vue/vue3-essential", //vue3语法规则
    "plugin:prettier/recommended", //vue3语法规则
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    //指定解析器选项
    ecmaVersion: "latest", //校验ECMA最新版本
    parser: "@typescript-eslint/parser",
    sourceType: "module", //设置为"script"(默认)，或者"module"代码在ECMAScript模块中
  },
  plugins: [
    //Eslint支持使用第三方插件，在使用插件之前，你必须使用npm安装它
    "@typescript-eslint", //改elsint-plugin-前缀可以从插件名称被省略
    "vue",
  ],
  rules: {
    /** "off" or 0 关闭规则 ， "warn" or 1 警告  "error" or 2 报错 */
    "no-alert": "error", //没有alert
    "no-const-assign": "error", //禁止修改const声明的变量
    eqeqeq: ["error", "always"], //消除类型不安全的等式操作符
    /**
                                         * "null"：自定义此规则如何处理null文字。可能的值：
                                            always （默认） - 始终使用===或！==。
                                            never- 永远不要使用===或！== null。
                                            ignore- 不要将此规则应用于null。
                                         *  */
    "no-var": "error", // 要求使用 let 或 const 而不是 var
    "no-multiple-empty-lines": ["warn", { max: 1 }], // 不允许多个空行
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unexpected-multiline": "error", // 禁止空余的多行
    "no-useless-escape": "off", // 禁止不必要的转义字符
    "prettier/prettier": ["error", { endOfLine: "auto" }],

    // typeScript (https://typescript-eslint.io/rules)
    "@typescript-eslint/no-unused-vars": "error", // 禁止定义未使用的变量
    "@typescript-eslint/prefer-ts-expect-error": "error", // 禁止使用 @ts-ignore
    "@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间。
    "@typescript-eslint/semi": "off",

    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    "vue/multi-word-component-names": "off", // 要求组件名称始终为 “-” 链接的单词
    "vue/script-setup-uses-vars": "error", // 防止<script setup>使用的变量<template>被标记为未使用
    "vue/no-mutating-props": "off", // 不允许组件 prop的改变
    "vue/attribute-hyphenation": "off", // 对模板中的自定义组件强制执行属性命名样式
  },
};
