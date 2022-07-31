module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontSize: {
                'snd-2xl': '12vw',
                'snd-xl': '13vw',
                'snd-sm': '14vw'
            },
            lineHeight: {
                'snd-2xl': '11vw',
                'snd-xl': '11vw',
                'snd-sm': '15vw',
            },
            padding: {
                'snd-2xl': '0rem'
            },
            width: {
                'snd-2xl': '10vw',
                'snd-xl': '10vw',
                'snd-sm': '13vw',
            },
            height: {
                'snd-2xl': '10vw',
                'snd-xl': '10vw',
                'snd-sm': '13vw',
            }
        }
    },
    plugins: [],
}
