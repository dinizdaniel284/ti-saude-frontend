/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ti-saude.vercel.app/',
  generateRobotsTxt: true, // Gera o arquivo robots.txt
  sitemapSize: 7000, // Número máximo de URLs por arquivo sitemap
}
