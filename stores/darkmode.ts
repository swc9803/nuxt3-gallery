export const useDarkModeStore = defineStore('darkmode', {
  state: () => ({
    onDarkMode: false
  }),
  actions: {
    changeTheme () {
      this.onDarkMode = !this.onDarkMode
      localStorage.setItem('onDarkMode', this.onDarkMode)
    }
  }
})
