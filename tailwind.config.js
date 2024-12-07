/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Rich Purple Tones
        'brand': '#6A1E9C',                // Deep purple for a luxurious feel
        'brand-light': '#9C4D97',           // Soft lavender to complement the dark purple
        'brand-dark': '#4A148C',            // Darker purple to create depth

        // Elegant Reds and Oranges
        'secondary': '#D32F2F',             // Classic red that evokes urgency and importance
        'secondary-light': '#FF6659',       // Lightened red for calls to action or buttons

        // Calm and Subtle Blues
        'accent-blue': '#1976D2',           // Bright blue for clear contrast and clarity
        'accent-light-blue': '#81D4FA',     // Softer, sky-like blue for subtle highlights

        // Fresh Green Tones
        'green-light': '#388E3C',           // Vibrant green that feels fresh and organic
        'green-dark': '#1B5E20',            // Deep green for a more grounded feel

        // Warm Earth Tones
        'earthy-beige': '#F5F5F5',          // Soft beige that works as a neutral background
        'earthy-brown': '#6D4C41',          // Rich brown to add warmth and depth to the layout

        // Elegant Accent Colors
        'gold': '#FFD700',                  // Gold for luxurious and high-end accents
        'soft-peach': '#FFEBEE',            // Subtle peach for a fresh, inviting touch

        // Light Background Shades
        'background': '#F0F8FF',            // Alice blue (light, serene background for the page)
      },
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      backdropFilter: {
        'frosted': 'blur(10px) brightness(0.6)', // Frosted glass effect
      },
    },
  },
  plugins: [],
};
