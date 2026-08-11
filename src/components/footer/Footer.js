
"use client";

import { useEffect, useState } from "react";
import "./footer.css";

export default function Footer() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(document.documentElement.scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      <div className="footer-main">
        <h3>BuffStreamsHub</h3>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="policy">Policy</a>
          <a href="disclaimer">Disclaimer</a>
          <a href="/contact">Contact Us</a>
        </div>
      </div>

      <p className="footer-disclaimer">
        We do not host or transmit any audiovisual content. All third-party
        content belongs to its respective owners and providers.
      </p>

      <div className="footer-bottom">
        © {new Date().getFullYear()} BuffStreamsHub. All rights reserved.
      </div>

      {visible && (
        <button className="scroll-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </footer>
  );
}
