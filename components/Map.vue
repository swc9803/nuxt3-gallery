<template>
  <div ref="contentsRef" class="map">
    <!-- 이미지 포커스 시 스케일, alpha++, 글자 보이게 -->
    <div v-for="map in maps" :key="map.id">
      map-card
    </div>
  </div>
</template>

<script setup>
const maps = [
  {
    src: ''
  },
  {
    src: ''
  },
  {
    src: ''
  },
  {
    src: ''
  },
  {
    src: ''
  },
  {
    src: ''
  }
]

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
.map {
    position: sticky;
    top: 100px;
    width: 20%;
    height: 100%;
    background: blue;
    display: flex;
    flex-direction: column;
    transition: transform 1s;
    gap: 12px;
}
</style>
