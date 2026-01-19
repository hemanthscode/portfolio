import { memo } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

/**
 * Main layout wrapper - Provides consistent structure
 */
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      
      <main className="flex-1 pt-16 lg:pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default memo(Layout);
