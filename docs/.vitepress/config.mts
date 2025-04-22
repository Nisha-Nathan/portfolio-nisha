import { defineConfig } from "vitepress";
import vuetify from "vite-plugin-vuetify";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nisha's Portfolio",
  description: "6.1040 Fall 2024",
  base: "/portfolio-nisha/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      // { text: "Blogs", link: "/blogs" },
      { text: "About Me", link: "/aboutme" },
      // { text: "Assignments", link: "/assignments" },
      {text: "Curriculum Vitae", link: "https://acrobat.adobe.com/id/urn:aaid:sc:us:5fe72017-890a-45bb-843b-87b0d937d670"},
      {text: "Photography", link: "/photography"},
    ],

    sidebar: {
      "/blogs": [
        {
          text: "Blogs",
          link: "/blogs",
          collapsed: true,
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/Nisha-Nathan" }],
  },
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
    plugins: [
      vuetify({
        autoImport: true, // Automatically imports Vuetify components and styles
      }),
    ],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
    css: {
      preprocessorOptions: {
        css: {
          additionalData: `@import "vuetify/styles";`,
        },
      },
    },
  },
});
