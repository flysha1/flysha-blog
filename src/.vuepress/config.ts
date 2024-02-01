import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",
  lang: "zh-CN",
  head: [
    [
      "link", 
      { rel: "icon", href: "favicon.ico" },
    ],
  ],
  title: "Flysha",
  description: "Flysha's blog",
  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
