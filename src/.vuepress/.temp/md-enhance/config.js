import CodeDemo from "D:/code/vuepress/flysha-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.54_k5x2vkju3jgi5hh5zgbj3g6kqi/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/code/vuepress/flysha-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.54_k5x2vkju3jgi5hh5zgbj3g6kqi/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import FlowChart from "D:/code/vuepress/flysha-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.54_k5x2vkju3jgi5hh5zgbj3g6kqi/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import MarkMap from "D:/code/vuepress/flysha-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.54_k5x2vkju3jgi5hh5zgbj3g6kqi/node_modules/vuepress-plugin-md-enhance/lib/client/components/MarkMap.js";
import Mermaid from "D:/code/vuepress/flysha-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.54_k5x2vkju3jgi5hh5zgbj3g6kqi/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "D:/code/vuepress/flysha-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.54_k5x2vkju3jgi5hh5zgbj3g6kqi/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "D:/code/vuepress/flysha-blog/node_modules/.pnpm/@mdit+plugin-spoiler@0.13.1/node_modules/@mdit/plugin-spoiler/spoiler.css";
import "D:/code/vuepress/flysha-blog/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.54_k5x2vkju3jgi5hh5zgbj3g6kqi/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("FlowChart", FlowChart);
    app.component("MarkMap", MarkMap);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
  },
};
