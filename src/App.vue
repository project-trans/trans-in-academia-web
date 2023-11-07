<template>
  <NavigationBar/>
  <HomePage/>
  <FooterBar/>
</template>

<script>
import HomePage from './components/HomePage.vue'
import NavigationBar from './components/NavigationBar.vue'
import FooterBar from './components/FooterBar.vue'

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
@import url('https://fonts.googleapis.com/css2?family=Comme:wght@200&family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Junge&family=Tangerine:wght@700&display=swap');

$bg: #d9f0fe !default;
$color: hsl(219deg, 30%, 20%) !default;

#app {
  font-family: 'eb garamond', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: $bg;
  color: $color;
}
body {
  margin: 0px;
}
</style>
