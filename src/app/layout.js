import '../styles/globals.css';
import { gilroyMedium, gilroyBold, gilroyExtraBold } from '../fonts/Gilroy';
import { Providers } from '../providers';
import Navbar from '../components/Navbar';
import { Box } from '@mui/material';

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${gilroyMedium.variable} ${gilroyBold.variable} ${gilroyExtraBold.variable}`}>
      <body>
        {/* Google Tag Manager (noscript) */}
        
        {/* Structured data: WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Granday",
              alternateName: ["TheGranday", "The Granday"],
              url: "https://thegranday.com/",
            }),
          }}
        />
        {/* Structured data: Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org/",
              "@type": "Organization",
              name: "Granday",
              logo: "landing/logo.png",
              url: "https://thegranday.com/",
              address: {
                "@type": "PostalAddress",
                streetAddress: "The Hive, VR Mall, Anna Nagar,",
                addressLocality: "Chennai",
                addressRegion: "Tamil Nadu",
                postalCode: "600040",
                addressCountry: "India",
              },
              sameAs: [
                "https://www.facebook.com/the.granday",
                "https://www.instagram.com/the_granday/",
                "https://in.linkedin.com/company/granday",
              ],
            }),
          }}
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Wedding Vendors in India - Find Venues, Photographers, Caterers, Etc" />
        <meta property="og:url" content="https://thegranday.com/" />
        <meta property="og:image" content="/landing/landingPage.png" />
        <meta property="og:description" content="Set Up A Consultation Today! From Venue to Vendors, We cover all your needs for the big day. Contact Young & Creative Wedding Planner to plan your dream day now." />
        <Providers>
          <Navbar />
          <Box component="main" sx={{ flexGrow: 1 }}>
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
