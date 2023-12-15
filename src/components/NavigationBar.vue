<template>
  <div class="nav">
    <div id="logo">
      <img src="/LOGO.png">
    </div>
    <div id="logo_burger">
      <img src="/LOGO_clip.png">
    </div>
    <button id="burger" @click="unfold">
      <img src="/burger.svg">
    </button>
    <Transition>
      <div id="burger-items" v-show="burgerStatus">
        <li><a href="#"><span>Events</span></a></li>
        <li><a href="https://lib.oau.edu.kg"><span>Librar</span>y</a></li>
        <li><a href="https://uniguide.oau.edu.kg"><span>UniGui</span>de</a></li>
      </div>
    </Transition>
    <Transition>
      <div id="mask" v-show="burgerStatus" />
    </Transition>
    <div id="normal">
      <li><a href="#" class="current"><span>Events</span></a></li>
      <li><a href="https://lib.oau.edu.kg" class="notcurrent"><span>Librar</span>y</a></li>
      <li><a href="https://uniguide.oau.edu.kg" class="notcurrent"><span>UniGui</span>de</a></li>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
const burgerStatus = ref(false)
const unfold = () => {
  burgerStatus.value = !burgerStatus.value;
}
export default {
  name: "NavigationBar",
  setup() {
    return { burgerStatus }
  },
  methods: {
    unfold
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// middle
@media screen and (min-width: 768px) {
  .nav {
    position: fixed;
    top: 0;
    height: 100vh;
    min-width: calc(min(20rem, 20%));
    list-style-type: none;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    margin: 0;
    padding: 0;
    overflow: hidden;
    z-index: 10000;
    background-color: transparent;
  }

  #logo_burger {
    display: none;
  }

  #burger {
    display: none;
  }
}

// big screens
@media screen and (min-width: 1279px) {
  div .content events {
    column-count: 3;
  }
}


// mobile
@media screen and (max-width: 768px) {
  #app {
    flex-direction: column !important;
  }

  #mask {
    background-color: rgba(0, 0, 0, 0.425);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
  }

  li {
    list-style: none;
    margin: 0 !important;
  }

  .nav {
    position: block;
    height: 8rem;
    z-index: 10;
  }

  #logo {
    display: none;
  }

  #logo_burger {
    position: fixed;
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    background-color: white;
    left: 2.5rem;
    top: 3rem;
    margin: 0 !important;
    box-shadow: 2px 5px 5px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 80%;
      width: auto;
    }

  }

  #burger {
    position: fixed;
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    background-color: white;
    right: 2.5rem;
    top: 3rem;
    box-shadow: 2px 5px 5px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 60%;
    }
  }

  #burger-items {
    padding: 1rem 0;
    width: calc(100% - 5rem);
    position: fixed;
    background-color: white;
    border-radius: 1.5rem;
    margin: 10rem 2.5rem;
    box-shadow: 2px 5px 5px 5px rgba(0, 0, 0, 0.2);

    a {
      border: none;
      color: rgba(0, 0, 0, 0.3);

      :hover {
        color: black;
      }
    }
  }

  #normal {
    display: none;
  }
}

button {
  all: unset;
}

.nav {
  li:not(#logo) {
    font-size: 1rem;
    margin-left: 2rem;
    min-width: 10rem;
    border: 2px solid transparent;

    a {
      display: flex;
      align-items: center;
      padding: 0.5rem 2rem;
      min-width: 10rem;
      height: 2.33rem;
      text-decoration: none;
    }

    .notcurrent {
      border: none;
      color: rgba(0, 0, 0, 0.3);

      :hover {
        color: black;
      }
    }

    .current {
      border: 3px solid black;
      border-radius: 2.33rem;
      color: black;
    }
  }

}

#logo {
  margin: 4rem 0 2rem 2rem;

  img {
    width: 12rem;
  }

}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
