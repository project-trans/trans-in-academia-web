<template>
  <div class="nav">
    <div id="logo">
      <img src="/TIA_LOGO_L_Oneline.svg" alt="Logo" />
    </div>
    <Transition id="logo_burger">
      <img v-if="burgerStatus" src="/logo_clip.svg" alt="Logo Clip" />
    </Transition>
    <button id="burger" @click="unfold">
      <img
        v-if="burgerStatus"
        :src="`${burgerStatus ? '/burger_close.svg' : '/burger.svg'}`"
        alt="Burger Menu"
      />
    </button>

    <!-- Mobile Menu -->
    <Transition>
      <div id="burger-items" v-show="burgerStatus">
        <ul>
          <li>
            <a href="#"><span>Events</span></a>
          </li>
          <li>
            <a href="https://lib.transinacademia.org/"><span>Library</span></a>
          </li>
          <li>
            <a href="https://uniguide.transacademic.org/"
              ><span>UniGuide</span></a
            >
          </li>
        </ul>
      </div>
    </Transition>

    <Transition>
      <div id="mask" v-show="burgerStatus"></div>
    </Transition>

    <!-- Desktop Menu -->
    <div id="normal">
      <li>
        <a href="#" class="current"
          ><img src="/LOGO Graph.svg" alt="Logo Graph" /><span
            >Trans in Academia!</span
          ></a
        >
      </li>
      <li>
        <a href="https://lib.transinacademia.org/" class="notcurrent"
          ><span>Library</span></a
        >
      </li>
      <li>
        <a href="https://uniguide.transacademic.org/" class="notcurrent"
          ><span>UniGuide</span></a
        >
      </li>
      <!-- <li class="placeholder"></li> -->
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
const burgerStatus = ref(false);
const unfold = () => {
  burgerStatus.value = !burgerStatus.value;
};
export default {
  name: 'NavigationBar',
  setup() {
    return { burgerStatus };
  },
  methods: {
    unfold
  }
};
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

// // mobile
@media screen and (max-width: 768px) {
  .nav {
    div#normal {
      max-width: 100% !important;
    }
  }
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

    li.placeholder {
    }

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

@media (prefers-color-scheme: dark) {
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
</style>
