'use client';
import { useLoading } from '../contexts/LoadingContext';

/**
 * Enhanced hook for easier loading management
 * @returns {Object} Loading utilities
 */
export const useLoader = () => {
  const loadingContext = useLoading();

  // Simple show/hide with defaults
  const showLoader = (message, options = {}) => {
    const { size = 'large', brand = true } = options;
    loadingContext.show(message, size, brand);
  };

  const hideLoader = () => {
    loadingContext.hide();
  };

  // For async operations with automatic cleanup
  const withLoader = async (asyncOperation, message, options = {}) => {
    return loadingContext.withLoading(asyncOperation, { message, ...options });
  };

  // For timed loading (automatically hides after timeout)
  const showLoaderWithTimeout = (message, timeout = 5000, options = {}) => {
    const { size = 'large', brand = true } = options;
    return loadingContext.showLoadingWithTimeout({ 
      message, 
      timeout, 
      size, 
      brand 
    });
  };

  // Check loading state
  const isLoading = loadingContext.isLoading();

  return {
    // Simple methods
    show: showLoader,
    hide: hideLoader,
    
    // Advanced methods
    withLoader,
    showWithTimeout: showLoaderWithTimeout,
    
    // State
    isLoading,
    
    // Access to full context if needed
    context: loadingContext
  };
};

export default useLoader; 