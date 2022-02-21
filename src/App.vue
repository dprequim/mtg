<template>
  <!-- <w-app>
    <RouterView />
  </w-app> -->

  <w-app id="app">
    <Navbar/>
    <w-flex column grow>
      <aside v-if="false">Nav menu</aside>
      <!-- <main class="grow">Main content</main> -->
      <Header/>
      <Gameplay/>
      <Trailer/>
      <VictorsNft/>
      <About/>
      <MetaGinto/>
      <Team/>
      <Roadmap/>
    </w-flex>
    <footer>Footer</footer>
  </w-app>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/home/Header.vue'
import Gameplay from '@/components/home/Gameplay.vue'
import Trailer from '@/components/home/Trailer.vue'
import VictorsNft from '@/components/home/VictorsNft.vue'
import About from '@/components/home/About.vue'
import MetaGinto from '@/components/home/MetaGinto.vue'
import Team from '@/components/home/Team.vue'
import Roadmap from '@/components/home/Roadmap.vue'
import Navbar from '@/components/Navbar.vue'
import Globals from '@/mixins/globals.js'
export default {
  mixins: [Globals],
  components: {
    Header,
    Gameplay,
    Trailer,
    VictorsNft,
    About,
    MetaGinto,
    Team,
    Roadmap,
    Navbar,
  },
  data: () => ({
    sections: [
      'header',
      'gameplay',
      'trailer',
      'victors-nft',
      'about',
      'meta-ginto',
      'team',
      'roadmap',
    ],
    sectionIndex: 0,
    onCooldown: false,
  }),
  methods: {
    handleScroll (event) {
      // const element = document.getElementById("mainNav");
      var scrollingUp

      if (event.wheelDelta) {
        scrollingUp = event.wheelDelta > 0
      }
      scrollingUp = event.deltaY < 0

      if (scrollingUp) {
         if(this.sectionIndex > 0 && !this.onCooldown) {
           this.sectionIndex--
           this.setCooldown()
           this.scroll(this.sections[this.sectionIndex])
         }
       } else {
         if(this.sectionIndex < 7 && !this.onCooldown) {
           this.sectionIndex++
           this.setCooldown()
           this.scroll(this.sections[this.sectionIndex])
         }
       }
       // console.log(this.sections[this.sectionIndex])
    },
    setCooldown() {
      this.onCooldown = true
      setTimeout(() => {
        this.onCooldown = false
      }, 500)
    },
  },
  created() {
      window.addEventListener('wheel', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('wheel', this.handleScroll);
  },
}
</script>
