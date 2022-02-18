<template>
  <section id="trailer" style="background-color: blue;">

    <Swiper ref="trailerSwiper" interval="5000">
      <Slide>
        1
      </Slide>
      <Slide>
        2
      </Slide>
      <Slide>
        3
      </Slide>
    </Swiper>

    <Button class="slider-buttons prev" @click="prev">
      Prev
    </Button>
    <Button class="slider-buttons next" @click="next">
      next
    </Button>
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
      this.$refs.trailerSwiper.prevSlide()
      console.log(123)
    },
    next() {
      this.$refs.trailerSwiper.nextSlide()
      console.log(123)
    }
  }
}
</script>