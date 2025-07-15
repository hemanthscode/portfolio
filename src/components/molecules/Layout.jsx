import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import { containerPadding } from '../../constants/theme';

/**
 * Layout component for consistent page structure
 * @param {Object} props
 * @param {React.ReactNode} props.children - Page content
 * @returns {JSX.Element}
 */
const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className={`flex-grow ${containerPadding} py-6`}>{children}</main>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Layout);