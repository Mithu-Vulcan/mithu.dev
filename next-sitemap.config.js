/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://mithu.dev',
  generateRobotsTxt: true, // Automatically generates a robots.txt file linked to the sitemap
  sitemapSize: 7000,       // Splits the sitemap into files if URLs exceed this amount
  exclude: ['/server-sitemap.xml', '/admin/*'], // Exclude paths you don't want indexed
}
