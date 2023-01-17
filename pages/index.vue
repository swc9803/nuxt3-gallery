<template>
  <div id="home">
    home
    {{ count }}
    <button @click="plusCount">
      count++
    </button>
  </div>
</template>

<script setup>
const count = ref(0)

const plusCount = () => {
  count.value++
}
</script>
