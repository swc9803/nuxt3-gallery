<template>
  <header>
    <nav>
      <ul>
        <li>
          <NuxtLink to="/">
            Home Page
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="about">
            About Page
          </NuxtLink>
        </li>
      </ul>
      <div @click="toggleDarkMode">
        {{ onDarkMode ? 'dark-mode' : 'light-mode' }} <!-- 해, 달 -->
      </div>
    </nav>
  </header>
</template>

<script setup>

const emit = defineEmits(['change-theme'])

const onDarkMode = ref(true)
const toggleDarkMode = () => {
  emit('change-theme')
  onDarkMode.value = !onDarkMode.value
  // rotate+scale-, rotate-scale+
}

</script>

<style lang="scss" scoped>
header {
    position: fixed;
    width: 100%;
    height: 64px;
    line-height: 64px;
    background: transparent;
    padding: 0 60px;
    font-size: 1.3em;
    z-index: 9;
    backdrop-filter: blur(8px);
    @media screen and (max-width: 1024px) {
        & {
            padding: 0 48px;
        }
    }
    @media screen and (max-width: 768px) {
        & {
            padding: 0 36px;
        }
    }
    @media screen and (max-width: 480px) {
        & {
            padding: 0 24px;
        }
    }
    nav {
        display: flex;
        justify-content: space-between;
        ul {
            display: flex;
            list-style: none;
            li {
                a {
                    text-decoration-line: none;
                }
            }
        }
    }
}
</style>
