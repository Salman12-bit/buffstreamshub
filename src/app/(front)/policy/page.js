
import React from "react";
import "./legal.css";

const Policy = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <span className="legal-badge">PRIVACY POLICY</span>

        <h1>Privacy Policy</h1>

        <p className="legal-intro">
          Your privacy is important to us. This policy explains how we handle
          information when you use BuffStreamsHub.
        </p>

        <section>
          <h2>Information We Collect</h2>
          <p>
            We may collect basic information that you voluntarily provide,
            such as your name or email address when contacting us.
          </p>
        </section>

        <section>
          <h2>How We Use Information</h2>
          <p>
            Information provided to us may be used to respond to your
            questions, improve our website, and provide better support.
          </p>
        </section>

        <section>
          <h2>Third-Party Services</h2>
          <p>
            Our website may contain links or content from third-party
            services. We are not responsible for the privacy practices of
            external websites.
          </p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy when necessary. Any changes
            will be reflected on this page.
          </p>
        </section>

        <p className="legal-update">
          Last updated: August 2026
        </p>
      </div>
    </div>
  );
};

export default Policy;

