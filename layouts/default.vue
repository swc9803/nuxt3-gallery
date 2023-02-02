<template>
  <div
    class="layout"
    :class="{ 'dark-mode': onDarkMode }"
  >
    <Header :onDarkMode="onDarkMode" @change-theme="store.changeTheme" />
    <main class="page">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { useDarkModeStore } from '@/stores/darkmode'

const store = useDarkModeStore()
const onDarkMode = computed(() => store.onDarkMode)

onMounted(() => {
  const storedDarkMode = localStorage.getItem('onDarkMode')
  if (storedDarkMode !== null) {
    store.onDarkMode = storedDarkMode === 'true'
  } else {
    localStorage.setItem('onDarkMode', store.onDarkMode)
  }
})

</script>

<style lang="scss" scoped>
.layout {
    transition: 0.5s;
    &.dark-mode {
        background: black;
        color: white;
    }
}
</style>
