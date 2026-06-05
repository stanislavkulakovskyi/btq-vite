import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

import { DEFAULT_OG_IMAGE } from '../../api/seo';

export const Seo = ({
  title,
  description,
  canonical,
  lang = 'en',
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noindex = false,
  jsonLd,
}) => {
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDescription = ogDescription ?? description;
  const jsonLdBlocks = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <html lang={lang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {!noindex && <meta property="og:title" content={resolvedOgTitle} />}
      {!noindex && <meta property="og:description" content={resolvedOgDescription} />}
      {!noindex && <meta property="og:image" content={ogImage} />}
      {!noindex && <meta property="og:type" content={ogType} />}
      {!noindex && <meta property="og:url" content={canonical} />}
      {!noindex && <meta name="twitter:card" content="summary_large_image" />}
      {!noindex && <meta name="twitter:title" content={resolvedOgTitle} />}
      {!noindex && <meta name="twitter:description" content={resolvedOgDescription} />}
      {!noindex && <meta name="twitter:image" content={ogImage} />}
      {jsonLdBlocks.map((block, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
};

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string.isRequired,
  lang: PropTypes.string,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  noindex: PropTypes.bool,
  jsonLd: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
};
