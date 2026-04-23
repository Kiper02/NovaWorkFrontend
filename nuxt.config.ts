import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxt/fonts',
    '@peterbud/nuxt-query',
    'shadcn-nuxt'
  ],
  nitro: {
    devProxy: {
      '/api': {
        target: 'http://localhost:5000/api',
        changeOrigin: true,
      },
    },
  },
  shadcn: {
    prefix: 'Ui',
    componentDir: '@/components/ui'
  },
  devServer: {
    port: 3001,
  },
  css: [
    './app/assets/css/tailwind.css',
    // './app/assets/css/scroll.css',
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  nuxtQuery: {
    autoImports: ['useQuery', 'useMutation'],
    devtools: true,
    queryClientOptions: {
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          refetchInterval: 5000,
        },
      },
    },
  },
  runtimeConfig: {
    nodeEnv: ""
  },
})