'use client';
import React, { createContext, useContext, useState, useCallback } from 'react';
import GlobalLoader from '../components/GlobalLoader';

const LoadingContext = createContext(null);

export const useLoading = () => {
    const context = useContext(LoadingContext);
    if (!context) {
        throw new Error('useLoading must be used within a LoadingProvider');
    }
    return context;
};

export const LoadingProvider = ({ children }) => {
    const [loadingStates, setLoadingStates] = useState({});
    const [globalLoading, setGlobalLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('Loading...');
    const [loadingSize, setLoadingSize] = useState('medium');
    const [showBrand, setShowBrand] = useState(true);

    console.log(loadingStates, '#@$#@$#@', globalLoading)

    // Start loading for a specific key or global
    const startLoading = useCallback((options = {}) => {
        const {
            key = 'global',
            message,
            size = 'large',
            brand = true
        } = options;

        if (key === 'global') {
            setGlobalLoading(true);
            setLoadingMessage(message);
            setLoadingSize(size);
            setShowBrand(brand);
        } else {
            setLoadingStates(prev => ({
                ...prev,
                [key]: { isLoading: true, message, size, brand }
            }));
        }
    }, []);

    // Stop loading for a specific key or global
    const stopLoading = useCallback((key = 'global') => {
        if (key === 'global') {
            setGlobalLoading(false);
        } else {
            setLoadingStates(prev => {
                const newStates = { ...prev };
                delete newStates[key];
                return newStates;
            });
        }
    }, []);

    // Simple show/hide methods for easier use
    const show = useCallback((message, size = 'medium', brand = true) => {
        startLoading({ message, size, brand });
    }, [startLoading]);

    const hide = useCallback(() => {
        stopLoading();
    }, [stopLoading]);

    // Check if any loading is active
    const isLoading = useCallback((key) => {
        if (key) {
            return loadingStates[key]?.isLoading || false;
        }
        return globalLoading || Object.keys(loadingStates).length > 0;
    }, [loadingStates, globalLoading]);

    // Get loading message for a specific key
    const getMessage = useCallback((key) => {
        if (key === 'global') {
            return loadingMessage;
        }
        return loadingStates[key]?.message;
    }, [loadingStates, loadingMessage]);

    // Show loading with automatic timeout
    const showLoadingWithTimeout = useCallback((options = {}) => {
        const { timeout = 30000, key = 'global', ...loadingOptions } = options;
        startLoading({ key, ...loadingOptions });
        const timeoutId = setTimeout(() => {
            stopLoading(key);
        }, timeout);

        return () => clearTimeout(timeoutId);
    }, [startLoading, stopLoading]);

    // Async wrapper for operations
    const withLoading = useCallback(async (operation, options = {}) => {
        const { message, size = 'large', brand = true } = options;
        try {
            show(message, size, brand);
            const result = await operation();
            return result;
        } finally {
            hide();
        }
    }, [show, hide]);

    const value = {
        // Legacy methods for backward compatibility
        startLoading,
        stopLoading,

        // Simple methods
        show,
        hide,

        // Utility methods
        isLoading,
        getMessage,
        showLoadingWithTimeout,
        withLoading,

        // State
        globalLoading,
        loadingStates
    };

    return (
        <LoadingContext.Provider value={value}>
            {children}
            <GlobalLoader
                message={loadingMessage}
                size={loadingSize}
                showBrand={showBrand}
                isVisible={globalLoading}
            />
        </LoadingContext.Provider>
    );
}; 