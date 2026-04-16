/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // WattPose brand palette
        indigo:  { DEFAULT: '#6366F1', 600: '#4F46E5' },
        teal:    { DEFAULT: '#10B981', 600: '#059669' },
        coral:   { DEFAULT: '#F43F5E', 600: '#DC2626' },
        pink:    { DEFAULT: '#FF4081', 600: '#DB2777' },
        cyan:    { DEFAULT: '#00C6FF' },
        // Surface
        surface: '#111827',
        bg:      '#0B0F19',
      },
      fontFamily: {
        sans: [
          'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont',
          '"Segoe UI"', 'Roboto', 'sans-serif',
        ],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #FF4081 0%, #6366F1 45%, #00C6FF 80%, #10B981 100%)',
        'hero-glow':      'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.35) 0%, transparent 70%)',
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float 9s ease-in-out infinite',
        'pulse-glow':   'pulseGlow 3s ease-in-out infinite',
        'gradient-x':   'gradientX 8s ease infinite',
        'spin-slow':    'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%':      { opacity: '1',   transform: 'scale(1.05)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
