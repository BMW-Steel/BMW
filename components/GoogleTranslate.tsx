"use client";
import React, { useEffect } from 'react';

declare global {
    interface Window {
        googleTranslateElementInit?: () => void;
        google?: {
            translate?: {
                TranslateElement: new (
                    options: { pageLanguage: string },
                    elementId: string
                ) => unknown;
            };
        };
    }
}

const GoogleTranslate: React.FC = () => {
    useEffect(() => {
        
        const existingScript = document.getElementById('google-translate-script');
        
        window.googleTranslateElementInit = () => {
            
            const element = document.getElementById('google_translate_element');
            if (element && element.innerHTML === '' && window.google?.translate) {
                new window.google.translate.TranslateElement(
                    { pageLanguage: 'en' },
                    'google_translate_element'
                );
            }
        };

        if (!existingScript) {
            const script = document.createElement('script');
            script.id = 'google-translate-script'; 
            script.type = 'text/javascript';
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
        } else if (window.google && window.google.translate) {
            
            window.googleTranslateElementInit();
        }

        
        return () => {
            
        };
    }, []);

    return (
        <>
        {/* In-flow navbar item: keeps the language selector aligned
            on every screen with consistent spacing */}
        <div id="google_translate_element" />
        <style jsx>{`
            #google_translate_element {
                display: flex;
                align-items: center;
                margin-right: 16px;   /* consistent gap before the logo */
            }

            @media (max-width: 991.98px) {
                #google_translate_element {
                    margin-right: 8px;   /* tighter gap on tablet/mobile rows */
                }
            }
        `}</style>
        </>
    );
};

export default GoogleTranslate;