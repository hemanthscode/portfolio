import React, { memo } from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { theme } from "../../constants/theme";

/**
 * Layout component for consistent page structure with header and footer.
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content.
 * @returns {JSX.Element}
 * @example
 * <Layout><HomePage /></Layout>
 */
const Layout = ({ children }) => (
  <div className={`flex flex-col min-h-screen ${theme.colors.background}`}>
    <Navbar />
    <main className={`flex-grow ${theme.spacing.container} ${theme.spacing.section}`}>
      {children}
    </main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Layout);