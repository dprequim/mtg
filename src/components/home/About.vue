<template>
  <section id="about">
    
    <w-flex align-center justify-center class="wrapper" style="height: 100vh;">
      <h1>ABOUT</h1>
    </w-flex>
  </section>
</template>
<script>
import { Swiper, Slide } from 'vue-swiper-component'
export default {
  components: {
      Swiper,
      Slide
  },
  methods: {
    prev() {
      this.$refs._swiper.prevSlide()
      console.log(123)
    },
    next() {
      this.$refs._swiper.nextSlide()
      console.log(123)
    }
  }
}
</script>