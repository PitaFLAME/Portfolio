import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    'bg-slate-100', 'bg-slate-200', 'bg-slate-700', 'bg-slate-800', 'bg-slate-900',
    'bg-zinc-100', 'bg-zinc-200', 'bg-zinc-700', 'bg-zinc-800', 'bg-zinc-900',
    'bg-teal-100', 'bg-teal-200', 'bg-teal-700', 'bg-teal-800', 'bg-teal-900',
    'bg-blue-100', 'bg-blue-200', 'bg-blue-700', 'bg-blue-800', 'bg-blue-900',

    'fill-slate-100', 'fill-slate-200', 'fill-slate-700', 'fill-slate-800', 'fill-slate-900',
    'fill-zinc-100', 'fill-zinc-200', 'fill-zinc-700', 'fill-zinc-800', 'fill-zinc-900',
    'fill-teal-100', 'fill-teal-200', 'fill-teal-700', 'fill-teal-800', 'fill-teal-900',
    'fill-blue-100', 'fill-blue-200', 'fill-blue-700', 'fill-blue-800', 'fill-blue-900',

    'border-slate-100', 'border-slate-200', 'border-slate-700', 'border-slate-800', 'border-slate-900',
    'border-zinc-100', 'border-zinc-200', 'border-zinc-700', 'border-zinc-800', 'border-zinc-900',
    'border-teal-100', 'border-teal-200', 'border-teal-700', 'border-teal-800', 'border-teal-900',
    'border-blue-100', 'border-blue-200', 'border-blue-700', 'border-blue-800', 'border-blue-900',
  
    'text-slate-100', 'text-slate-200', 'text-slate-700', 'text-slate-800', 'text-slate-900',
    'text-zinc-100', 'text-zinc-200', 'text-zinc-700', 'text-zinc-800', 'text-zinc-900',
    'text-teal-100', 'text-teal-200', 'text-teal-700', 'text-teal-800', 'text-teal-900',
    'text-blue-100', 'text-blue-200', 'text-blue-700', 'text-blue-800', 'text-blue-900',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        allison: ["Allison", "cursive"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
