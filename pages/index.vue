<template>
  <div id="home">
    <!-- <p>다크모드</p> -->
    <Main />
    <div class="card-flex">
      <Card />
      <Map />
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
#home {
    padding: 0 60px;
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
    .card-flex {
        display: flex;
        justify-content: space-between;
        gap: 96px;
        @media screen and (max-width: 1440px) {
            & {
                gap: 64px;
            }
        }
        @media screen and (max-width: 1024px) {
            & {
                gap: 32px;
            }
        }
        @media screen and (max-width: 768px) {
            & {
                gap: 24px;
            }
        }
        @media screen and (max-width: 480px) {
            & {
                gap: 16px;
            }
        }
    }
}
</style>
