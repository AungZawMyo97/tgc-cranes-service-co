/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#EAB308',
                    dark: '#CA8A04',
                    light: '#FDE047',
                },
                navy: {
                    DEFAULT: '#1B263B',
                    light: '#2C3E50',
                },
                red: {
                    DEFAULT: '#D9242C',
                    dark: '#B91C1C',
                },
                secondary: {
                    DEFAULT: '#111827',
                    light: '#374151',
                },
                surface: {
                    DEFAULT: '#FFFFFF',
                    dark: '#1F2937',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
                heads: ['Oswald', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1.5rem',
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                }
            }
        },
    },
    plugins: [],
}
