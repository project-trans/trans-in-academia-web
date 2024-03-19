<template>
  <div id="app">
    <div class="bg" />
    <NavigationBar />
    <NuxtPage />
    <FooterBar />
  </div>
</template>

<script setup lang="ts">
import "@fontsource/inter";
import "@fontsource/inter-tight";
</script>

<style lang="scss">
#app {
  font-family: "Sarasa-Gothic-Regular", "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
}

.bg {
  z-index: -1;
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: #f1f5f9;
}

body {
  margin: 0px;
}

@font-face {
  font-family: Sarasa-Gothic-Regular;
  src: url("~/assets/fonts/SarasaGothicSC-Regular.ttf");
}

@font-face {
  font-family: Sarasa-Gothic-SemiBold;
  src: url("~/assets/fonts/SarasaGothicSC-SemiBold.ttf");
}
</style>
