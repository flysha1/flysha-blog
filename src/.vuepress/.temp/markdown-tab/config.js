import CodeTabs from "D:/code/vuepress/flysha-blog/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.47_vuepress@2.0.0-rc.15/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import Tabs from "D:/code/vuepress/flysha-blog/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.47_vuepress@2.0.0-rc.15/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/code/vuepress/flysha-blog/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.47_vuepress@2.0.0-rc.15/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
