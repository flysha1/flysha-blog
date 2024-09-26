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
          text: "计算机网络",
          prefix: "计算机网络/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "HTML",
          prefix: "html/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "CSS",
          prefix: "css/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "JavaScript",
          prefix: "JavaScript/",
          children: [
            {
              text: "基本语法",
              prefix: "基本语法/",
              children: [
                "词法语法",
                {
                  text: "数据类型和值",
                  prefix: "数据类型和值/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "表达式",
                  prefix: "表达式/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "运算符",
                  prefix: "运算符/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "语句和声明",
                  prefix: "语句和声明/",
                  children: "structure",
                  collapsible: false,
                },
              ],
              collapsible: true,
            },
            {
              text: "内置对象",
              prefix: "内置对象/",
              children: [
                {
                  text: "全局对象-值属性",
                  prefix: "全局对象-值属性/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "全局对象-函数属性",
                  prefix: "全局对象-函数属性/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "Object",
                  prefix: "Object/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "Array",
                  prefix: "Array/",
                  children: "structure",
                  collapsible: false,
                },
              ],
              collapsible: true,
            },
            {
              text: "核心模块",
              prefix: "核心模块/",
              children: [
                {
                  text: "编译阶段",
                  prefix: "编译阶段/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "执行阶段",
                  prefix: "执行阶段/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "内存管理",
                  prefix: "内存管理/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "并发模型",
                  prefix: "并发模型/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "函数声明",
                  prefix: "函数声明/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "函数参数",
                  prefix: "函数参数/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "函数调用",
                  prefix: "函数调用/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "函数内部",
                  prefix: "函数内部/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "函数类型",
                  prefix: "函数类型/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "模块化",
                  prefix: "模块化/",
                  children: "structure",
                  collapsible: false,
                },
              ],
              collapsible: true,
            },
            {
              text: "OOP",
              prefix: "OOP/",
              collapsible: true,
              children: [
                "面向对象编程",
                {
                  text: "理解对象",
                  prefix: "理解对象/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "创建对象",
                  prefix: "创建对象/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "继承",
                  prefix: "继承/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "类",
                  prefix: "类/",
                  children: "structure",
                  collapsible: false,
                },
              ],
            },
            {
              text: "BOM",
              prefix: "BOM/",
              collapsible: true,
              children: [
                {
                  text: "全局对象",
                  prefix: "全局对象/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "全局API",
                  prefix: "全局API/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "视窗尺寸位置",
                  prefix: "视窗尺寸位置/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "二进制数据和文件API",
                  prefix: "二进制数据和文件API/",
                  children: "structure",
                  collapsible: false,
                },
              ],
            },
            {
              text: "DOM",
              prefix: "DOM/",
              collapsible: true,
              children: [
                {
                  text: "文档对象类型",
                  prefix: "文档对象类型/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "Node",
                  prefix: "Node/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "Document",
                  prefix: "Document/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "Element",
                  prefix: "Element/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "动态集合",
                  prefix: "动态集合/",
                  children: "structure",
                  collapsible: false,
                },
                {
                  text: "CSSOM",
                  prefix: "CSSOM/",
                  children: "structure",
                  collapsible: false,
                },
              ],
            },
          ],
          collapsible: true,
        },
        {
          text: "代码片段",
          prefix: "代码片段/",
          children: "structure",
          collapsible: true,
        },
        {
          text: "问题解决",
          prefix: "问题解决/",
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
              text: "HTML",
              prefix: "HTML/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "CSS",
              prefix: "CSS/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "JavaScript",
              prefix: "JavaScript/",
              children: "structure",
              collapsible: true,
            },
            {
              text: "Vue.js",
              prefix: "Vue.js/",
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
      children: "structure"
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
    // {
    //   text: "生活休闲",
    //   icon: "live",
    //   prefix: "生活休闲/",
    //   collapsible: true,
    //   children: [
    //     {
    //       text: "观影体验",
    //       prefix: "观影体验/",
    //       children: "structure",
    //       collapsible: true,
    //     },
    //     {
    //       text: "游戏杂谈",
    //       prefix: "游戏杂谈/",
    //       children: "structure",
    //       collapsible: true,
    //     },
    //   ],
    // },
    "intro",
  ],
});
