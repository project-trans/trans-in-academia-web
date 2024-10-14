<template>
  <bg />
  <NavigationBar />
  <HomePage />
  <FooterBar />
</template>

<script>
import HomePage from './components/HomePage.vue';
import NavigationBar from './components/NavigationBar.vue';
import FooterBar from './components/FooterBar.vue';
import '@fontsource/inter';
import '@fontsource/inter-tight';

export default {
  name: 'App',
  components: {
    HomePage,
    NavigationBar,
    FooterBar
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Sarasa-Gothic-Regular', 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
}

bg {
  z-index: -1;
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: #F1F5F9;
}

body {
  margin: 0px;
}

@font-face {
  font-family: Sarasa-Gothic-Regular;
  src: url('assets/fonts/SarasaGothicSC-Regular.ttf');
}

@font-face {
  font-family: Sarasa-Gothic-SemiBold;
  src: url('assets/fonts/SarasaGothicSC-SemiBold.ttf');
}

@media (prefers-color-scheme: dark) {
    body {
        background-color: #1e1e2e;
    }

    bg {
        background-color: #1e1e2e;
    }
}
</style>
