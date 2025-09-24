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
        "@id": "https://www.kyteapp.com/#organization",
        "name": "Kyte",
        "url": "https://www.kyteapp.com/",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.kyteapp.com/#logo",
          "url": "https://www.kyteapp.com/favicon-256.png", /* opcional: atualize */
          "width": 256,
          "height": 256
        },
        "sameAs": [
          "https://www.instagram.com/kyte.es",
          "https://www.facebook.com/appkyte",
          "https://www.tiktok.com/@kyte.app",
          "https://www.youtube.com/@kyteespanol",
          "https://play.google.com/store/apps/details?id=com.kyte&hl=en",
          "https://apps.apple.com/us/app/kyte-pos-inventory-and-store/id1345983058?platform=iphone"
        ]
      },

      {
        "@type": "WebSite",
        "@id": "https://www.kyteapp.com/#website",
        "url": "https://www.kyteapp.com/",
        "name": "Kyte",
        "inLanguage": "en",
        "publisher": { "@id": "https://www.kyteapp.com/#organization" }
      },

      {
        "@type": "WebPage",
        "@id": webpageId,                           /* dinâmico */
        "url": canonical,                           /* dinâmico */
        "name": h1,                                 /* dinâmico */
        "description": description,       /* dinâmico */
        "isPartOf": { "@id": "https://www.kyteapp.com/#website" },
        "inLanguage": "en",
        "primaryImageOfPage": { "@id": primaryImageId },
        "breadcrumb": { "@id": breadcrumbId },      /* dinâmico */
        "about": { "@id": "https://www.kyteapp.com/#software" },
        "publisher": { "@id": "https://www.kyteapp.com/#organization" },
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
            "item": { "@id": "https://www.kyteapp.com/", "name": "Home" }
          },
        ]
      },

      {
        "@type": "ImageObject",
        "@id": primaryImageId,                      /* dinâmico */
        "url": heroUrl,
        "caption": h1,
        "inLanguage": "en"
      },

      {
        "@type": "SoftwareApplication",
        "@id": "https://www.kyteapp.com/#software",
        "name": metaTitle,                                 /* dinâmico */
        "url": canonical,                           /* dinâmico */
        "description": metaDescription,       /* dinâmico */
        "operatingSystem": "Android, iOS, Web",
        "applicationCategory": "BusinessApplication",
        "image": heroUrl,                           /* dinâmico */
        "screenshot": [
        "https://play-lh.googleusercontent.com/qkYdQ6LM-0HTl1Na5mosGuQGo1N9812jpedU0BMxvl_KBVDFSB1j4MXgYmeHXW0L2w0wAW9VHWEpepTY8nx-=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/kU6dX0C3JVCjnEqx7yBG9fp5rVjUPX_lUgUG0TmoUdFSZTxXR-0CnGaiz2ac2URxed0=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/Vp7_XJRw4D6VXkWCWAQOVANwe5mG1a4wXa7UxEf2zfrZGqBW4wDC01vHFGwOHe5a-ou5_0y7ZUQwMVKmIpJp62Y=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/RwuhVaEcKA0zPUYxM7KX-nHXsI_kX-lbFYm0NSwWqO0s_Qh_w4Khhwpc2LIRaHKr96Gh7sDXXR5ie7TK49Lb=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/quQx9CutVDFKt6FQLm3crqXxC4rncqx-TOg1-zWJl3x84WL_IQVOI4Zoa5g2DVBb_eHSQlIvjXc4LlkXHSWu=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/fDlr6P8DcjSGYqBIYkPiMA4bCvmgiUnM5wh4OcnHIQGOtOpAIN_SXVxFSyHrVeljsD3wmMwUlivvUGc_Hqor=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/rxsQkzbbmGj8waZATcbPdLlNv1c840L9uGk13KHL40q4tPNmSdgdQQw3GVGT5-xht_78kRAoZJ7TuyCZLWQYFA=w1052-h592-rw",
        "https://play-lh.googleusercontent.com/RzlEbA0uwGuDo3jBegPYZ5-aXgLq-xoFNuGuGlEjH6wTSLoGc51UhTCaLKNzV_1twsuFhErr6ITMtlZ8qXRK-A=w1052-h592-rw"
        ],
        "author": { "@id": "https://www.kyteapp.com/#organization" },
        "publisher": { "@id": "https://www.kyteapp.com/#organization" },
        "softwareHelp": "https://www.kyteapp.com/help",
        "contentRating": "0+",
        "downloadUrl": [
          "https://play.google.com/store/apps/details?id=com.kyte&hl=en",
          "https://apps.apple.com/us/app/kyte-pos-inventory-and-store/id1345983058?platform=iphone"
        ],
        "installUrl": [
          "https://play.google.com/store/apps/details?id=com.kyte&hl=en",
          "https://apps.apple.com/us/app/kyte-pos-inventory-and-store/id1345983058?platform=iphone"
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
        "@id": "https://www.kyteapp.com/#promo-video",
        "name": "What is Kyte?",
        "description": "Take control and start building that future today",
        "thumbnailUrl": "https://i.ytimg.com/vi/ZdDCiyf-XWU/maxresdefault.jpg",
        "uploadDate": "2025-07-09T14:00:40-07:00",
        "duration": "PT1M36S",
        "url": "https://www.youtube.com/watch?v=ZdDCiyf-XWU",
        "contentUrl": "https://www.youtube.com/watch?v=ZdDCiyf-XWU",
        "publisher": { "@id": "https://www.kyteapp.com/#organization" },
        "isPartOf": { "@id": webpageId },           /* dinâmico*/
        "about": { "@id": "https://www.kyteapp.com/#software" }
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
