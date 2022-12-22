module.exports = {
    content: [
        './pages/**/*.{js,jsx}',
        './src/components/**/*.{js,jsx}',
        './src//app/**/*.{js,jsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                plex: ['IBM Plex Mono', 'mono'],
                chak: ['Chakra Petch', 'sans-serif'],
            },
            backgroundImage: {
                grid: "url('/grid.png')",
            },
            colors: {
                ora: '#FF4D00',
            },
            animation: {
                marquee: 'marquee 7s linear infinite',
                marquee2: 'marquee2 7s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            },
        },
    },
    plugins: [],
}
