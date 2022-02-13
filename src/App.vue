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
<script setup>
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

</script>
