<template>
  <div class="main">
    <div class="box" />
  </div>
</template>

<style lang="scss" scoped>
.main {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 2.5% 2.5%;
    width: 100%;
    max-width: 1920px;
    height: 100vh;
    .box {
        width: 100%;
        height: 100%;
        background: red;
        border-radius: 2em;
    }
}
</style>
