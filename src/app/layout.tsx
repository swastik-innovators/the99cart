import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The99Cart — Smart Marketplace for Sellers, Creators & Shoppers",
  description: "The99Cart is an upcoming smart marketplace connecting creators, sellers, and customers into one powerful shopping experience. Join early access today.",
  keywords: [
    "the99cart",
    "smart shopping",
    "creator marketplace",
    "online selling platform",
    "seller dashboard",
    "ecommerce marketplace",
    "shopping platform India",
    "creator commerce"
  ],
  alternates: {
    canonical: "https://the99cart.com",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "The99Cart — Smart Marketplace for Sellers, Creators & Shoppers",
    description: "The99Cart is an upcoming smart marketplace connecting creators, sellers, and customers into one powerful shopping experience. Join early access today.",
    url: "https://the99cart.com",
    siteName: "The99Cart",
    images: [
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "The99Cart Smart E-Commerce Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The99Cart — Smart Marketplace for Sellers, Creators & Shoppers",
    description: "The99Cart is an upcoming smart marketplace connecting creators, sellers, and customers into one powerful shopping experience. Join early access today.",
    creator: "@the99cart",
    images: ["https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Inject structured JSON-LD data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://the99cart.com/#organization",
        "name": "The99Cart",
        "url": "https://the99cart.com",
        "logo": "https://the99cart.com/logo.png",
        "sameAs": [
          "https://twitter.com/the99cart",
          "https://facebook.com/the99cart"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://the99cart.com/#website",
        "url": "https://the99cart.com",
        "name": "The99Cart",
        "publisher": {
          "@id": "https://the99cart.com/#organization"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://the99cart.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://the99cart.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Early Access",
            "item": "https://the99cart.com/#early-access"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is The99Cart?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The99Cart is a revolutionary smart digital marketplace connecting independent creators, developers, and shoppers into one single powerful, high-converting ecosystem."
            }
          },
          {
            "@type": "Question",
            "name": "How does seller onboarding work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sellers can register for a subdomain creator profile, upload digital products, set customized pricing, and track detailed revenue performance from their dashboard."
            }
          },
          {
            "@type": "Question",
            "name": "Is seller registration free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, initial creator registration and store initialization are 100% free. We keep a simple flat 15% commission on successful sales, keeping 85% for the creator."
            }
          },
          {
            "@type": "Question",
            "name": "When will The99Cart launch?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The99Cart official launch is scheduled for Summer 2026. Early access members get pre-approved store configurations and zero platform fees for their first 3 months."
            }
          },
          {
            "@type": "Question",
            "name": "Can creators sell products?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. Creators can build their personal storefronts, publish code bundles, UI kits, templates, ebooks, AI prompts, and earn automated payouts securely."
            }
          }
        ]
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wtltahk7ch");
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
