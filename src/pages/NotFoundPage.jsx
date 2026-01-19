import { memo } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import Icon from '@/components/common/Icon';

/**
 * 404 Not Found page
 */
const NotFoundPage = () => {
  return (
    <section className="min-h-[calc(100vh-4rem)] lg:min-h-[calc(100vh-5rem)] flex items-center justify-center bg-black">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-white/5 border border-white/10 mb-6">
              <Icon name="AlertCircle" size={48} className="text-white" />
            </div>
            
            <h1 className="text-8xl sm:text-9xl font-bold text-white/10 mb-4">
              404
            </h1>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          
          <p className="text-lg text-gray-400 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" to="/" icon="Home">
              Go Home
            </Button>
            <Button variant="secondary" size="lg" to="/work" icon="Briefcase">
              View Projects
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-gray-500 mb-4">Or try one of these:</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button variant="ghost" size="sm" to="/about">
                About
              </Button>
              <Button variant="ghost" size="sm" to="/work">
                Work
              </Button>
              <Button variant="ghost" size="sm" to="/contact">
                Contact
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default memo(NotFoundPage);
