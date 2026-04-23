/** @type {import('tailwindcss').Config} */
export default {
    content: ["./app/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                // Основной фон
                background: 'var(--background)',
                // Фон карточек/панелей
                card: 'var(--card)',
                // Поверхность при hover
                surfaceHover: '#242428',
                // Основной текст
                foreground: 'var(--foreground)',
                // Второстепенный текст
                muted: 'var(--muted)',
                // Акцентный цвет
                primary: 'var(--primary)',
                primaryHover: 'var(--primary-hover)',
                border: '#29292D',
            },
            maxWidth: {
                container: '1080px',
            }
        },
    },
    plugins: [],
}