import { defineConfig } from '@hey-api/openapi-ts';

export default defineConfig({
    input: 'http://localhost:5000/docs-json',
    output: 'app/client',
    plugins: [
        {
            name: '@hey-api/client-nuxt',
            baseUrl: '/api',
        },
        '@tanstack/vue-query',
    ],
});