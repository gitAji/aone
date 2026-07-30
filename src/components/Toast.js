'use client';
import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaExclamationCircle, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Toast = ({ message, type = 'success', onClose, duration = 5000 }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className="fixed top-24 right-4 z-[9999] pointer-events-none">
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    className={`pointer-events-auto flex items-center p-4 mb-4 rounded-lg shadow-xl border w-full max-w-sm ml-auto bg-white dark:bg-slate-800 ${type === 'success'
                            ? 'border-l-4 border-l-green-500'
                            : 'border-l-4 border-l-red-500'
                        }`}
                    role="alert"
                >
                    <div className="flex-shrink-0 mr-3">
                        {type === 'success' ? (
                            <FaCheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                            <FaExclamationCircle className="w-5 h-5 text-red-500" />
                        )}
                    </div>
                    <div className={`flex-1 text-sm font-medium ${type === 'success' ? 'text-green-800 dark:text-green-400' : 'text-red-800 dark:text-red-400'
                        }`}>
                        {message}
                    </div>
                    <button
                        onClick={onClose}
                        className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        aria-label="Close"
                    >
                        <FaTimes className="w-4 h-4" />
                    </button>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Toast;
