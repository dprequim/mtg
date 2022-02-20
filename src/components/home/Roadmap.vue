<template>
  <section id="roadmap">
    <!-- <Swiper ref="_swiper" :interval="5000" :autoPlay="false">
      <Slide style="height: 100vh;">
        <w-flex align-center justify-center class="wrapper" style="height: 100%;">
          <w-flex class="py10" style="background-image: linear-gradient(270deg, #23478199, transparent);">
            <w-flex align-center justify-center>
              <img class="md6 d-block" src="@/assets/images/meta_Arena.png"/>
            </w-flex>
            <w-flex column align-center justify-center class="md6">
              <div><h1>adsasdsa</h1></div>
              <div>4 VS 4</div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus, augue ut sodales sodales, 
                  ex ligula iaculis lacus, vitae vulputate nisl elit sit amet leo. Maecenas erat eros, mattis vel 
                  tortor a, maximus fringilla nunc. Mauris ligula leo, convallis cursus fringilla in, feugiat ut augue. 
                  Nunc fermentum et ex sed auctor. Duis eget posuere enim, sed ornare urna. Nulla ornare nulla nulla, 
                  ac sollicitudin metus porta sit amet. Cras in condimentum elit, eu dapibus elit.
                </p>
              </div>
            </w-flex>
          </w-flex>
        </w-flex>
      </Slide>
      <Slide>
        <w-flex align-center justify-center class="wrapper" style="height: 100%;">
          <w-flex class="py10" style="background-image: linear-gradient(270deg, #23478199, transparent);">
            <w-flex align-center justify-center>
              <img class="md6 d-block" src="@/assets/images/meta_Arena.png"/>
            </w-flex>
            <w-flex column align-center justify-center class="md6">
              <div><h1>adsasdsa</h1></div>
              <div>4 VS 4</div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus, augue ut sodales sodales, 
                  ex ligula iaculis lacus, vitae vulputate nisl elit sit amet leo. Maecenas erat eros, mattis vel 
                  tortor a, maximus fringilla nunc. Mauris ligula leo, convallis cursus fringilla in, feugiat ut augue. 
                  Nunc fermentum et ex sed auctor. Duis eget posuere enim, sed ornare urna. Nulla ornare nulla nulla, 
                  ac sollicitudin metus porta sit amet. Cras in condimentum elit, eu dapibus elit.
                </p>
              </div>
            </w-flex>
          </w-flex>
        </w-flex>
      </Slide>
      <Slide>
        <w-flex align-center justify-center class="wrapper" style="height: 100%;">
          <w-flex class="py10" style="background-image: linear-gradient(270deg, #23478199, transparent);">
            <w-flex align-center justify-center>
              <img class="md6 d-block" src="@/assets/images/meta_Arena.png"/>
            </w-flex>
            <w-flex column align-center justify-center class="md6">
              <div><h1>adsasdsa</h1></div>
              <div>4 VS 4</div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus, augue ut sodales sodales, 
                  ex ligula iaculis lacus, vitae vulputate nisl elit sit amet leo. Maecenas erat eros, mattis vel 
                  tortor a, maximus fringilla nunc. Mauris ligula leo, convallis cursus fringilla in, feugiat ut augue. 
                  Nunc fermentum et ex sed auctor. Duis eget posuere enim, sed ornare urna. Nulla ornare nulla nulla, 
                  ac sollicitudin metus porta sit amet. Cras in condimentum elit, eu dapibus elit.
                </p>
              </div>
            </w-flex>
          </w-flex>
        </w-flex>
      </Slide>
    </Swiper>

    <Button class="slider-buttons prev" @click="prev">
      Prev
    </Button>
    <Button class="slider-buttons next" @click="next">
      next
    </Button> -->
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