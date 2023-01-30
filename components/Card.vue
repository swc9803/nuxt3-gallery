<template>
  <div ref="contentsRef" class="card">
    <div class="box">
      card
    </div>
    <div class="box">
      card
    </div>
    <div class="box">
      card
    </div>
    <div class="box">
      card
    </div>
  </div>
</template>

<script setup>
const contentsRef = ref()
let originPos, newPos
let skewAni

const skewContent = () => {
  newPos = window.pageYOffset
  const speed = (newPos - originPos) * 0.5

  contentsRef.value.style.transform = `skewY(${speed}deg)`
  originPos = newPos
  skewAni = requestAnimationFrame(skewContent)
}

onMounted(() => {
  originPos = window.pageYOffset
  skewContent()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(skewAni)
})

</script>

<style lang="scss" scoped>
.card {
    width: 100%;
    display: flex;
    flex-direction: column;
    transition: transform 1s;
    gap: 60px;
    .box {
        width: 100%;
        height: 400px;
        background: red;
        border-radius: 2em;
    }
}
</style>
