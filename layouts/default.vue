<template>
  <div
    class="layout"
    :class="{ 'dark-mode': onDarkMode }"
  >
    <Header @change-theme="changeTheme" />
    <main class="page">
      <slot />
    </main>
  </div>
</template>

<script setup>
const onDarkMode = ref(true)
const changeTheme = () => {
  onDarkMode.value = !onDarkMode.value
}

onMounted(() => {
  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  onDarkMode.value = darkQuery.matches
})

</script>

<style lang="scss" scoped>
.dark-mode {
  background: black;
  color: white;
}
</style>
