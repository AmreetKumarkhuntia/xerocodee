import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme:{
    extend:{
      fontFamily: {
          'poppins':['Poppins'],
      },
      spacing:{
        'navW':'80vw',
        'navH':'10vh',
      },
      animation:{
        'animationWidth':'animationWidth 0.15s linear'
      },
      keyframes:{
        animationWidth:{
          '0%':{
            width: '0%'
          },
          '100%':{
            width: '100%'
          }
        }
      }
    }
  },
  plugins: [],
}

export default config
