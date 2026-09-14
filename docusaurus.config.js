// Docusaurus Configuration
// Replace placeholders (e.g. URL, title) with your actual values.

module.exports = {
  title: 'Swiftpedia',
  tagline: 'A local knowledge base for Swift 6 + Swift UI development',
  url: 'https://Lightfielder.github.io',
  baseUrl: '/Swiftpedia/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'Lightfielder',
  projectName: 'Swiftpedia',

  // Markdown configuration
  markdown: {
    hooks: {
      onBrokenMarkdownImages: () => {
        // Ignore broken markdown image errors
        return;
      }
    }
  },

  themeConfig: {
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
      style: 'light',
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
      theme: require('prism-react-renderer').themes.github,
      darkTheme: require('prism-react-renderer').themes.dracula,
    },
  },

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