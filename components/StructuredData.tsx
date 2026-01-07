export default function StructuredData() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Coulsy Code",
      url: "https://coulsycode.com",
      sameAs: ["https://www.linkedin.com/in/robert-coulson-20a60915/"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "info@coulsycode.com",
          availableLanguage: ["en-GB"],
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Coulsy Code",
      url: "https://coulsycode.com",
      areaServed: [
        { "@type": "City", name: "York" },
        { "@type": "AdministrativeArea", name: "Yorkshire" },
        { "@type": "Country", name: "United Kingdom" },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "York",
        addressRegion: "North Yorkshire",
        addressCountry: "GB",
      },
      email: "info@coulsycode.com",
      serviceType: [
        "Web development",
        "Web applications",
        "Local SEO",
        "E-commerce development",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Coulsy Code",
      url: "https://coulsycode.com",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}


