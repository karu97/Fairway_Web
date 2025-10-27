export function jsonLdOrganization() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fairway Hotels Sri Lanka",
    alternateName: "Fairway Hotels",
    url: "https://www.hotelsfairway.com",
    logo: "https://www.hotelsfairway.com/images/fairway_hotels_logo.png",
    description: "Luxury boutique hotels and premium tours in Sri Lanka. Experience world-class hospitality with premium accommodations and curated adventure experiences.",
    foundingDate: "2020",
    address: {
      "@type": "PostalAddress",
      addressCountry: "LK",
      addressRegion: "Western Province",
      addressLocality: "Colombo"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+94 72 250 9609",
      contactType: "customer service",
      areaServed: "LK",
      availableLanguage: ["English", "Sinhala"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59"
      }
    },
    sameAs: [
      "https://facebook.com/fairwayhotels",
      "https://www.instagram.com/fairwayhotels",
      "https://x.com/fairwayhotels",
      "https://www.linkedin.com/company/fairway-hotels"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Luxury Hotel Accommodations",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Hotel",
            name: "Meshendra Garden Hotel",
            description: "Luxury boutique hotel in Katunayake with premium amenities and airport gateway access."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Hotel",
            name: "e34 Koslanda Hotel",
            description: "Boutique luxury hotel in Koslanda featuring natural surroundings and exceptional hospitality."
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1500",
      bestRating: "5",
      worstRating: "1"
    },
    priceRange: "$$$$"
  };
}

export function jsonLdHotel(hotelData: {
  name: string;
  description: string;
  image: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  rating: number;
  reviewCount: number;
  priceRange: string;
  amenities: string[];
  geo?: {
    latitude: number;
    longitude: number;
  };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: hotelData.name,
    description: hotelData.description,
    image: hotelData.image,
    address: {
      "@type": "PostalAddress",
      ...hotelData.address
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: hotelData.rating.toString(),
      reviewCount: hotelData.reviewCount.toString(),
      bestRating: "5",
      worstRating: "1"
    },
    priceRange: hotelData.priceRange,
    amenityFeature: hotelData.amenities.map(amenity => ({
      "@type": "LocationFeatureSpecification",
      name: amenity
    })),
    ...(hotelData.geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: hotelData.geo.latitude,
        longitude: hotelData.geo.longitude
      }
    })
  };
}

export function jsonLdWebSite() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fairway Hotels Sri Lanka",
    alternateName: "Fairway Hotels",
    url: "https://www.hotelsfairway.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.hotelsfairway.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
}

export function jsonLdBreadcrumbList(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
}

export function jsonLdLocalBusiness() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.hotelsfairway.com/#organization",
    name: "Fairway Hotels Sri Lanka",
    alternateName: ["Fairway Hotels", "Fairway", "Fairway Colombo"],
    url: "https://www.hotelsfairway.com",
    logo: "https://www.hotelsfairway.com/images/fairway_hotels_logo.png",
    description: "Fairway Hotels Sri Lanka - Luxury boutique hotels and premium tours. Experience world-class hospitality with premium accommodations and curated adventure experiences in Colombo and beyond.",
    image: "https://www.hotelsfairway.com/images/fairway_hotels_hero.png",
    telephone: "+94 72 250 9609",
    email: "info@hotelsfairway.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Katunayake Airport Access Road",
      addressLocality: "Katunayake",
      addressRegion: "Western Province",
      postalCode: "11450",
      addressCountry: "LK"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 7.1707,
      longitude: 79.8830
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Sri Lanka"
      },
      {
        "@type": "Place",
        name: "Colombo"
      },
      {
        "@type": "Place",
        name: "Katunayake"
      },
      {
        "@type": "Place",
        name: "Koslanda"
      },
      {
        "@type": "Place",
        name: "Western Province"
      },
      {
        "@type": "Place",
        name: "Uva Province"
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fairway Luxury Hotel Accommodations",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Hotel",
            name: "Meshendra Garden Hotel",
            description: "Fairway luxury boutique hotel in Katunayake with premium amenities and airport gateway access."
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Hotel",
            name: "e34 Koslanda Hotel",
            description: "Fairway boutique luxury hotel in Koslanda featuring natural surroundings and exceptional hospitality."
          }
        }
      ]
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1500",
      bestRating: "5",
      worstRating: "1"
    },
    priceRange: "$$$$",
    openingHours: "Mo-Su 00:00-23:59",
    paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
    currenciesAccepted: "LKR, USD, EUR, GBP",
    sameAs: [
      "https://facebook.com/fairwayhotels",
      "https://www.instagram.com/fairwayhotels",
      "https://x.com/fairwayhotels",
      "https://www.linkedin.com/company/fairway-hotels"
    ],
    knowsAbout: [
      "Luxury Hotels Sri Lanka",
      "Boutique Hotels Colombo",
      "Premium Accommodation Sri Lanka",
      "Luxury Hospitality",
      "Sri Lanka Tourism",
      "Airport Hotels Sri Lanka",
      "Luxury Travel Sri Lanka"
    ]
  };
}

export function jsonLdPerson(member: {
  name: string;
  role: string;
  image: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: member.name,
    jobTitle: member.role,
    image: `https://www.hotelsfairway.com${member.image}`,
    worksFor: {
      "@type": "Organization",
      name: "Fairway Hotels Sri Lanka",
      url: "https://www.hotelsfairway.com"
    },
    description: member.description || `${member.name} is the ${member.role} at Fairway Hotels Sri Lanka, leading our commitment to luxury hospitality and exceptional guest experiences.`,
    sameAs: [
      "https://www.hotelsfairway.com/about",
      "https://facebook.com/fairwayhotels",
      "https://www.linkedin.com/company/fairway-hotels"
    ],
    knowsAbout: [
      "Luxury Hospitality",
      "Hotel Management",
      "Sri Lankan Tourism",
      "Boutique Hotels",
      "Premium Guest Services"
    ]
  };
}

export function jsonLdTeamPage() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Fairway Hotels Sri Lanka Leadership Team",
    description: "Meet the experienced leadership team at Fairway Hotels Sri Lanka, dedicated to providing world-class luxury hospitality experiences.",
    url: "https://www.hotelsfairway.com/about",
    member: [
      {
        "@type": "Person",
        name: "Chaminda Weerasinghe C. Weerasinghe",
        jobTitle: "Chairman / Managing Director",
        image: "https://www.hotelsfairway.com/images/Team/Chairman_Managing_Director.jpeg",
        description: "Chaminda Weerasinghe serves as Chairman and Managing Director of Fairway Hotels Sri Lanka, bringing extensive experience in hospitality and business leadership."
      },
      {
        "@type": "Person",
        name: "P.S.Gunawardene",
        jobTitle: "Director",
        image: "https://www.hotelsfairway.com/images/Team/Director.png",
        description: "P.S.Gunawardene is a Director at Fairway Hotels Sri Lanka, contributing strategic vision and operational excellence to our luxury hotel portfolio."
      },
      {
        "@type": "Person",
        name: "A.Rathnasuriya",
        jobTitle: "General Manager",
        image: "https://www.hotelsfairway.com/images/Team/General_Manager.png",
        description: "A.Rathnasuriya serves as General Manager at Fairway Hotels Sri Lanka, overseeing daily operations and ensuring exceptional guest experiences."
      }
    ]
  };
}

export function jsonLdFAQ() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is the Chairman of Fairway Hotels Sri Lanka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "C. Weerasinghe serves as the Chairman and Managing Director of Fairway Hotels Sri Lanka, bringing extensive experience in luxury hospitality and business leadership."
        }
      },
      {
        "@type": "Question",
        name: "Who leads Fairway Hotels Sri Lanka team?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our leadership team includes C. Weerasinghe (Chairman & Managing Director), P.S.Gunawardene (Director), and A.Rathnasuriya (General Manager), all dedicated to providing exceptional luxury hospitality experiences."
        }
      },
      {
        "@type": "Question",
        name: "Where are Fairway Hotels located in Sri Lanka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fairway Hotels has luxury boutique properties in Katunayake (near Bandaranaike International Airport) and Koslanda. Our Meshendra Garden Hotel offers convenient airport access, while e34 Koslanda provides a serene natural retreat."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide airport transfers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer complimentary airport transfers for guests staying at our Meshendra Garden Hotel in Katunayake. Our professional chauffeur service ensures a seamless transition from Bandaranaike International Airport to your luxury accommodation."
        }
      },
      {
        "@type": "Question",
        name: "What makes Fairway Hotels different from other luxury hotels in Sri Lanka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fairway Hotels combines authentic Sri Lankan hospitality with world-class luxury amenities. Our boutique properties feature Swiming Pools, spa facilities, premium dining, and personalized service that creates unforgettable experiences tailored to each guest."
        }
      },
      {
        "@type": "Question",
        name: "Are your hotels suitable for business travelers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Our Meshendra Garden Hotel near the airport is ideal for business travelers with high-speed WiFi, business centers, meeting facilities, and convenient access to Colombo's business districts. We also offer corporate rates and special business packages."
        }
      },
      {
        "@type": "Question",
        name: "What outdoor activities are available near your hotels?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Both properties offer access to Sri Lanka's natural beauty. Meshendra Garden provides easy access to Colombo and Negombo beaches, while e34 Koslanda is surrounded by hiking trails, waterfalls, and tea plantations in the Uva Province highlands."
        }
      }
    ]
  };
}


