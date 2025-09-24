<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Organization",
      "@id": "https://www.appkyte.com/#organization",
      "name": "App Kyte",
      "url": "https://www.appkyte.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.appkyte.com/#logo",
        "url": "https://uploads-ssl.webflow.com/60870fec5b198a263fa79bcb/60870fec5b198a9f91a79c31_img2.png",
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
      "@id": "https://www.appkyte.com/post/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}/#webpage",
      "url": "https://www.appkyte.com/post/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      "name": "{{wf {&quot;path&quot;:&quot;title&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      "description": "{{wf {&quot;path&quot;:&quot;intro&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      "inLanguage": "es",
      "isPartOf": { "@id": "https://www.appkyte.com/#website" },
      "primaryImageOfPage": { "@id": "{{wf {&quot;path&quot;:&quot;main-image&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}/#primaryimage" },
      "breadcrumb": { "@id": "https://www.appkyte.com/post/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}/#breadcrumb" }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.appkyte.com/post/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.appkyte.com/", "name": "Home" } },
        { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.appkyte.com/blog", "name": "Blog" } },
        { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.appkyte.com/post/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}", "name": "{{wf {&quot;path&quot;:&quot;title&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}" } }
      ]
    },

    {
      "@type": "ImageObject",
      "@id": "{{wf {&quot;path&quot;:&quot;main-image&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}/#primaryimage",
      "url": "{{wf {&quot;path&quot;:&quot;main-image&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}",
      "contentUrl": "{{wf {&quot;path&quot;:&quot;main-image&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}",
      "caption": "{{wf {&quot;path&quot;:&quot;meta-title&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      "inLanguage": "es"
    },

    {
      "@type": "Person",
      "@id": "https://www.appkyte.com/quien-escribe/{{wf {&quot;path&quot;:&quot;author:slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}/#person",
      "name": "{{wf {&quot;path&quot;:&quot;author:name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      "url": "https://www.appkyte.com/quien-escribe/{{wf {&quot;path&quot;:&quot;author:slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}"
    },

    {
      "@type": "BlogPosting",
      "@id": "https://www.appkyte.com/post/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}/#post",
      "headline": "{{wf {&quot;path&quot;:&quot;title&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      "description": "{{wf {&quot;path&quot;:&quot;intro&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      "inLanguage": "es",
      "image": { "@id": "{{wf {&quot;path&quot;:&quot;main-image&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}/#primaryimage" },
      "author": { "@id": "https://www.appkyte.com/quien-escribe/{{wf {&quot;path&quot;:&quot;author:slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}/#person" },
      "publisher": { "@id": "https://www.appkyte.com/#organization" },
      "mainEntityOfPage": { "@id": "https://www.appkyte.com/post/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}/#webpage" },
      "isPartOf": { "@id": "https://www.appkyte.com/post/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}/#webpage" },
      "datePublished": "{{wf {&quot;path&quot;:&quot;published-on&quot;,&quot;transformers&quot;:[{&quot;name&quot;:&quot;date&quot;,&quot;arguments&quot;:[&quot;MMM DD, YYYY&quot;]\}],&quot;type&quot;:&quot;Date&quot;\} }}T10:30:00-03:00",
      "dateCreated":   "{{wf {&quot;path&quot;:&quot;created-on&quot;,&quot;transformers&quot;:[{&quot;name&quot;:&quot;date&quot;,&quot;arguments&quot;:[&quot;MMM DD, YYYY&quot;]\}],&quot;type&quot;:&quot;Date&quot;\} }}T10:30:00-03:00",
      "dateModified": "{{wf {&quot;path&quot;:&quot;updated-on&quot;,&quot;transformers&quot;:[{&quot;name&quot;:&quot;date&quot;,&quot;arguments&quot;:[&quot;MMM DD, YYYY&quot;]\}],&quot;type&quot;:&quot;Date&quot;\} }}T10:30:00-03:00",
      "thumbnailUrl": "{{wf {&quot;path&quot;:&quot;thumbnail-2&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}",
      "articleSection": "{{wf {&quot;path&quot;:&quot;category:name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      "keywords": "{{wf {&quot;path&quot;:&quot;meta-title&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}"
    }

  ]
}
</script>
