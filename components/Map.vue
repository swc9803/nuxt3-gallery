<template>
  <div class="map">
    <div class="map-flex">
      <!-- 이미지 포커스 시 스케일, alpha++, 글자 보이게 -->
      <div v-for="map in maps" :key="map.id">
        map-card
      </div>
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
  }
]

</script>

<style lang="scss" scoped>
.map {
    position: sticky;
    top: 0;
    width: 20%;
    height: 100%;
    background: blue;
}
</style>
