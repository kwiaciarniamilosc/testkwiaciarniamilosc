import React from 'react';
import { Helmet } from 'react-helmet-async';

const BlogMeta = ({ post }) => {
  const { title, excerpt, image } = post;

  return (
    <Helmet>
      <title>{title} - Blog Kwiatowy</title>
      <meta name="description" content={excerpt} />
      
      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={excerpt} />
      <meta property="og:image" content={image} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={excerpt} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "image": image,
          "description": excerpt,
          "publisher": {
            "@type": "Organization",
            "name": "Blog Kwiatowy",
            "logo": {
              "@type": "ImageObject",
              "url": "/assets/images/logo/logo.png"
            }
          }
        })}
      </script>
    </Helmet>
  );
};

export default BlogMeta;