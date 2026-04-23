export const useSidebarStore = defineStore('sidebar', {
    state: () => ({isOpen: true}),
    actions: {
        set(data: boolean) {
            this.$patch({isOpen: data})
        }
    }
})