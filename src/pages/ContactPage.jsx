import React, { memo } from "react";
import Contact from "../components/organisms/Contact";

/**
 * Contact page rendering the Contact section.
 * @returns {JSX.Element}
 * @example
 * <ContactPage />
 */
const ContactPage = () => (
  <main role="main">
    <Contact />
  </main>
);

export default memo(ContactPage);