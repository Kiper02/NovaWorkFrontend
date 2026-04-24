import type {FindMeResponseDto} from "~/client";

interface  IAuthStore {
    user: FindMeResponseDto | null
}


const defaultValue: IAuthStore = {
    user: null,
}

export const useAuthStore = defineStore('auth', {
    state: () => defaultValue,
    getters: {
        isAuth: state => !!state.user
    },
    actions: {
        clear() {
            this.user = defaultValue.user;
        },
        set(input: IAuthStore) {
            this.user = input.user;
        }
    }
})

export const useIsLoadingStore = defineStore('isLoading', {
    state: () => ({isLoading: true}),
    actions: {
        set(data: boolean) {
            this.$patch({isLoading: data})
        }
    }
})