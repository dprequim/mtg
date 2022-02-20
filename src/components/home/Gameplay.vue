<template>
  <section id="gameplay">
    <Swiper ref="_swiper" :interval="5000" :autoPlay="false">
      <Slide style="height: 100vh;">
        <w-flex align-center justify-center class="wrapper" style="height: 100%;">
          <w-flex class="py10" style="background-image: linear-gradient(270deg, #23478199, transparent);">
            <w-flex align-center justify-center>
              <img class="md6 d-block" src="@/assets/images/SparkmonBear.png"/>
            </w-flex>
            <w-flex column align-center justify-center class="md6">
              <div><h1>Classic and RANK PVP 2</h1></div>
              <div>PvP</div>
              <div>
                <p>
                  Using only the middle lane, a player will have to destroy as many towers as
                  possible within a given time limit. This is for everyone who wants to challenge
                  their character’s skill and their strategy to win.
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
              <img class="md6 d-block" src="@/assets/images/defend.png"/>
            </w-flex>
            <w-flex column align-center justify-center class="md6">
              <div><h1>Defend to Earn</h1></div>
              <div>PvE</div>
              <div>
                <p>
                  Instead of boring Tower Defense game mode, which player will just build ang upgrade towers. In this mode player will control their victors to defend its base, reward will depend on how many waves will be cleared.
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
              <img class="md6 d-block" src="@/assets/images/DUO.png"/>
            </w-flex>
            <w-flex column align-center justify-center class="md6">
              <div><h1>Survival</h1></div>
              <div>Solo/Duo</div>
              <div>
                <p>
                  If you're not good in team fighting and want to solo or just a duo, this mode is just for you. "Last man standing wins".
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