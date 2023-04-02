import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "../../data",
  title: "Windhaber Press",
  description: "An editor for VitePress",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Themen",
        items: [
          { text: "Organisationen", link: "/test1/index" },
          { text: "Personen", link: "/test2/t2" },
          { text: "Abkürzungen", link: "/test2/t3" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
