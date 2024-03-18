<template>
  <bg />
  <NavigationBar />
  <HomePage />
  <FooterBar />
</template>

<script>
import HomePage from './components/HomePage.vue'
import NavigationBar from './components/NavigationBar.vue'
import FooterBar from './components/FooterBar.vue'
import "@fontsource/inter";
import "@fontsource/inter-tight";

export default {
  name: 'App',
  components: {
    HomePage,
    NavigationBar,
    FooterBar
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: row;
}

bg {
  z-index: -1;
  position: fixed;
  height: 100vh;
  width: 100%;

  background-image: radial-gradient(circle at 10% 0%,
      #e3dbe766 0,
      #FCEDF066 20%,
      #FEE2E766 30%,
      #CCC8DF66 50%,
      #C2CFE666 64%,
      #D1E0ED66 80%,
      #DEE0E766 100%);
  filter: blur(10px);
}

body {
  margin: 0px;
}

@font-face {
    font-family: Sarasa-Gothic-Regular;
    src: url('assets/fonts/SarasaGothicSC-Regular.ttf');
}
</style>
