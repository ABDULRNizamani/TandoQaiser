import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Tando Qaiser - Heritage & Progress",
  description = "Welcome to Tando Qaiser, a modern village in Sindh, Pakistan where education and agriculture thrive side by side. Experience true Sindhi hospitality and community spirit.",
  keywords = "Tando Qaiser, Sindh village, Pakistan, Nizamani tribe, agriculture, education, Sindhi culture, community",
  ogImage = "./assets/hero.png", // Add an image to public folder
  url = "https://tandoqaiser.com"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="Tando Qaiser Community" />
      <meta name="geo.region" content="PK-SD" />
      <meta name="geo.placename" content="Tando Qaiser, Sindh" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </Helmet>
  );
};

export default SEO;