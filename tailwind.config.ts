import type { Config } from "tailwindcss";

// Design tokens live in CSS variables (globals.css) so light/dark share one Tailwind vocabulary.
const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" },
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        raised: "rgb(var(--raised) / <alpha-value>)",
        line: "rgb(var(--line) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        brand: "rgb(var(--brand) / <alpha-value>)",
        "brand-fg": "rgb(var(--brand-fg) / <alpha-value>)",
        brass: "rgb(var(--brass) / <alpha-value>)",
        "brand-dark": "rgb(var(--brand-dark) / <alpha-value>)",
        navy: "rgb(var(--navy) / <alpha-value>)",
        "navy-deep": "rgb(var(--navy-deep) / <alpha-value>)",
        shcyellow: "rgb(var(--yellow) / <alpha-value>)",
        shcred: "rgb(var(--red) / <alpha-value>)",
        ok: "rgb(var(--ok) / <alpha-value>)",
        warn: "rgb(var(--warn) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "Inter", "Segoe UI", "system-ui", "-apple-system", "sans-serif"],
        sans: ["Inter", "ui-sans-serif", "Segoe UI", "system-ui", "-apple-system", "Roboto", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: { card: "14px", ctl: "10px" },
      boxShadow: {
        card: "0 1px 2px rgb(var(--shadow) / 0.05), 0 10px 28px -14px rgb(var(--shadow) / 0.20)",
        lift: "0 2px 4px rgb(var(--shadow) / 0.06), 0 24px 44px -18px rgb(var(--shadow) / 0.38)",
        ring: "0 0 0 3px rgb(var(--brand) / 0.35)",
      },
      transitionTimingFunction: { luxe: "cubic-bezier(0.22, 1, 0.36, 1)" },
      transitionDuration: { fast: "140ms", base: "240ms", slow: "420ms" },
      keyframes: { shimmer: { "100%": { transform: "translateX(100%)" } } },
    },
  },
  plugins: [],
};
export default config;
