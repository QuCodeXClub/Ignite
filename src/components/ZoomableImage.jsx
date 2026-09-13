import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

const ZoomableImage = ({ src, alt, className, style, loading }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleEsc = (e) => {
        if (e.key === 'Escape') setIsOpen(false);
      };
      window.addEventListener('keydown', handleEsc);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [isOpen]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`${className || ''} cursor-zoom-in`}
        style={style}
        loading={loading}
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(true);
        }}
      />
      
      {isOpen && createPortal(
        <div 
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-md animate-in fade-in duration-300"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        >
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-white hover:text-[var(--color-accent)] transition-colors rounded-full hover:bg-white/10 z-[10001] backdrop-blur-md"
            aria-label="Close image"
          >
            <X className="w-8 h-8" />
          </button>
          
          <img 
            src={src} 
            alt={alt} 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>,
        document.body
      )}
    </>
  );
};

export default ZoomableImage;
