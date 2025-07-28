/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors from slide
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        // UnityLend brand burgundy
        unitylend: {
          50: '#fef1f1',
          100: '#fee1e1',
          200: '#fdc8c8',
          300: '#fba2a2',
          400: '#f66e6e',
          500: '#ec4545',
          600: '#d32f2f',
          700: '#b71c1c',
          800: '#8c1515',
          900: '#7f1d1d',
          950: '#4a0a0a',
        },
        // Gold/Yellow accent
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        // Network/connection colors
        network: {
          light: '#ffffff',
          dark: '#1a1a1a',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'network-pattern': "url(\"data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23ffffff' fill-opacity='0.1'%3e%3cpath d='M30 30l20-20v40zm0 0l-20 20h40z'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e\")",
        'gradient-primary': 'linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%)',
        'gradient-gold': 'linear-gradient(135deg, #fde047 0%, #eab308 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      boxShadow: {
        'unitylend': '0 10px 25px -3px rgba(185, 28, 28, 0.1), 0 4px 6px -2px rgba(185, 28, 28, 0.05)',
        'gold': '0 10px 25px -3px rgba(234, 179, 8, 0.1), 0 4px 6px -2px rgba(234, 179, 8, 0.05)',
      }
    },
  },
  plugins: [],
}
