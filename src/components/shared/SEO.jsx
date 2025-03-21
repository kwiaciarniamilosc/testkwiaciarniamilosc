import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url, image }) => {
  const defaultTitle = 'Najlepsza Kwiaciarnia w Warszawie - Kwiaciarnia Miłość';
  const defaultDescription =
    'Odkryj piękno kwiatów z Kwiaciarnią Miłość - Twoim numerem jeden wśród kwiaciarni w Warszawie. Wyjątkowe bukiety, świeże kwiaty i dostawa na terenie całej Warszawy. Spraw, by każdy moment był niezapomniany!';

  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
      <meta name="description" content={description ? description : defaultDescription} />
      <meta name="robots" content="index, follow" />
      <link rel='canonical' href={url} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:url' content={url} />
      <meta property='og:image' content={image} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Helmet>
  );
};

export default SEO;
