import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Nisha's Portfolio",
  description: "6.1040 Fall 2024",
  base: "/portfolio-nisha/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs" },
      { text: "About Me", link: "/aboutme" },
      {text:"Assignments", link: "/assignments"}
    ],

    sidebar:{ 
      
      "/blogs":[
      {
        text: "Blogs",
        link: "/blogs",
        collapsed: true,
      },
    ],


  },

    socialLinks: [{ icon: "github", link: "https://github.com/61040-fa24" }],
  },
});
