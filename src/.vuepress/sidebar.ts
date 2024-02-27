import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "前端技术",
      icon: "front",
      prefix: "front/",
      children: [
        {
          text: "html",
          prefix: "html/",
          children: "structure",
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
        {
          text: "面试相关",
          prefix: "interview/",
          children: [
            {
              text: "html",
              prefix: "html/",
              children: "structure",
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
      ],
      collapsible: true,
    },
    {
      text: "后端技术",
      icon: "server",
      prefix: "back/",
      collapsible: true,
      children: [
        {
          text: "nginx",
          prefix: "nginx/",
          children: "structure",
          collapsible: true,
        },
      ]
    },
    {
      text: "开发工具",
      icon: "tool",
      prefix: "devTools/",
      collapsible: true,
      children: [
        {
          text: "git",
          prefix: "git/",
          children: "structure",
          collapsible: true,
        },
      ]
    },
    "intro",
  ],
});
