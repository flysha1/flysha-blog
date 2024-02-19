import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "前端技术",
      icon: "pigeonhole",
      prefix: "front/",
      children: [
        {
          text: "html",
          prefix: "html/",
          children: ["1", "2", "tips"],
          collapsible: true,
        },
        {
          text: "css",
          prefix: "css/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "js",
          prefix: "js/",
          children: "structure",
          collapsible: true,
        },
      ],
      collapsible: true,
    },
    "intro",
  ],
});
