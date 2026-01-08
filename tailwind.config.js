/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary - Vibrant Orange (Turban main)
        primary: {
          50: '#FFF4ED',
          100: '#FFE6D5',
          200: '#FECCAB',
          300: '#FDA875',
          400: '#FB7A3C',
          500: '#E85D04', // Main brand orange
          600: '#D04A00',
          700: '#AC3B00',
          800: '#8A3000',
          900: '#712900',
          950: '#3D1300',
        },
        // Secondary - Golden Yellow (Turban accent)
        secondary: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#F9A825', // Main golden yellow
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F',
          950: '#451A03',
        },
        // Accent - Warm Orange-Red (.CA text)
        accent: {
          50: '#FEF2F2',
          100: '#FEE2E2',
          200: '#FECACA',
          300: '#FCA5A5',
          400: '#F87171',
          500: '#E63946', // Main accent red-orange
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          950: '#450A0A',
        },
        // Dark - Charcoal (Text color)
        dark: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#2D2D2D', // Main dark charcoal
          900: '#1F2937',
          950: '#111827',
        },
        // Light - Peach/Skin tones for backgrounds
        peach: {
          50: '#FDF8F6',
          100: '#F5E6D3',
          200: '#F5D0B5', // Main peach
          300: '#E9C1A4',
          400: '#DDA882',
          500: '#D18F60',
          600: '#C57A48',
          700: '#A5623A',
          800: '#875134',
          900: '#6E442D',
          950: '#3A2117',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #E85D04 0%, #F9A825 100%)',
        'gradient-dark': 'linear-gradient(135deg, #2D2D2D 0%, #4B5563 100%)',
        'gradient-accent': 'linear-gradient(135deg, #E63946 0%, #E85D04 100%)',
        'gradient-warm': 'linear-gradient(135deg, #F9A825 0%, #E85D04 50%, #E63946 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 40px rgba(232, 93, 4, 0.3)',
        'glow-secondary': '0 0 40px rgba(249, 168, 37, 0.3)',
        'glow-accent': '0 0 40px rgba(230, 57, 70, 0.3)',
      },
    },
  },
  plugins: [],
};
