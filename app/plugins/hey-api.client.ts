import { client } from '~/client/client.gen';

export default defineNuxtPlugin(() => {
    client.setConfig({
        baseURL: 'http://localhost:5000',
        credentials: 'include',
    });
});