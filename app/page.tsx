import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProductsSection from "./components/ProductsSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import { siteConfig } from "./site-config";

type Team = {
  name: string;
  role: string;
  image: string;
};

const team: Team[] = [
  {
    name: "Sumon Mondal",
    role: "Managing Director (MD) & CEO",
    image: "/sumon.jpeg"
  },
  {
    name: "Mohan Maity",
    role: "Chief Technology Officer (CTO)",
    image: "/mohan.jpeg"
  },
  {
    name: "Nittam",
    role: "Chief Operating Officer (COO)",
    image: "/nittam.jpeg"
  }
];

/* ========= MAIN COMPONENT ========= */

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/company/Full-Logo.png`,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      description: siteConfig.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.locality,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Bengali", "Hindi"],
      },
      knowsAbout: [
        "Enterprise software development",
        "Network monitoring systems",
        "Networking infrastructure",
        "IoT devices",
        "Electronics manufacturing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.description,
      publisher: { "@id": `${siteConfig.url}/#organization` },
      inLanguage: "en-IN",
    },
  ],
};

export default function Home() {
  return (
    <main className="bg-white text-black font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <TeamSection team={team} />
      <ContactSection />
    </main>
  );
}
