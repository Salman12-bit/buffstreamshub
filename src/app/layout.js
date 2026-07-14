import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="YY9OJVtAhfka-ygxxIZ9NxtMO1RvglLjJPsXl689JOA" />
        <link rel="icon" type="image/png" href="/favicon.jpg" />

        <script data-cfasync="false" src="//dc9xwpjprguup.cloudfront.net/?pwxcd=1434539"></script>
      </head>

      <body className={inter.className}>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VJE8ZMQWP5"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VJE8ZMQWP5');
          `}
        </Script>

        <AuthProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
