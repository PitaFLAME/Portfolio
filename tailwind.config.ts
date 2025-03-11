import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [

    'bg-white',
    'bg-slate-100', 'bg-slate-200', 'bg-slate-300', 'bg-slate-400', 'bg-slate-500', 'bg-slate-500', 'bg-slate-600', 'bg-slate-700', 'bg-slate-800', 'bg-slate-900', 'bg-slate-950',
    'bg-zinc-100', 'bg-zinc-200', 'bg-zinc-300', 'bg-zinc-400', 'bg-zinc-500', 'bg-zinc-500', 'bg-zinc-600', 'bg-zinc-700', 'bg-zinc-800', 'bg-zinc-900', 'bg-zinc-900',
    'bg-teal-100', 'bg-teal-200', 'bg-teal-300', 'bg-teal-400', 'bg-teal-500', 'bg-teal-500', 'bg-teal-600', 'bg-teal-700', 'bg-teal-800', 'bg-teal-900', 'bg-teal-900',
    'bg-blue-100', 'bg-blue-200', 'bg-blue-300', 'bg-blue-400', 'bg-blue-500', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-800', 'bg-blue-900', 'bg-blue-900',

    'fill-white',
    'fill-slate-100', 'fill-slate-200', 'fill-slate-300', 'fill-slate-400', 'fill-slate-500', 'fill-slate-500', 'fill-slate-600', 'fill-slate-700', 'fill-slate-800', 'fill-slate-900',
    'fill-zinc-100', 'fill-zinc-200', 'fill-zinc-300', 'fill-zinc-400', 'fill-zinc-500', 'fill-zinc-500', 'fill-zinc-600', 'fill-zinc-700', 'fill-zinc-800', 'fill-zinc-900',
    'fill-teal-100', 'fill-teal-200', 'fill-teal-300', 'fill-teal-400', 'fill-teal-500', 'fill-teal-500', 'fill-teal-600', 'fill-teal-700', 'fill-teal-800', 'fill-teal-900',
    'fill-blue-100', 'fill-blue-200', 'fill-blue-300', 'fill-blue-400', 'fill-blue-500', 'fill-blue-500', 'fill-blue-600', 'fill-blue-700', 'fill-blue-800', 'fill-blue-900',

    'border-white',
    'border-slate-100', 'border-slate-200', 'border-slate-300', 'border-slate-400', 'border-slate-500', 'border-slate-500', 'border-slate-600', 'border-slate-700', 'border-slate-800', 'border-slate-900',
    'border-zinc-100', 'border-zinc-200', 'border-zinc-300', 'border-zinc-400', 'border-zinc-500', 'border-zinc-500', 'border-zinc-600', 'border-zinc-700', 'border-zinc-800', 'border-zinc-900',
    'border-teal-100', 'border-teal-200', 'border-teal-300', 'border-teal-400', 'border-teal-500', 'border-teal-500', 'border-teal-600', 'border-teal-700', 'border-teal-800', 'border-teal-900',
    'border-blue-100', 'border-blue-200', 'border-blue-300', 'border-blue-400', 'border-blue-500', 'border-blue-500', 'border-blue-600', 'border-blue-700', 'border-blue-800', 'border-blue-900',
  
    'text-white',
    'text-slate-100', 'text-slate-200', 'text-slate-300', 'text-slate-400', 'text-slate-500', 'text-slate-500', 'text-slate-600', 'text-slate-700', 'text-slate-800', 'text-slate-900',
    'text-zinc-100', 'text-zinc-200', 'text-zinc-300', 'text-zinc-400', 'text-zinc-500', 'text-zinc-500', 'text-zinc-600', 'text-zinc-700', 'text-zinc-800', 'text-zinc-900',
    'text-teal-100', 'text-teal-200', 'text-teal-300', 'text-teal-400', 'text-teal-500', 'text-teal-500', 'text-teal-600', 'text-teal-700', 'text-teal-800', 'text-teal-900',
    'text-blue-100', 'text-blue-200', 'text-blue-300', 'text-blue-400', 'text-blue-500', 'text-blue-500', 'text-blue-600', 'text-blue-700', 'text-blue-800', 'text-blue-900',

    'from-white',
   'from-slate-100', 'from-slate-200', 'from-slate-300', 'from-slate-400', 'from-slate-500', 'from-slate-500', 'from-slate-600', 'from-slate-700', 'from-slate-800', 'from-slate-900',
    'from-zinc-100', 'from-zinc-200', 'from-zinc-300', 'from-zinc-400', 'from-zinc-500', 'from-zinc-500', 'from-zinc-600', 'from-zinc-700', 'from-zinc-800', 'from-zinc-900',
    'from-teal-100', 'from-teal-200', 'from-teal-300', 'from-teal-400', 'from-teal-500', 'from-teal-500', 'from-teal-600', 'from-teal-700', 'from-teal-800', 'from-teal-900',
    'from-blue-100', 'from-blue-200', 'from-blue-300', 'from-blue-400', 'from-blue-500', 'from-blue-500', 'from-blue-600', 'from-blue-700', 'from-blue-800', 'from-blue-900',

    'to-white',
    'to-slate-100', 'to-slate-200', 'to-slate-300', 'to-slate-400', 'to-slate-500', 'to-slate-500', 'to-slate-600', 'to-slate-700', 'to-slate-800', 'to-slate-900',
    'to-zinc-100', 'to-zinc-200', 'to-zinc-300', 'to-zinc-400', 'to-zinc-500', 'to-zinc-500', 'to-zinc-600', 'to-zinc-700', 'to-zinc-800', 'to-zinc-900',
    'to-teal-100', 'to-teal-200', 'to-teal-300', 'to-teal-400', 'to-teal-500', 'to-teal-500', 'to-teal-600', 'to-teal-700', 'to-teal-800', 'to-teal-900',
    'to-blue-100', 'to-blue-200', 'to-blue-300', 'to-blue-400', 'to-blue-500', 'to-blue-500', 'to-blue-600', 'to-blue-700', 'to-blue-800', 'to-blue-900',

  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)', "sans-serif"],
        allison: ['var(--font-allison)', 'cursive'],
        rubik: ['var(--font-rubik)', 'sans-serif'],
        expletus_sans: ['var(--font-expletus-sans)', 'sans-serif'],
        goudy: ['var(--font-goudy)', 'sans-serif']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        '48': 'repeat(48, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '48': 'repeat(48, minmax(0, 1fr))',
      }
    },
  },
  plugins: [
    require("@xpd/tailwind-3dtransforms"),
    function ({ addUtilities }: any) {
      addUtilities(
        {
          '.backface-visible': {
            'backfaceVisibility': 'visible',
            '-webkit-backface-visibility': 'visible'
          },
          '.backface-hidden': {
            'backfaceVisibility': 'hidden',
            '-webkit-backface-visibility': 'hidden'
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
};
export default config;
