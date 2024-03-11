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
        prefix: "HTML/",
        children: [{ text: "HTML 基础", link: "1" }],
      },
      {
        text: "CSS",
        icon: "css",
        prefix: "CSS/",
        children: [{ text: "CSS 基础", link: "1" }],
      },
      {
        text: "JavaScript",
        icon: "js",
        prefix: "JavaScript/",
        children: [{ text: "JavaScript 基础", link: "1" }],
      },
    ],
  },
]);
