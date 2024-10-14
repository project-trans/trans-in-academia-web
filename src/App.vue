<template>
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

body {
  margin: 0;
  background-color: #f1f5f9;
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
}
</style>
