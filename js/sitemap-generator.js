const fs = require('fs');
const path = require('path');
const xml2js = require('xml2js');

const baseUrl = 'https://sparkdevstudio.org';
const sitemapPath = path.join(__dirname, '../sitemap.xml');

async function generateSitemap() {
    const today = new Date().toISOString().split('T')[0];
    const sitemap = {
        urlset: {
            $: {
                xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9'
            },
            url: []
        }
    };

    // Dynamic page discovery and priority assignment
    const pages = [
        { url: '/', priority: '1.0', changefreq: 'weekly' },
        { url: '/html/services.html', priority: '0.8', changefreq: 'monthly' },
        { url: '/html/about.html', priority: '0.7', changefreq: 'monthly' },
        { url: '/html/contact.html', priority: '0.8', changefreq: 'monthly' }
    ];

    pages.forEach(page => {
        sitemap.urlset.url.push({
            loc: baseUrl + page.url,
            lastmod: today,
            changefreq: page.changefreq,
            priority: page.priority
        });
    });

    const builder = new xml2js.Builder();
    const xml = builder.buildObject(sitemap);
    
    fs.writeFileSync(sitemapPath, xml);
    console.log('Sitemap generated successfully');
}

generateSitemap().catch(console.error);