export function jsonLdOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fairway Hotels",
    url: "https://www.hotelsfairway.com",
    logo: "/favicon.ico",
    sameAs: [
      "https://facebook.com/",
      "https://www.instagram.com/",
      "https://x.com/",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+94 72 250 9609",
      contactType: "customer service",
      areaServed: "LK",
      availableLanguage: ["English"],
    },
  };
}


