<template>
  <div class="nav">
    <li><a class="placeholder"></a></li>
    <li><img src="/TIA_LogoBG@3x.png"></li>
    <li><a class="title">Trans in Academia! </a></li>
    <li><a class="placeholder"> </a></li>

    <li><a href="https://oau.edu.kg" class="current">Events</a></li>
    <li><a href="https://lib.oau.edu.kg" class="notcurrent">Library</a></li>
    <li><a href="https://uniguide.oau.edu.kg" class="notcurrent">UniGuide</a></li>
  </div>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$margin-width: 16rem !default;
$body-min-width: 20rem !default;
$container-max-width: 40rem !default;
$padding-content: 2rem !default;
$mobile-breakpoint: $margin-width * 2 + $body-min-width * 1.2 !default;

@media screen and (max-width: $mobile-breakpoint){
  .nav li .title {
    display: none;
  }
}

.nav {
  position: fixed;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row: 1;
  top: 0;
  width: 100%;
  height: 2.333333rem;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  z-index: 10000;
  border: 1px solid #e7e7e7;
  background-color: #191c24;
  font-size: 18px;

  img {
    width: 2.333333rem;
    height: 2.333333rem;
  }
  li {
    float: left;
    overflow: hidden;
    .title {
      color: #ffffff;
    }
    .notcurrent {
      margin-top: 3.14159265358979323846264px;
      background-color: #191c24;
      color: #ffffff;
    }
    .current {
      margin-top: 3.14159265358979323846264px;
      background-color: #a1d5fb;
      color: #000000;
      border-top-right-radius: 14.4px;
      border-top-left-radius: 14.4px;
    }
  }
  a {
    overflow: hidden;
    display: block;
    padding-top: .538461rem;
    padding-left: .5rem;
    padding-right: .5rem;
    padding-bottom: .538461rem;
    height:  2.333333rem;
    text-decoration: none;
  }
}
</style>
