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
        "@id": "https://www.appkyte.com/#organization",
        "name": "Kyte",
        "url": "https://www.appkyte.com/",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.appkyte.com/#logo",
          "url": "https://www.appkyte.com/favicon-256.png", /* opcional: atualize */
          "width": 256,
          "height": 256
        },
        "sameAs": [
          "https://www.instagram.com/kyte.es",
          "https://www.facebook.com/appkyte",
          "https://www.tiktok.com/@kyte.app",
          "https://www.youtube.com/@kyteespanol",
          "https://play.google.com/store/apps/details?id=com.kyte&hl=es",
          "https://apps.apple.com/es/app/kyte-pos-inventario-y-tienda/id1345983058?platform=iphone"
        ]
      },

      {
        "@type": "WebSite",
        "@id": "https://www.appkyte.com/#website",
        "url": "https://www.appkyte.com/",
        "name": "Kyte",
        "inLanguage": "es",
        "publisher": { "@id": "https://www.appkyte.com/#organization" }
      },

      {
        "@type": "WebPage",
        "@id": webpageId,                           /* dinâmico */
        "url": canonical,                           /* dinâmico */
        "name": h1,                                 /* dinâmico */
        "description": description,       /* dinâmico */
        "isPartOf": { "@id": "https://www.appkyte.com/#website" },
        "inLanguage": "es",
        "primaryImageOfPage": { "@id": primaryImageId },
        "breadcrumb": { "@id": breadcrumbId },      /* dinâmico */
        "about": { "@id": "https://www.appkyte.com/#software" },
        "publisher": { "@id": "https://www.appkyte.com/#organization" },
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
            "item": { "@id": "https://www.appkyte.com/", "name": "Home" }
          },
          {
          "@type": "ListItem",
          "position": 2,
          "item": { "@id": "https://www.appkyte.com/administre", "name": "Gestión Remota para Pequeños Negocios" }
          }
        ]
      },

      {
        "@type": "ImageObject",
        "@id": primaryImageId,                      /* dinâmico */
        "url": heroUrl,
        "caption": h1,
        "inLanguage": "es"
      },

      {
        "@type": "SoftwareApplication",
        "@id": "https://www.appkyte.com/#software",
        "name": metaTitle,                                 /* dinâmico */
        "url": canonical,                           /* dinâmico */
        "description": metaDescription,       /* dinâmico */
        "operatingSystem": "Android, iOS, Web",
        "applicationCategory": "BusinessApplication",
        "image": heroUrl,                           /* dinâmico */
        "screenshot": [
        "https://play-lh.googleusercontent.com/I1qQOsVYmnCGAhxMskdCrgywcCauO4tIgErBy8aqA0JrQ6rv5lldrX6xEaD1cowpEco2jkuJaymTHidlmnIt9w=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/1Jnoy2VxxDy4VtmX-FOPY8GSVKmXPTrb6nQa-Z0lUSCB6v_F_WuFgOqY5mp54ABsB1GzxslHYVpghs25_1Wb=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/e3g-BHS4zj9PwGitbx6TrEmgc0bl8TcDdOfq8pp8jGTCo71TH1fHIIiF3tlapW9iqr9FyxA8EnQuad0Azjoqnbc=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/NkScKAZBDgth4Z_l752eDzWXtZz_ZV_O9lUcUBGe1TYDiPkyLk2DyEvrHhMFe8TNGMLYCon416EnQo6-ZYizgQ=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/1Bu42-7yLshQDxp379bZLSCy01811XxVzXh6azYIKI85s5D5jGOfmao4k-Yao1ZI7EzYqO0x3y7gYP6zwyxyxPw=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/uxmz4ELbvFcRuyC1nGU1XbR8ZQNAmJHFB3dTXeRrbUsIkNW4bDQ7IwRUmkeHri-arVwOmp5Kez48vOccavqF3A=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/B_y_z3ckHlSuJfRqWDTkLiKp30dQ4CcA6b0A8jWzQyJOnwz2gEsYHVlHBV-o2sGwLI8r1M4sHVyt2BnwNrh3EA=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/OudvKs86HLjfqBIDErxewNcfop9vvV1WL-gVT3IptznXFSR5DeFAUCWD3rd32CPl2xlT9j_MBVgkrnzE9wuKoGM=w1052-h592-rw"
        ],
        "author": { "@id": "https://www.appkyte.com/#organization" },
        "publisher": { "@id": "https://www.appkyte.com/#organization" },
        "softwareHelp": "https://www.appkyte.com/ayuda",
        "contentRating": "0+",
        "downloadUrl": [
          "https://play.google.com/store/apps/details?id=com.kyte&hl=es",
          "https://apps.apple.com/es/app/kyte-pos-inventario-y-tienda/id1345983058?platform=iphone"
        ],
        "installUrl": [
          "https://play.google.com/store/apps/details?id=com.kyte&hl=es",
          "https://apps.apple.com/es/app/kyte-pos-inventario-y-tienda/id1345983058?platform=iphone"
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
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://pos.auth.kyteapp.com/"
          },
          {
            "@type": "Offer",
            "name": "Plano PRO",
            "price": "9.99", 
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://web.auth.kyteapp.com/?flow=s"
          },
          {
            "@type": "Offer",
            "name": "Plano GROW",
            "price": "13.99", 
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://web.auth.kyteapp.com/?flow=s"
          },
          {
            "@type": "Offer",
            "name": "Plano PRIME",
            "price": "19.99",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": "https://web.auth.kyteapp.com/?flow=s"
          }
        ]
      },

      {
        "@type": "VideoObject",
        "@id": "https://www.appkyte.com/#promo-video",
        "name": "¿Qué es Kyte?",
        "description": "Toma el control y empieza a construir ese futuro hoy mismo",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZdDCiyf-XWU/maxresdefault.jpg",
        "uploadDate": "2025-07-09T14:00:40-07:00",
        "duration": "PT1M36S",
        "url": "https://www.youtube.com/watch?v=ZdDCiyf-XWU",
        "contentUrl": "https://www.youtube.com/watch?v=ZdDCiyf-XWU",
        "publisher": { "@id": "https://www.appkyte.com/#organization" },
        "isPartOf": { "@id": webpageId },           /* dinâmico*/
        "about": { "@id": "https://www.appkyte.com/#software" }
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
