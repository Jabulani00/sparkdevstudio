import Head from 'next/head';

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SparkDev Studio",
  "description": "Professional web development and design services",
  "url": "https://sparkdevstudio.com"
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SparkDev Studio",
  "url": "https://sparkdevstudio.com",
  "logo": "https://sparkdevstudio.com/logo.png"
};

export default function Home() {
  return (
    <>
      <Head>
        <title>SparkDev Studio - Professional Web Development Services</title>
        <meta name="description" content="SparkDev Studio offers professional web development, design, and digital solutions for businesses. Transform your online presence with our expert services." />
        <meta name="keywords" content="web development, web design, digital solutions, professional websites, SparkDev Studio" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="SparkDev Studio - Professional Web Development Services" />
        <meta property="og:description" content="Transform your online presence with SparkDev Studio's professional web development and design services." />
        <meta property="og:image" content="https://sparkdevstudio.com/og-image.jpg" />
        <meta property="og:url" content="https://sparkdevstudio.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://sparkdevstudio.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </Head>
      <main>
        <h1>Welcome to SparkDev Studio</h1>
        <p>Your one-stop solution for professional web development and design services.</p>
      </main>
    </>
  );
}