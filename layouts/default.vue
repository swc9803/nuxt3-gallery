<template>
  <div
    class="layout"
    :class="{ 'dark-mode': onDarkMode }"
  >
    <Header :onDarkMode="onDarkMode" @change-theme="changeTheme" />
    <main class="page">
      <slot />
    </main>
  </div>
</template>

<script setup>
const onDarkMode = ref(false)
const changeTheme = () => {
  onDarkMode.value = !onDarkMode.value
  localStorage.setItem('onDarkMode', onDarkMode.value)
}

onMounted(() => {
  const savedDarkMode = localStorage.getItem('onDarkMode')
  if (savedDarkMode) {
    onDarkMode.value = savedDarkMode === 'true'
  }
})

</script>

<style lang="scss" scoped>
.dark-mode {
    background: black;
    color: white;
}
.layout {
    transition: 0.5s;
}
</style>
