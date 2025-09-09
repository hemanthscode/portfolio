import React, { memo } from "react";
import Button from "../components/atoms/Button";
import Icon from "../components/atoms/Icon";

const NotFoundPage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Icon name="AlertTriangle" size={64} className="text-gray-400 mx-auto mb-6" />
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-100 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-400 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Button variant="primary" to="/" icon="ArrowLeft" size="lg">
          Back to Home
        </Button>
      </motion.div>
    </div>
  </div>
);

export default memo(NotFoundPage);