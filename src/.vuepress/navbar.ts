import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "前端技术",
    icon: "pigeonhole",
    prefix: "/前端技术/",
    children: [
      {
        text: "html",
        icon: "html",
        prefix: "html/",
        children: [{ text: "html 基础", link: "1" }],
      },
      {
        text: "css",
        icon: "css",
        prefix: "css/",
        children: [{ text: "css 基础", link: "1" }],
      },
      {
        text: "js",
        icon: "js",
        prefix: "js/",
        children: [{ text: "js 基础", link: "1" }],
      },
    ],
  },
]);
