import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import React, { useEffect } from 'react';
import Navbar from './components/Navbar.tsx';

// Component to handle dynamic title changes
const DynamicTitleHandler: React.FC = () => {
    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                document.title = "Come back soon! 😊";
            } else {
                document.title = "Abhishek Singh - Protfolio";
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        // Cleanup event listener on unmount
        return () => {
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);

    return null; // No UI rendering, just logic
};

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <DynamicTitleHandler />
        <Navbar/>
        <App />
        <Toaster />
    </BrowserRouter>
);
