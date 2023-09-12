import { defineConfig } from "@pandacss/dev";

export default defineConfig({
    // Whether to use css reset
    preflight: true,
    
    // Where to look for your css declarations
    include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}" ],

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
      extend: {
          tokens: {
            fonts: {
              chli:    { value: 'var(--font-ChLi)'        },
              nunito:  { value: 'var(--font-nunito)'      },
              nunitos: { value: 'var(--font-nunuto-sans)' },
            },
            colors: { 
              ebony: { 
                50:  { value: 'hsl(192, 26%, 96%)' },
                100: { value: 'hsl(194, 27%, 90%)' },
                200: { value: 'hsl(196, 25%, 82%)' },
                300: { value: 'hsl(196, 24%, 69%)' },
                400: { value: 'hsl(197, 23%, 53%)' },
                500: { value: 'hsl(198, 25%, 43%)' },
                600: { value: 'hsl(201, 25%, 36%)' },
                700: { value: 'hsl(201, 22%, 31%)' },
                800: { value: 'hsl(203, 19%, 27%)' },
                900: { value: 'hsl(206, 17%, 24%)' },
                950: { value: 'hsl(206, 21%, 15%)' },
              },
              iron: {
                50:  { value: '#f7f8f8' },
                100: { value: '#efefef' },
                200: { value: '#d5d6d7' },
                300: { value: '#bbbdbe' },
              },
              dodgerBlue: {
                50:  { value: 'hsl(203, 100%, 97%)' },
                100: { value: 'hsl(204, 100%, 94%)' },
                200: { value: 'hsl(200, 100%, 86%)' },
                300: { value: 'hsl(197, 100%, 73%)' },
                400: { value: 'hsl(197, 100%, 59%)' },
                500: { value: 'hsl(198, 100%, 52%)' },
                600: { value: 'hsl(201, 100%, 42%)' },
                700: { value: 'hsl(202, 100%, 34%)' },
                800: { value: 'hsl(201, 100%, 28%)' },
                900: { value: 'hsl(202, 90%, 24%)'  },
                950: { value: 'hsl(204, 90%, 16%)'  },
              },

            },
          },
          semanticTokens: {
            colors: {
              dark: { value: '{colors.ebony.950}' },
              white: { value: '{colors.iron.100}' },
              main: { 
                value: { base: '{colors.dodgerBlue.500}', _dark: '{colors.dodgerBlue.800}' },
              },
            },
            fonts: {
              title: { value: '{fonts.chli}' },
              p: { value: '{fonts.nunito}' },
            }
          }
      },
    },

    // The output directory for your css system
    outdir: "styled-system",
    
})