import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "前端技术",
      icon: "front",
      prefix: "前端技术/",
      children: [
        {
          text: "浏览器",
          prefix: "浏览器/",
          children: "structure",
          collapsible: true,
        },
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
          prefix: "面试相关/",
          children: [
            {
              text: "浏览器",
              prefix: "浏览器/",
              children: "structure",
              collapsible: true,
            },
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
              text: "vue",
              prefix: "vue/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "算法",
              prefix: "算法/",
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
      prefix: "后端技术/",
      collapsible: true,
      children: [
        {
          text: "nginx",
          prefix: "nginx/",
          children: "structure",
          collapsible: true,
        },
      ],
    },
    {
      text: "开发工具",
      icon: "tool",
      prefix: "开发工具/",
      collapsible: true,
      children: [
        {
          text: "git",
          prefix: "git/",
          children: "structure",
          collapsible: true,
        },
      ],
    },
    "intro",
  ],
});
