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
    width: 100%;
    max-width: 1920px;
    height: 100vh; // 이미지 넣고 지우기
    .box {
        width: 100%;
        height: 100%;
        background: rgb(76, 76, 76);
        border-radius: 2em;
    }
}
</style>
