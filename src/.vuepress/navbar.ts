import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "前端技术",
    icon: "pigeonhole",
    prefix: "/前端技术/",
    children: [
      {
        text: "HTML",
        icon: "HTML",
        prefix: "html/",
        children: [{ text: "HTML 基础", link: "1" }],
      },
      {
        text: "CSS",
        icon: "css",
        prefix: "css/",
        children: [{ text: "CSS 基础", link: "1" }],
      },
      {
        text: "JavaScript",
        icon: "js",
        prefix: "JavaScript/",
        children: [
          { text: "基本语法", link: "基本语法/词法语法" },
          { text: "内置对象", link: "内置对象/全局对象-值属性/Infinity" },
          { text: "核心模块", link: "核心模块/编译阶段/1" },
        ],
      },
    ],
  },
]);
