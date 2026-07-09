import { useEffect } from 'react';
import { useLocation } from 'react-router';
import brandLogo from 'figma:asset/26a37e688debf5f4c63f0f085afeb78388c4b4d1.png';

export function Head() {
  const location = useLocation();
  const baseUrl = 'https://cristian-co.com';
  const currentUrl = `${baseUrl}${location.pathname}`;

  useEffect(() => {
    // Set favicon
    let favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      document.head.appendChild(favicon);
    }
    favicon.href = brandLogo;

    // Set apple touch icon
    let appleTouchIcon = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement;
    if (!appleTouchIcon) {
      appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      document.head.appendChild(appleTouchIcon);
    }
    appleTouchIcon.href = brandLogo;

    // Set canonical URL
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = currentUrl;

    // Set page title
    document.title = 'Cristian Carrasco - Product Designer & Creative';

    // Set meta description
    let metaDescription = document.querySelector("meta[name='description']") as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Multidisciplinary designer crafting meaningful experiences through strategic thinking and creative execution. Specializing in product design, motion graphics, and visual storytelling.';

    // Open Graph meta tags for social media sharing
    const ogTags = [
      { property: 'og:title', content: 'Cristian Carrasco - Product Designer & Creative' },
      { property: 'og:description', content: 'Multidisciplinary designer crafting meaningful experiences through strategic thinking and creative execution.' },
      { property: 'og:image', content: brandLogo },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: currentUrl },
      { property: 'og:site_name', content: 'Cristian Carrasco Portfolio' },
    ];

    ogTags.forEach(({ property, content }) => {
      let metaTag = document.querySelector(`meta[property='${property}']`) as HTMLMetaElement;
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.setAttribute('property', property);
        document.head.appendChild(metaTag);
      }
      metaTag.content = content;
    });

    // Twitter Card meta tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Cristian Carrasco - Product Designer & Creative' },
      { name: 'twitter:description', content: 'Multidisciplinary designer crafting meaningful experiences through strategic thinking and creative execution.' },
      { name: 'twitter:image', content: brandLogo },
      { name: 'twitter:url', content: currentUrl },
    ];

    twitterTags.forEach(({ name, content }) => {
      let metaTag = document.querySelector(`meta[name='${name}']`) as HTMLMetaElement;
      if (!metaTag) {
        metaTag = document.createElement('meta');
        metaTag.name = name;
        document.head.appendChild(metaTag);
      }
      metaTag.content = content;
    });

    // Theme color for mobile browsers
    let themeColor = document.querySelector("meta[name='theme-color']") as HTMLMetaElement;
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      document.head.appendChild(themeColor);
    }
    themeColor.content = '#111827'; // gray-900 color

  }, [currentUrl]);

  return null; // This component doesn't render anything
}