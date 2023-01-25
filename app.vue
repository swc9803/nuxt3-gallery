<template>
  <div>
    <Head>
      <Title>SungWoo's Gallery</Title>
      <Meta name="description" content="SungWoo's Gallery" />
    </Head>
    <NuxtLayout name="default">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
    //   transform: rotate3d(1, 1, 1, 15deg);
}
</style>
