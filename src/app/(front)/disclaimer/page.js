
import React from "react";
import "./legal.css";

const Disclaimer = () => {
  return (
    <div className="legal-page">
      <div className="legal-container">
        <span className="legal-badge">DISCLAIMER</span>

        <h1>Disclaimer</h1>

        <p className="legal-intro">
          Please read the following information carefully before using
          BuffStreamsHub.
        </p>

        <section>
          <h2>Third-Party Content</h2>
          <p>
            BuffStreamsHub does not host, upload, store, or transmit any
            audiovisual content. We do not control or influence content
            provided by third-party sources.
          </p>
        </section>

        <section>
          <h2>Content Responsibility</h2>
          <p>
            Any responsibility for third-party streams, videos, links, or
            other content lies with the respective providers or hosts.
          </p>
        </section>

        <section>
          <h2>No Affiliation</h2>
          <p>
            BuffStreamsHub is not affiliated with, endorsed by, or officially
            connected to the owners of third-party streams, videos, or
            services referenced on this website.
          </p>
        </section>

        <section>
          <h2>External Links</h2>
          <p>
            We may provide links to external websites. We do not control and
            are not responsible for the content, availability, or policies of
            those websites.
          </p>
        </section>

        <section>
          <h2>Use of the Website</h2>
          <p>
            By using this website, you acknowledge that you do so at your own
            discretion and responsibility.
          </p>
        </section>

        <p className="legal-update">
          Last updated: August 2026
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;

