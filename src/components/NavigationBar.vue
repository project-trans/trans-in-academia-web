<template>
  <div class="nav">
    <div id="logo">
      <img src="/TIA_LOGO_L_Oneline.svg">
    </div>
    <Transition id="logo_burger">
      <img src='/logo_clip.svg'>
    </Transition>
    <button id="burger" @click="unfold">
      <img :src="`${burgerStatus ? '/burger_close.svg' : '/burger.svg'}`">
    </button>
    <Transition>
      <div id="burger-items" v-show="burgerStatus">
        <li><a href="#"><span>Events</span></a></li>
        <li><a href="https://lib.oau.edu.kg"><span>Library</span></a></li>
        <li><a href="https://uniguide.oau.edu.kg"><span>UniGuide</span></a></li>
      </div>
    </Transition>
    <Transition>
      <div id="mask" v-show="burgerStatus" />
    </Transition>
    <div id="normal">
      <li><a class="current" v-on:click="showRed()"><img src="/LOGO Graph.svg"><span>Trans in Academia!</span></a></li>
      <li><a href="https://lib.oau.edu.kg" class="notcurrent"><span>Library</span></a></li>
      <li><a href="https://uniguide.oau.edu.kg" class="notcurrent"><span>UniGuide</span></a></li>
      <!-- <li class="placeholder"></li> -->
      <ThemeButton />
      <RedirectMenu v-show="redirectMenuStatus"/>
    </div>
  </div>
</template>

<script>
import { Transition, ref } from 'vue'
import ThemeButton from "@/components/ThemeButton.vue";
import RedirectMenu from "@/components/RedirectMenu.vue";
const burgerStatus = ref(false)
const redirectMenuStatus = ref(false)
const unfold = () => {
  burgerStatus.value = !burgerStatus.value;
}
const showRed = () => {
  if (window.innerWidth > 460) {
      redirectMenuStatus.value = false;
      return;
  }
  redirectMenuStatus.value = !redirectMenuStatus.value;
}
export default {
  name: "NavigationBar",
  setup() {
    return { burgerStatus, redirectMenuStatus };
  },
  methods: {
    unfold,
    showRed
  },
  components: {RedirectMenu, Transition, ThemeButton }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#burger {
  display: none;
}

#logo_burger {
  display: none;
}

#logo img {
  height: max-content;
  display: none;

  // width: auto;
}

.nav {
  display: flex;
  align-items: center;
  background-color: white;
  opacity: 0.8;

  div#normal {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 22rem;
    justify-content: space-between;
    margin-left: 2rem;
    margin-right: 2rem;

    li.placeholder {}

    li {
      // margin: auto 3rem;
      list-style: none;

      a {
        display: flex;
        justify-content: center;
        text-decoration: none;
        color: gray;

        // height: 3rem;
        // // display: block;
        span {
          text-wrap: nowrap !important;
          height: fit-content;
          margin: auto;
          // margin: 1rem;
          // height: 1rem;
        }
      }

      a img {
        height: 2rem;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-right: 5px;
      }

      a.current {
        color: black;
        font-family: Sarasa-Gothic-SemiBold;
      }

    }
  }
}

[data-theme="dark"] {
    .nav {
        background-color: #181825;
    }

    div#normal {
        a {
            color: #babbf1 !important;
        }

        a.current {
            color: white !important;
        }

        a img {
            filter: drop-shadow(0px 0px 5px #c6d0f5);
        }
    }
}

@media screen and (max-width: 460px) {
    .notcurrent {
        display: none !important;
    }
}
</style>
