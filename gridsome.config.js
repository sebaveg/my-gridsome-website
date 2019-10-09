// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Sebastian Cardoso Castillo",
  siteDescription: "Sitio web personal.",
  siteUrl: "https://sebastiancardoso.com",
  plugins: [
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-68704010-1"
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        refs: {
          tags: {
            typeName: "Tag",
            create: true
          }
        }
      }
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Documentation", // Required
        baseDir: "./docs", // Where .md files are located
        pathPrefix: "/docs", // Add route prefix. Optional
        template: "./src/templates/Documentation.vue", // Optional
        plugins: [
          [
            "gridsome-plugin-remark-shiki",
            { theme: "Material-Theme-Palenight", skipInline: true }
          ]
        ]
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true
      }
    },
    {
      use: "gridsome-plugin-netlify-cms",
      options: {
        publicPath: "/admin"
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000 // default
      }
    },
    {
      use: "gridsome-plugin-rss",
      options: {
        contentTypeName: "Post",
        feedOptions: {
          title: "Gridsome Portfolio Starter Blog",
          feed_url: "https://gridsome-portfolio-starter.netlify.com/rss.xml",
          site_url: "https://gridsome-portfolio-starter.netlify.com/"
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: "https://gridsome-portfolio-starter.netlify.com" + node.path,
          author: "Andre Madarang",
          date: node.date
        }),
        output: {
          dir: "./static",
          name: "rss.xml"
        }
      }
    }
  ],
  templates: {
    Tag: "/tag/:id"
  },
  transformers: {
    remark: {
      plugins: [
        [
          "gridsome-plugin-remark-shiki",
          { theme: "Material-Theme-Palenight", skipInline: true }
        ]
      ],
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link"
    }
  }
};
