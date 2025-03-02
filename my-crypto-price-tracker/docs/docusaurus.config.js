// docusaurus.config.js
module.exports = {
  title: "Crypto Price Tracker Docs",
  tagline: "All about your Crypto Price Tracker",
  url: "http://localhost",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico", // You can place a favicon in /static/img if you like
  organizationName: "my-org", // Usually your GitHub org/user name.
  projectName: "crypto-price-tracker-docs", // Usually your repo name.

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // Serve docs at the site root (i.e., http://localhost:3000/)
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Disable the blog by setting blog to false
          // blog: false, // Another way to remove blog
        },
      },
    ],
  ],
};
