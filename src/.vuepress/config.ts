import { viteBundler } from "@vuepress/bundler-vite";
import path from "path";
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

function _resolve(dir: string) {
  return path.resolve(__dirname, dir);
}
export default defineUserConfig({
  base: "/blog/",
  lang: "zh-CN",
  head: [["link", { rel: "icon", href: "favicon.ico" }]],
  title: "Flysha",
  description: "Flysha's blog",
  theme,
  bundler: viteBundler({
    viteOptions: {
      resolve: {
        alias: {
          "/blog": _resolve("./public"),
          "@C":_resolve("./components")
        },
      },
    },
    vuePluginOptions: {},
  }),
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
