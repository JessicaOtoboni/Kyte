<script type="application/ld+json">
{
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
        "url": "https://uploads-ssl.webflow.com/60870fec5b198a263fa79bcb/60870fec5b198a9f91a79c31_img2.png",
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
      "@id": "https://www.kyteapp.com/post/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}/#webpage",
      "url": "https://www.kyteapp.com/post/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      "name": "{{wf {&quot;path&quot;:&quot;title&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      "description": "{{wf {&quot;path&quot;:&quot;intro-text&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      "inLanguage": "en",
      "isPartOf": { "@id": "https://www.kyteapp.com/#website" },
      "primaryImageOfPage": { "@id": "{{wf {&quot;path&quot;:&quot;article-header-image&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}/#primaryimage" },
      "breadcrumb": { "@id": "https://www.kyteapp.com/post/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}/#breadcrumb" }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.kyteapp.com/post/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.kyteapp.com/", "name": "Home" } },
        { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.kyteapp.com/blog", "name": "Blog" } },
        { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.kyteapp.com/post/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}", "name": "{{wf {&quot;path&quot;:&quot;title&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}" } }
      ]
    },

    {
      "@type": "ImageObject",
      "@id": "{{wf {&quot;path&quot;:&quot;article-header-image&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}/#primaryimage",
      "url": "{{wf {&quot;path&quot;:&quot;article-header-image&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}",
      "contentUrl": "{{wf {&quot;path&quot;:&quot;article-header-image&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}",
      "caption": "{{wf {&quot;path&quot;:&quot;meta-title&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      "inLanguage": "en"
    },

    {
      "@type": "Person",
      "@id": "https://www.kyteapp.com/author/{{wf {&quot;path&quot;:&quot;author:slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}/#person",
      "name": "{{wf {&quot;path&quot;:&quot;author:name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      "url": "https://www.kyteapp.com/author/{{wf {&quot;path&quot;:&quot;author:slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}"
    },

    {
      "@type": "BlogPosting",
      "@id": "https://www.kyteapp.com/post/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}/#post",
      "headline": "{{wf {&quot;path&quot;:&quot;title&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      "description": "{{wf {&quot;path&quot;:&quot;intro-text&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      "inLanguage": "en",
      "image": { "@id": "{{wf {&quot;path&quot;:&quot;article-header-image&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}/#primaryimage" },
      "author": { "@id": "https://www.kyteapp.com/author/{{wf {&quot;path&quot;:&quot;author:slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}/#person" },
      "publisher": { "@id": "https://www.kyteapp.com/#organization" },
      "mainEntityOfPage": { "@id": "https://www.kyteapp.com/post/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}/#webpage" },
      "isPartOf": { "@id": "https://www.kyteapp.com/post/{{wf {&quot;path&quot;:&quot;slug&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}/#webpage" },
      "datePublished": "{{wf {&quot;path&quot;:&quot;published-on&quot;,&quot;transformers&quot;:[{&quot;name&quot;:&quot;date&quot;,&quot;arguments&quot;:[&quot;MMM DD, YYYY&quot;]\}],&quot;type&quot;:&quot;Date&quot;\} }}T10:30:00-03:00",
      "dateCreated":   "{{wf {&quot;path&quot;:&quot;created-on&quot;,&quot;transformers&quot;:[{&quot;name&quot;:&quot;date&quot;,&quot;arguments&quot;:[&quot;MMM DD, YYYY&quot;]\}],&quot;type&quot;:&quot;Date&quot;\} }}T10:30:00-03:00",
      "dateModified": "{{wf {&quot;path&quot;:&quot;updated-on&quot;,&quot;transformers&quot;:[{&quot;name&quot;:&quot;date&quot;,&quot;arguments&quot;:[&quot;MMM DD, YYYY&quot;]\}],&quot;type&quot;:&quot;Date&quot;\} }}T10:30:00-03:00",
      "thumbnailUrl": "{{wf {&quot;path&quot;:&quot;article-thumbnail&quot;,&quot;type&quot;:&quot;ImageRef&quot;\} }}",
      "articleSection": "{{wf {&quot;path&quot;:&quot;category:name&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}",
      "keywords": "{{wf {&quot;path&quot;:&quot;meta-title&quot;,&quot;type&quot;:&quot;PlainText&quot;\} }}"
    }

  ]
}
</script>
