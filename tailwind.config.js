module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Professional code editor blue
        primary: {
          50: "#e6f3ff", // blue-50
          100: "#b3d9ff", // blue-100
          200: "#80bfff", // blue-200
          300: "#4da6ff", // blue-300
          400: "#1a8cff", // blue-400
          500: "#007acc", // blue-500 (base)
          600: "#0066b3", // blue-600
          700: "#005299", // blue-700
          800: "#003d80", // blue-800
          900: "#002966", // blue-900
          DEFAULT: "#007acc" // blue-500
        },
        // Secondary Colors - Deep coding background
        secondary: {
          50: "#f7f7f7", // gray-50
          100: "#e3e3e3", // gray-100
          200: "#c8c8c8", // gray-200
          300: "#a4a4a4", // gray-300
          400: "#818181", // gray-400
          500: "#666666", // gray-500
          600: "#515151", // gray-600
          700: "#434343", // gray-700
          800: "#383838", // gray-800
          900: "#1e1e1e", // gray-900 (base)
          DEFAULT: "#1e1e1e" // gray-900
        },
        // Accent Colors - Vibrant success green
        accent: {
          50: "#e6fdf9", // teal-50
          100: "#b3f9ec", // teal-100
          200: "#80f5df", // teal-200
          300: "#4df1d2", // teal-300
          400: "#1aedc5", // teal-400
          500: "#00d4aa", // teal-500 (base)
          600: "#00b894", // teal-600
          700: "#009c7e", // teal-700
          800: "#008068", // teal-800
          900: "#006452", // teal-900
          DEFAULT: "#00d4aa" // teal-500
        },
        // Background Colors
        background: "#f8fafc", // slate-50
        surface: "#ffffff", // white
        // Text Colors
        text: {
          primary: "#1a202c", // gray-900
          secondary: "#718096" // gray-500
        },
        // Status Colors
        success: "#48bb78", // green-400
        warning: "#ed8936", // orange-400
        error: "#e53e3e", // red-400
        // Border Colors
        border: {
          DEFAULT: "#e2e8f0", // gray-200
          light: "#f7fafc" // gray-50
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }]
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      boxShadow: {
        'subtle': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'strong': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'code': '0 2px 4px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem'
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out',
        'slide-up': 'slideUp 400ms ease-out',
        'slide-down': 'slideDown 400ms ease-out',
        'scale-in': 'scaleIn 300ms ease-out',
        'bounce-subtle': 'bounceSubtle 600ms ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(1rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-1rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-0.25rem)' }
        }
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms'
      },
      transitionTimingFunction: {
        'out': 'ease-out',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
      }
    }
  },
  plugins: []
}