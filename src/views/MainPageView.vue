<template>
  <div class="main">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <MainPage msg="Welcome to the Flower Store"/> 
  </div>
</template>

<script>

import MainPage from '@/components/MainPage.vue'

export default {
  name: 'MainPageView',
  components: {
    MainPage
  }
}
</script>
