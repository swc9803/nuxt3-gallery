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
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
    position: fixed;
    opacity: 0;
}
</style>
