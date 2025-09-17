<script>
(() => {
  // --- Helpers dinâmicos ---
  const canonicalFromLink = document.querySelector('link[rel="canonical"]')?.href;
  const rawUrl = (canonicalFromLink || window.location.href).split('#')[0];
  const canonical = rawUrl.replace(/\/$/, ''); // remove barra final
  const webpageId = `${canonical}#webpage`;
  const breadcrumbId = `${canonical}#breadcrumb`;

  // Título / descrição
  const metaTitle = document.querySelector('meta[name="title"]')?.content
                 || document.title?.trim()
                 || '';
  const metaDescription = document.querySelector('meta[name="description"]')?.content
                       || '';

  // H1 
  const h1 = document.querySelector('#h1')?.textContent?.trim();

  // Description visível
  const description = document.querySelector('#hero-description')?.textContent?.trim();

  // Hero image 
  const heroUrl = (document.querySelector('[data-hero-img]')?.src
                || document.querySelector('img.hero, .hero img')?.src
                || 'https://cdn.prod.website-files.com/60870fec5b198a263fa79bcb/67eddbdcba9ba9f5315ac219_hero%20mobile%20pt%202.webp').split('#')[0];
  const primaryImageId = `${heroUrl}#primaryimage`;

  // --- JSON-LD com os campos dinâmicos ---
  const data = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "Organization",
        "@id": "https://www.kyte.com.br/#organization",
        "name": "Kyte",
        "url": "https://www.kyte.com.br/",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.kyte.com.br/#logo",
          "url": "https://www.kyte.com.br/favicon-256.png", /* opcional: atualize */
          "width": 256,
          "height": 256
        },
        "sameAs": [
          "https://www.instagram.com/kyte.br",
          "https://www.facebook.com/kyte.brasil",
          "https://www.tiktok.com/@kyte.br",
          "https://www.youtube.com/channel/UCa1bm2wm3XlgOMetic_TC3Q",
          "https://play.google.com/store/apps/details?id=com.kyte&hl=pt_BR&gl=BR",
          "https://apps.apple.com/br/app/kyte-pdv-e-estoque-para-loja/id1345983058?platform=iphone"
        ]
      },

      {
        "@type": "WebSite",
        "@id": "https://www.kyte.com.br/#website",
        "url": "https://www.kyte.com.br/",
        "name": "Kyte",
        "inLanguage": "pt-BR",
        "publisher": { "@id": "https://www.kyte.com.br/#organization" }
      },

      {
        "@type": "WebPage",
        "@id": webpageId,                           /* dinâmico */
        "url": canonical,                           /* dinâmico */
        "name": h1,                                 /* dinâmico */
        "description": description,       /* dinâmico */
        "isPartOf": { "@id": "https://www.kyte.com.br/#website" },
        "inLanguage": "pt-BR",
        "primaryImageOfPage": { "@id": primaryImageId },
        "breadcrumb": { "@id": breadcrumbId },      /* dinâmico */
        "about": { "@id": "https://www.kyte.com.br/#software" },
        "publisher": { "@id": "https://www.kyte.com.br/#organization" },
        "potentialAction": {
          "@type": "ReadAction",
          "target": { "@type": "EntryPoint", "urlTemplate": canonical } /* dinâmico */
        }
      },

      {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,                        /* dinâmico */
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": { "@id": "https://www.kyte.com.br/", "name": "Home" }
          },
          {
          "@type": "ListItem",
          "position": 2,
          "item": { "@id": "https://www.kyte.com.br/segmentos", "name": "Segmentos" }
          }
        ]
      },

      {
        "@type": "ImageObject",
        "@id": primaryImageId,                      /* dinâmico */
        "url": heroUrl,
        "caption": h1,
        "inLanguage": "pt-BR"
      },

      {
        "@type": "SoftwareApplication",
        "@id": "https://www.kyte.com.br/#software",
        "name": metaTitle,                                 /* dinâmico */
        "url": canonical,                           /* dinâmico */
        "description": metaDescription,       /* dinâmico */
        "operatingSystem": "Android, iOS, Web",
        "applicationCategory": "BusinessApplication",
        "image": heroUrl,                           /* dinâmico */
        "screenshot": [
        "https://lh3.googleusercontent.com/lhshvsFNLfrY7ppZ_6NMVKYtnTrB2eEJRJMLYWgNNIDoZz62TMAiJrN2ksCTFHXm7w=w1052-h592-rw",
        "https://lh3.googleusercontent.com/lXXikn5MT4Fiy8NrB82fByCOqyKWLZQKwzCeOwMAOAzQHlFaRxJ8I0-Di7VCAsKOCzVR=w1052-h592-rw",
        "https://lh3.googleusercontent.com/t2hZYSw9_3HpJQgV9SaqWLPBckDx0eF-iwwjtA0vRdQ7o47O-P-LinJUkNAmK4zFVm0=w1052-h592-rw",
        "https://lh3.googleusercontent.com/CSJgG_SZNYO-i4AewuPR5-3NuKDHoN_xmFstOJGl6KYVhgMx_ClD27ZMvv1gTB4xU-A=w1052-h592-rw",
        "https://lh3.googleusercontent.com/3pYccaI7oEF3EvpJtwA4GnNu_g7CGirGKeZrWyXZZ9v2-_6sahnJ5QH2j6QVRGr32sAb=w1052-h592-rw",
        "https://lh3.googleusercontent.com/VsMo8PZeO3WV100ANqkeqTEcsfxl9YtF0qUPmSS0n2Jw3uCf89JDR7UCNwdJUUWkU0k=w1052-h592-rw",
        "https://lh3.googleusercontent.com/ZJ0Y1-kTm9fZnBBsfwHR8k64FnqATKmTK2XW2PEvj891G1zQANmWvElwjJ_1a6lCj-Y=w1052-h592-rw",
        "https://lh3.googleusercontent.com/Y5KNdYb8v64XuGgKXjYZo8MgA5qCeCNBaFC4TIxOma5H1L-xz3Js6xSNTZ4h6yFpnw=w1052-h592-rw"
        ],
        "author": { "@id": "https://www.kyte.com.br/#organization" },
        "publisher": { "@id": "https://www.kyte.com.br/#organization" },
        "softwareHelp": "https://www.kyte.com.br/ajuda",
        "contentRating": "0+",
        "downloadUrl": [
          "https://play.google.com/store/apps/details?id=com.kyte&hl=pt_BR&gl=BR",
          "https://apps.apple.com/br/app/kyte-pdv-e-estoque-para-loja/id1345983058?platform=iphone"
        ],
        "installUrl": [
          "https://play.google.com/store/apps/details?id=com.kyte&hl=pt_BR&gl=BR",
          "https://apps.apple.com/br/app/kyte-pdv-e-estoque-para-loja/id1345983058?platform=iphone"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": 4.5,
          "ratingCount": 21500
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "Plano FREE",
            "price": 0,  
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "url": "https://pos.auth.kyteapp.com/"
          },
          {
            "@type": "Offer",
            "name": "Plano PRO",
            "price": "49.90", 
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "url": "https://web.auth.kyteapp.com/?flow=s"
          },
          {
            "@type": "Offer",
            "name": "Plano GROW",
            "price": "69.90", 
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "url": "https://web.auth.kyteapp.com/?flow=s"
          },
          {
            "@type": "Offer",
            "name": "Plano PRIME",
            "price": "99.90",
            "priceCurrency": "BRL",
            "availability": "https://schema.org/InStock",
            "url": "https://web.auth.kyteapp.com/?flow=s"
          }
        ]
      },

      {
        "@type": "VideoObject",
        "@id": "https://www.kyte.com.br/#promo-video",
        "name": "O que é Kyte?",
        "description": "…",
        "thumbnailUrl": "https://i.ytimg.com/vi/3fNLqwSysbE/maxresdefault.jpg",
        "uploadDate": "2025-07-09T14:00:05-07:00",
        "duration": "PT1M23S",
        "url": "https://www.youtube.com/watch?v=3fNLqwSysbE",
        "contentUrl": "https://www.youtube.com/watch?v=3fNLqwSysbE",
        "publisher": { "@id": "https://www.kyte.com.br/#organization" },
        "isPartOf": { "@id": webpageId },           /* dinâmico*/
        "about": { "@id": "https://www.kyte.com.br/#software" }
      }

    ]
  };

  // --- Injeta no DOM ---
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
})();
</script>
