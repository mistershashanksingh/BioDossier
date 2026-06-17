'use client';

import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const TechSVGAnimations: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // Use CSS custom properties to adapt to theme
  const lightColor = 'rgb(37 99 235)'; // blue-600
  const darkColor = 'rgb(96 165 250)'; // blue-400

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Docker Container Animation */}
      <div className="absolute top-20 left-10 animate-float opacity-20" style={{ animationDelay: '0s' }}>
        <svg width="60" height="60" viewBox="0 0 24 24" className="text-blue-600 dark:text-blue-400">
          <g fill="currentColor">
            <rect x="2" y="8" width="3" height="3" rx="0.5">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
            </rect>
            <rect x="6" y="8" width="3" height="3" rx="0.5">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.5s" repeatCount="indefinite" />
            </rect>
            <rect x="10" y="8" width="3" height="3" rx="0.5">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
            </rect>
            <rect x="6" y="4" width="3" height="3" rx="0.5">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.5s" repeatCount="indefinite" />
            </rect>
            <rect x="10" y="4" width="3" height="3" rx="0.5">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="2s" repeatCount="indefinite" />
            </rect>
            <path d="M14 8h7l-1 4h-6z">
              <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="4s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>
      </div>

      {/* Kubernetes Wheel */}
      <div className="absolute top-32 right-20 animate-float opacity-20" style={{ animationDelay: '1s' }}>
        <svg width="70" height="70" viewBox="0 0 24 24" className={isDark ? 'text-teal-400' : 'text-teal-600'}>
          <g fill="currentColor">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1">
              <animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="8s" repeatCount="indefinite" />
            </circle>
            <circle cx="12" cy="12" r="2" />
            <g>
              <animateTransform attributeName="transform" type="rotate" values="0 12 12;360 12 12" dur="6s" repeatCount="indefinite" />
              <circle cx="12" cy="4" r="1.5" />
              <circle cx="20" cy="12" r="1.5" />
              <circle cx="12" cy="20" r="1.5" />
              <circle cx="4" cy="12" r="1.5" />
              <circle cx="17.5" cy="6.5" r="1" />
              <circle cx="17.5" cy="17.5" r="1" />
              <circle cx="6.5" cy="17.5" r="1" />
              <circle cx="6.5" cy="6.5" r="1" />
            </g>
          </g>
        </svg>
      </div>

      {/* AI Neural Network */}
      <div className="absolute bottom-32 left-16 animate-float opacity-20" style={{ animationDelay: '2s' }}>
        <svg width="80" height="80" viewBox="0 0 24 24" className={isDark ? 'text-green-400' : 'text-green-600'}>
          <g fill="currentColor" stroke="currentColor" strokeWidth="0.5">
            {/* Nodes */}
            <circle cx="4" cy="6" r="2">
              <animate attributeName="r" values="2;3;2" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="4" cy="12" r="2">
              <animate attributeName="r" values="2;3;2" dur="2s" begin="0.3s" repeatCount="indefinite" />
            </circle>
            <circle cx="4" cy="18" r="2">
              <animate attributeName="r" values="2;3;2" dur="2s" begin="0.6s" repeatCount="indefinite" />
            </circle>
            <circle cx="12" cy="8" r="2">
              <animate attributeName="r" values="2;3;2" dur="2s" begin="0.9s" repeatCount="indefinite" />
            </circle>
            <circle cx="12" cy="16" r="2">
              <animate attributeName="r" values="2;3;2" dur="2s" begin="1.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="20" cy="12" r="2">
              <animate attributeName="r" values="2;3;2" dur="2s" begin="1.5s" repeatCount="indefinite" />
            </circle>
            
            {/* Connections */}
            <line x1="6" y1="6" x2="10" y2="8" strokeWidth="1">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
            </line>
            <line x1="6" y1="12" x2="10" y2="8" strokeWidth="1">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="0.5s" repeatCount="indefinite" />
            </line>
            <line x1="6" y1="18" x2="10" y2="16" strokeWidth="1">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1s" repeatCount="indefinite" />
            </line>
            <line x1="14" y1="8" x2="18" y2="12" strokeWidth="1">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="1.5s" repeatCount="indefinite" />
            </line>
            <line x1="14" y1="16" x2="18" y2="12" strokeWidth="1">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" begin="2s" repeatCount="indefinite" />
            </line>
          </g>
        </svg>
      </div>

      {/* Cloud Infrastructure */}
      <div className="hidden md:block absolute top-40 left-1/2 animate-float opacity-20" style={{ animationDelay: '3s' }}>
        <svg width="90" height="60" viewBox="0 0 24 16" className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>
          <g fill="currentColor">
            <path d="M18 8c0-3.31-2.69-6-6-6-2.5 0-4.65 1.54-5.55 3.72C4.96 5.28 4 6.53 4 8c0 2.21 1.79 4 4 4h10c1.66 0 3-1.34 3-3s-1.34-3-3-3z">
              <animateTransform attributeName="transform" type="translate" values="0,0;2,0;0,0" dur="4s" repeatCount="indefinite" />
            </path>
            <circle cx="8" cy="10" r="1">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="12" cy="10" r="1">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="16" cy="10" r="1">
              <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" begin="1s" repeatCount="indefinite" />
            </circle>
          </g>
        </svg>
      </div>

      {/* Quantum Circuit */}
      <div className="hidden md:block absolute bottom-20 right-32 animate-float opacity-20" style={{ animationDelay: '4s' }}>
        <svg width="100" height="60" viewBox="0 0 24 16" className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>
          <g fill="none" stroke="currentColor" strokeWidth="1.5">
            {/* Quantum gates */}
            <rect x="4" y="4" width="3" height="3" rx="0.5">
              <animateTransform attributeName="transform" type="rotate" values="0 5.5 5.5;360 5.5 5.5" dur="3s" repeatCount="indefinite" />
            </rect>
            <rect x="10" y="4" width="3" height="3" rx="0.5">
              <animateTransform attributeName="transform" type="rotate" values="0 11.5 5.5;360 11.5 5.5" dur="3s" begin="1s" repeatCount="indefinite" />
            </rect>
            <rect x="16" y="4" width="3" height="3" rx="0.5">
              <animateTransform attributeName="transform" type="rotate" values="0 17.5 5.5;360 17.5 5.5" dur="3s" begin="2s" repeatCount="indefinite" />
            </rect>
            
            {/* Quantum lines */}
            <line x1="2" y1="5.5" x2="22" y2="5.5">
              <animate attributeName="stroke-dasharray" values="0,24;24,0;0,24" dur="4s" repeatCount="indefinite" />
            </line>
            <line x1="2" y1="10.5" x2="22" y2="10.5">
              <animate attributeName="stroke-dasharray" values="0,24;24,0;0,24" dur="4s" begin="1s" repeatCount="indefinite" />
            </line>
            
            {/* Entanglement */}
            <path d="M5.5 7 L5.5 10.5" strokeDasharray="2,2">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
            </path>
            <path d="M17.5 7 L17.5 10.5" strokeDasharray="2,2">
              <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" begin="1s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>
      </div>

      {/* Git Branch Animation */}
      <div className="hidden md:block absolute top-60 right-10 animate-float opacity-20" style={{ animationDelay: '5s' }}>
        <svg width="80" height="80" viewBox="0 0 24 24" className={isDark ? 'text-cyan-400' : 'text-cyan-600'}>
          <g fill="currentColor" stroke="currentColor" strokeWidth="1">
            <circle cx="6" cy="6" r="2">
              <animate attributeName="fill" values="currentColor;transparent;currentColor" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="18" cy="6" r="2">
              <animate attributeName="fill" values="currentColor;transparent;currentColor" dur="3s" begin="1s" repeatCount="indefinite" />
            </circle>
            <circle cx="6" cy="18" r="2">
              <animate attributeName="fill" values="currentColor;transparent;currentColor" dur="3s" begin="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="18" cy="18" r="2">
              <animate attributeName="fill" values="currentColor;transparent;currentColor" dur="3s" begin="1.5s" repeatCount="indefinite" />
            </circle>
            
            <path d="M6 8 L6 16" strokeWidth="2">
              <animate attributeName="stroke-dasharray" values="0,8;8,0;0,8" dur="4s" repeatCount="indefinite" />
            </path>
            <path d="M8 6 L16 6" strokeWidth="2">
              <animate attributeName="stroke-dasharray" values="0,8;8,0;0,8" dur="4s" begin="1s" repeatCount="indefinite" />
            </path>
            <path d="M8 16 Q12 12 16 16" strokeWidth="2" fill="none">
              <animate attributeName="stroke-dasharray" values="0,12;12,0;0,12" dur="4s" begin="2s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>
      </div>

      {/* Database Animation */}
      <div className="hidden md:block absolute bottom-40 left-1/3 animate-float opacity-20" style={{ animationDelay: '6s' }}>
        <svg width="60" height="80" viewBox="0 0 24 32" className={isDark ? 'text-blue-400' : 'text-blue-600'}>
          <g fill="currentColor">
            <ellipse cx="12" cy="6" rx="8" ry="3">
              <animate attributeName="ry" values="3;4;3" dur="2s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="12" cy="16" rx="8" ry="3">
              <animate attributeName="ry" values="3;4;3" dur="2s" begin="0.5s" repeatCount="indefinite" />
            </ellipse>
            <ellipse cx="12" cy="26" rx="8" ry="3">
              <animate attributeName="ry" values="3;4;3" dur="2s" begin="1s" repeatCount="indefinite" />
            </ellipse>
            
            <rect x="4" y="6" width="16" height="10" fill="currentColor" opacity="0.7">
              <animate attributeName="opacity" values="0.7;0.9;0.7" dur="3s" repeatCount="indefinite" />
            </rect>
            <rect x="4" y="16" width="16" height="10" fill="currentColor" opacity="0.7">
              <animate attributeName="opacity" values="0.7;0.9;0.7" dur="3s" begin="1s" repeatCount="indefinite" />
            </rect>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default TechSVGAnimations;