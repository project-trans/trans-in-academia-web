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
      <li><a href="#" class="current"><img src="/LOGO Graph.svg"><span>Trans in Academia!</span></a></li>
      <li><a href="https://lib.oau.edu.kg" class="notcurrent"><span>Library</span></a></li>
      <li><a href="https://uniguide.oau.edu.kg" class="notcurrent"><span>UniGuide</span></a></li>
      <!-- <li class="placeholder"></li> -->
    </div>
  </div>
</template>

<script>
import { Transition, ref } from 'vue'
const burgerStatus = ref(false)
const unfold = () => {
  burgerStatus.value = !burgerStatus.value;
}
export default {
  name: "NavigationBar",
  setup() {
    return { burgerStatus };
  },
  methods: {
    unfold,
  },
  components: { Transition }
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
          text-wrap: nowrap;
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

// middle
// @media screen and (min-width: 768px) {
//   .nav {
//     position: fixed;
//     top: 0;
//     height: 100vh;
//     min-width: calc(min(20rem, 20%));
//     list-style-type: none;
//     display: flex;
//     flex-direction: column;
//     flex-wrap: nowrap;
//     align-items: flex-start;
//     margin: 0;
//     padding: 0;
//     overflow: hidden;
//     z-index: 10000;
//     background-color: transparent;
//   }

//   #logo_burger {
//     display: none;
//   }

//   #burger {
//     display: none;
//   }
// }

// // big screens
// @media screen and (min-width: 1279px) {
//   div .content events {
//     column-count: 3;
//   }
// }


// // mobile
// @media screen and (max-width: 768px) {
//   #app {
//     flex-direction: column !important;
//   }

//   #mask {
//     background-color: rgba(0, 0, 0, 0.425);
//     width: 100%;
//     height: 100%;
//     position: fixed;
//     z-index: -1;
//   }

//   li {
//     list-style: none;
//     margin: 0 !important;
//   }

//   .nav {
//     position: block;
//     height: 8rem;
//     z-index: 10;
//   }

//   #logo {
//     display: none;
//     padding-left: 0.5rem;
//   }

//   #logo_burger {
//     position: fixed;
//     width: 4rem;
//     height: 4rem;
//     border-radius: 2rem;
//     background-color: white;
//     left: 2.5rem;
//     top: 3rem;
//     margin: 0 !important;
//     box-shadow: 0px 32px 48px -4px rgba(0, 0, 0, 0.2);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   #burger {
//     position: fixed;
//     width: 4rem;
//     height: 4rem;
//     border-radius: 2rem;
//     background-color: white;
//     right: 2.5rem;
//     top: 3rem;
//     box-shadow: 0px 32px 48px -4px rgba(0, 0, 0, 0.2);
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }

//   #burger-items {
//     padding: 1rem 0;
//     width: calc(100% - 5rem);
//     position: fixed;
//     background-color: white;
//     border-radius: 1.5rem;
//     margin: 10rem 2.5rem;
//     box-shadow: 0px 32px 48px -4px rgba(0, 0, 0, 0.2);

//     a {
//       border: none;
//       color: rgba(0, 0, 0, 0.3);

//       :hover {
//         color: black;
//       }
//     }
//   }

//   #normal {
//     display: none;
//   }
// }

// button {
//   all: unset;
// }

// .nav {
//   li:not(#logo) {
//     font-size: 1rem;
//     margin-left: 2rem;
//     min-width: 10rem;

//     :hover {
//       margin-bottom: 0.5rem;

//       .arrow {
//         color: black;
//       }
//     }

//     a {
//       transition: all 0.5s ease-in-out;
//       display: flex;
//       align-items: center;
//       padding: 0.5rem 2rem;
//       min-width: 10rem;
//       text-decoration: none;
//       display: flex;
//       align-items: start;

//       .arrow {
//         margin: 0 5px;
//       }
//     }

//     .notcurrent {
//       color: rgba(0, 0, 0, 0.3);

//       .arrow {
//         color: transparent;
//       }

//       :hover {
//         color: black;
//         font-weight: 500;
//       }
//     }

//     .current {
//       color: black;
//     }
//   }

// }

// #logo {
//   margin: 4rem 0 2rem 2rem;

//   img {
//     width: 12rem;
//   }

// }

// .v-enter-active,
// .v-leave-active {
//   transition: opacity 0.75s ease;
// }

// .v-enter-from,
// .v-leave-to {
//   opacity: 0;
// }</style>
