'use client';

import { useState, useEffect } from 'react';
import LiveScreen from '@/components/LiveScreen';

export default function FloatingLiveTV() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  if (isMinimized) {
    return (
      <button 
        onClick={() => setIsMinimized(false)}
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 9999,
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '0.5px solid rgba(0, 0, 0, 0.08)',
          borderRadius: '30px',
          padding: '8px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
          cursor: 'pointer',
          fontWeight: 400,
          fontSize: '13px',
          color: '#333',
          transition: 'all 0.3s ease',
          animation: 'fadeIn 0.4s ease forwards',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.08)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
        }}
      >
        <div style={{ width: '6px', height: '6px', background: '#e11d48', borderRadius: '50%' }}></div>
        Live Broadcast
      </button>
    );
  }

  return (
    <div 
      style={{ 
        position: 'fixed', 
        bottom: '24px', 
        left: '24px', 
        zIndex: 9999, 
        /* crucial fix: prevent container from blocking clicks on the page */
        pointerEvents: 'none',
      }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          /* Enable pointer events back for the actual TV component */
          pointerEvents: 'auto',
          transformOrigin: 'bottom left',
          animation: 'slideUpLight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          background: 'transparent',
          borderRadius: '16px',
          border: '0.5px solid rgba(0,0,0,0.08)',
          boxShadow: '0 10px 40px -10px rgba(0,0,0,0.15)',
          overflow: 'hidden',
          width: 'fit-content',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes slideUpLight {
            0% { opacity: 0; transform: translateY(20px) scale(0.7); }
            100% { opacity: 1; transform: translateY(0) scale(0.75); }
          }
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `}} />

        {/* Subtle overlay minimize button */}
        <button
          onClick={() => setIsMinimized(true)}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            zIndex: 10,
            background: 'rgba(255,255,255,0.8)',
            backdropFilter: 'blur(4px)',
            border: '0.5px solid rgba(0,0,0,0.05)',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            opacity: isHovered ? 1 : 0,
            transition: 'all 0.3s ease',
            color: '#555',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#fff';
            e.currentTarget.style.color = '#000';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.8)';
            e.currentTarget.style.color = '#555';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>

        {/* The TV Component Wrapper */}
        <div style={{ background: '#000' }}>
          <LiveScreen compact={true} />
        </div>
      </div>
    </div>
  );
}
