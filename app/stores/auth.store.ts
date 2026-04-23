import type {FindMeResponseDto} from "~/client";

interface  IAuthStore {
    user: FindMeResponseDto | null
    status: boolean;
}


const defaultValue: IAuthStore = {
    user: null,
    status: false
}

export const useAuthStore = defineStore('auth', {
    state: () => defaultValue,
    getters: {
        isAuth: state => state.status
    },
    actions: {
        clear() {
            this.user = defaultValue.user;
            this.status = defaultValue.status;
        },
        set(input: IAuthStore) {
            this.user = input.user;
            this.status = input.status;
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