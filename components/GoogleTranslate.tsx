"use client";
import React, { useEffect } from 'react';

declare global {
    interface Window {
        googleTranslateElementInit?: () => void;
        google?: any;
    }
}

const GoogleTranslate: React.FC = () => {
    useEffect(() => {
        
        const existingScript = document.getElementById('google-translate-script');
        
        window.googleTranslateElementInit = () => {
            
            const element = document.getElementById('google_translate_element');
            if (element && element.innerHTML === '') {
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
        <div 
  id="google_translate_element" 
  style={{ 
    zIndex: 1000, 
    position: 'absolute', 
    top: '70px', 
    right: '10px',      // 🔥 fixed for mobile
  }}
></div>
<style jsx>{`
@media (min-width: 768px) {
  #google_translate_element {
    right: 36px !important;
  }
}


`}</style>
</>
    );
};

export default GoogleTranslate;