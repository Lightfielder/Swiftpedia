// Docusaurus Configuration
// Replace placeholders (e.g. URL, title) with your actual values.

const prism = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: 'Swiftpedia',
  tagline: 'A local knowledge base for Swift 6 + Swift UI development',
  url: 'https://Lightfielder.github.io',
  baseUrl: '/Swiftpedia/',
  onBrokenLinks: 'ignore',
  favicon: 'img/favicon.ico',

  organizationName: 'Lightfielder',
  projectName: 'Swiftpedia',

  // Google Fonts: IBM Plex Sans for headings + body, IBM Plex Mono for code,
  // tables, counts and labels. Shared with the Kartaverse Vonk Ultra docs site
  // so both projects read as one design family.
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;500&display=swap',
      type: 'text/css',
    },
  ],

  // Mermaid theme for rendering diagrams inside the docs.
  themes: [
    '@docusaurus/theme-mermaid',
    // Site-wide full-text search, self-contained (no external account).
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        indexBlog: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  // Markdown configuration
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownImages: () => {
        // Ignore broken markdown image errors
        return;
      },
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Follow the OS light/dark preference on first visit, matching Vonk Ultra.
      colorMode: {
        respectPrefersColorScheme: true,
      },
      mermaid: {
        theme: {
          light: 'default',
          dark: 'dark',
        },
        options: {
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'linear',
            padding: 8,
            nodeSpacing: 40,
            rankSpacing: 50,
          },
        },
      },
      navbar: {
        title: 'Swiftpedia',
        logo: {
          alt: 'Swift Logo',
          src: 'img/apple-touch-icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'about',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/Lightfielder/Swiftpedia',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              { label: 'About Swiftpedia', to: '/docs/about' },
            ],
          },
        ],
        copyright: `Copyright © 2025-${new Date().getFullYear()} Lightfielder.`,
      },
      prism: {
        theme: prism.themes.github,
        darkTheme: prism.themes.dracula,
        // Vonk Ultra enables its scripting language here; Swiftpedia enables Swift.
        additionalLanguages: ['swift'],
      },
    }),

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Lightfielder/Swiftpedia/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
