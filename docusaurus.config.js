// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

const prismDarkTheme = require("./src/theme/prismDarkTheme.js");
const prismLightTheme = require("./src/theme/prismLightTheme.js");

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Cheatsheets",
  tagline: "The only stuff you need for quick revision of CS concepts.",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://vineethchivukula.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/cheatsheets/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "vineethchivukula", // Usually your GitHub org/user name.
  projectName: "cheatsheets", // Usually your repo name.
  deploymentBranch: "gh-pages", // The branch GitHub Pages reads from
  trailingSlash: false, // Recommended for GitHub Pages SEO

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  plugins: ["docusaurus-plugin-sass"],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/vineethchivukula/cheatsheets/edit/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/vineethchivukula/cheatsheets/edit/main/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: [
            require.resolve("./src/css/customTheme.scss"),
            require.resolve("./src/css/index.scss"),
            require.resolve("./src/css/showcase.scss"),
            require.resolve("./src/css/versions.scss"),
          ],
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Cheatsheets",
        logo: {
          src: "img/logo.svg",
          alt: "Vineeth's Logo",
        },
        style: "dark",
        hideOnScroll: false,
        items: [
          // GitHub icon
          {
            href: "https://github.com/vineethchivukula/cheatsheets",
            "aria-label": "GitHub",
            position: "right",
            className: "navbar-github-link",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Find Me",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/vineethchivukula",
              },
              {
                label: "GitHub",
                href: "https://github.com/VineethChivukula",
              },
              {
                label: "YouTube",
                href: "https://www.youtube.com/@vineethchivukula",
              },
              {
                label: "Instagram",
                href: "https://www.instagram.com/6nny.aep",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Portfolio",
                href: "https://vineethchivukula.github.io/portfolio",
              },
            ],
          },
          {
            title: "Sponsor Me",
            items: [
              {
                label: "Github Sponsor",
                href: "https://github.com/sponsors/VineethChivukula",
              },
              {
                label: "Buy me a Book",
                href: "https://buymeacoffee.com/6nny.aep",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vineeth Chivukula. Inspired from React Native Docs.`,
      },
      prism: {
        additionalLanguages: ["sql"],
        theme: prismLightTheme,
        darkTheme: prismDarkTheme,
      },
    }),
};

export default config;
