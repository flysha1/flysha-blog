import { hasGlobalComponent } from "D:/code/vuepress/flysha-blog/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.47_vuepress@2.0.0-rc.15/node_modules/@vuepress/helper/lib/client/index.js";

import { useStyleTag } from "D:/code/vuepress/flysha-blog/node_modules/.pnpm/@vueuse+core@11.1.0_vue@3.5.8/node_modules/@vueuse/core/index.mjs";
import FontIcon from "D:/code/vuepress/flysha-blog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.54_kav52zoxyxpahvougjcciqlsxy/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "D:/code/vuepress/flysha-blog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.54_kav52zoxyxpahvougjcciqlsxy/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/code/vuepress/flysha-blog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.54_kav52zoxyxpahvougjcciqlsxy/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/code/vuepress/flysha-blog/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.54_kav52zoxyxpahvougjcciqlsxy/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("//at.alicdn.com/t/c/font_4429412_7k7ek2mrfg5.css");
`);
  },
  rootComponents: [

  ],
};
