/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            /* -------------------------
         5 Useful Screen Sizes
      ------------------------- */
            screens: {
                xs: '425px',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },

            /* -------------------------
         Keyframes for animations
      ------------------------- */
            keyframes: {
                'spin-slow': {
                    to: { transform: 'rotate(360deg)' },
                },
                'spin-slower': {
                    to: { transform: 'rotate(-360deg)' },
                },
            },

            /* -------------------------
         Animations used in HeroCard
      ------------------------- */
            animation: {
                'spin-slow': 'spin 12s linear infinite',
                'spin-slower': 'spin 18s linear infinite reverse',
            },

            /* -------------------------
         Two Custom Premium Shadows
      ------------------------- */
            boxShadow: {
                soft: '0 10px 28px rgba(0,0,0,0.45)',
                strong: '0 18px 44px rgba(0,0,0,0.55)',
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
                audiowide: ['Audiowide', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
