export default function StructuredData() {
  const PHONE_DISPLAY = "07544 030486";
  const PHONE_TEL = "+447544030486";

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Coulsy Code",
      url: "https://coulsycode.co.uk",
      telephone: PHONE_TEL,
      sameAs: ["https://www.linkedin.com/in/robert-coulson-20a60915/"],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          email: "info@coulsycode.co.uk",
          telephone: PHONE_DISPLAY,
          availableLanguage: ["en-GB"],
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "Coulsy Code",
      url: "https://coulsycode.co.uk",
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
      email: "info@coulsycode.co.uk",
      telephone: PHONE_TEL,
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
      url: "https://coulsycode.co.uk",
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
    />
  );
}


