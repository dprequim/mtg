<template>
  <nav id="mainNav" class="navbar navbar-expand-lg  position-relative">
    <w-flex>
      <a class="navbar-brand" href="#">
        <img width="70" class="d-block mr-3" src="@/assets/images/branding.png" alt="branding">
      </a>
      <w-flex 
        v-if="$waveui.breakpoint.xl || $waveui.breakpoint.lg || $waveui.breakpoint.md"
        wrap
        class="collapse navbar-collapse justify-end"
      >
        <!-- <w-flex class="align-center md6 sm12 xs12 px5 wrapper white-text neon2 font-primary"> -->
          <div id="menu_item" @click="$router.push({ name: 'home' })" column class="px5 navbar-nav mr-auto" v-if="['home'].includes($route.name)">
            <h3>Home</h3>
          </div>
          <div id="menu_item" @click="scroll('gameplay')" column class="px5 navbar-nav mr-auto" v-if="['home'].includes($route.name)">
            <h3>Gameplay</h3>
          </div>
          <div id="menu_item" @click="scroll('trailer')" column class="px5 navbar-nav mr-auto" v-if="['home'].includes($route.name)">
            <h3>Trailer</h3>
          </div>
          <div id="menu_item" @click="scroll('victors-nft')" column class="px5 navbar-nav mr-auto" v-if="['home'].includes($route.name)">
            <h3>Victors NFT</h3>
          </div>
          <div id="menu_item" @click="scroll('about')" column class="px5 navbar-nav mr-auto" v-if="!['home'].includes($route.name)">
            <h3>MTG Token</h3>
          </div>
          <div id="menu_item" @click="scroll('meta-ginto')" column class="px5 navbar-nav mr-auto" v-if="!['dashboard'].includes($route.name)">
            <h3>Meta Ginto</h3>
          </div>
          <div id="menu_item" @click="scroll('team')" column class="px5 navbar-nav mr-auto" v-if="!['dashboard'].includes($route.name)">
            <h3>Team</h3>
          </div>
          <div id="menu_item" @click="scroll('roadmap')" column class="px5 navbar-nav mr-auto" v-if="!['dashboard'].includes($route.name)">
            <h3>Roadmap</h3>
          </div>
          <div id="menu_item" column class="px5 navbar-nav mr-auto">
            <w-badge bg-color="error" badge-class="px2">
              <template #badge>Upcoming!</template>
              <h3>Marketplace</h3>
            </w-badge>
          </div>
        <!-- </w-flex> -->
      </w-flex>

      <!-- mobile -->
      <w-flex v-if="toggled" column class="white-text font-primary pb2">
        <div @click="scroll('about'), toggleNav()" column class="py2 navbar-nav mr-auto" v-if="['home'].includes($route.name)">
          <h3>Home</h3>
        </div>
        <div @click="scroll('tokenomics'), toggleNav()" column class="py2 navbar-nav mr-auto" v-if="['home'].includes($route.name)">
          <h3>Gameplay</h3>
        </div>
        <div @click="scroll('roadmap'), toggleNav()" column class="py2 navbar-nav mr-auto" v-if="['home'].includes($route.name)">
          <h3>Trailer</h3>
        </div>
        <div id="menu_item" @click="scroll('community'), toggleNav()" column class="py2 navbar-nav mr-auto" v-if="['home'].includes($route.name)">
          <h3>Victors NFT</h3>
        </div>
        <div @click="$router.push({ name: 'home' }), toggleNav()" column class="py2 navbar-nav mr-auto" v-if="!['home'].includes($route.name)">
          <h3>MTG Token</h3>
        </div>
        <div @click="$router.push({ name: 'dashboard' }), toggleNav()" column class="py2 navbar-nav mr-auto" v-if="!['dashboard'].includes($route.name)">
          <h3>Meta Ginto</h3>
        </div>
        <div @click="$router.push({ name: 'presale' }), toggleNav()" column class="py2 navbar-nav mr-auto" v-if="!['presale'].includes($route.name)">
          <h3>Team</h3>
        </div>
        <div @click="$router.push({ name: 'presale' }), toggleNav()" column class="py2 navbar-nav mr-auto" v-if="!['presale'].includes($route.name)">
          <h3>Roadmap</h3>
        </div>
        <div column class="py2 navbar-nav mr-auto">
          <w-badge bg-color="error" badge-class="px2">
            <template #badge>Upcoming!</template>
            <h3>Livestreams</h3>
          </w-badge>
        </div>
      </w-flex>
    </w-flex>
  </nav>
</template>
<script>
  import Globals from '@/mixins/globals.js'
  export default {
    mixins: [Globals],
    methods: {
      handleScroll (event) {
        const element = document.getElementById("mainNav");
        var scrollingUp

        if (event.wheelDelta) {
          scrollingUp = event.wheelDelta > 0
        }
        scrollingUp = event.deltaY < 0

        if (scrollingUp) {
           element.classList.add("nav-up");
           element.classList.remove("nav-down");
         } else {
           element.classList.add("nav-down");
           element.classList.remove("nav-up");
         }
      }
    },
    created() {
      window.addEventListener('wheel', this.handleScroll)
    },
    unmounted () {
      window.removeEventListener('wheel', this.handleScroll);
    },
  }
</script>