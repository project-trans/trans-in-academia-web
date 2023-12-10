<template>
  <div class="margin"></div>
  <div class="content">
    <!-- <header>
    <img class="banner" alt="Trans in Academia Logo" src="/TIA_BannerL@2x.png">
    <h3> <center><a href="https://t.me/transacademicorg">Telegram</a> | <a href="https://discord.gg/A3exRdrEDp">Discord</a> | <a rel="me" href="https://kazv.moe/users/tia">Fediverse</a> </center></h3>
    <p> We are an association for diasporic East Asian and Canadian scholars, students and enthusiasts.</p>

    <p> We are hiring editors! Please contact <a href="mailto:tia@oneamongus.ca">tia@oneamongus.ca</a>.</p>
  </header> -->
    <events>
      <EventsList />
    </events>
  </div>
</template>

<script>
import EventsList from './EventsList.vue'
export default {
  components: {
    EventsList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$margin-width: 16rem !default;
$body-min-width: 20rem !default;
$container-max-width: 70rem !default;
$padding-content: 2rem !default;
$mobile-breakpoint: $margin-width * 2 + $body-min-width * 1.2 !default;

// middle
@media screen and (min-width: 1500px) {
  div .content events {
    max-width: 75%;
    column-count: 2;
  }
}

// big screens
@media screen and (min-width: 1920px) {
  div .content events {
    max-width: 75%;
    column-count: 3;
  }
}


// mobile
@media screen and (max-width: 1500px) {
  div .content events {
    column-count: 1;
    margin: auto;
  }

  div .margin {
    min-width: unset !important;
    width: 0;
  }
}

div .margin {
  min-width: calc(min(20rem, 20%));
}

div .content {
  // max-width: calc(min(#{$container-max-width}, 100%));
  // padding: $padding-content;
  // box-sizing: content-box;
  // border-inline: 16px;
  // margin-inline: auto;
  // margin-block-start: 0;
  // margin-block-end: 2rem;
  display: grid;
  padding: 3rem;

  events {
    // margin: auto;
    // column-count: 3;
    column-gap: 3rem;

    :first-child {
      margin-top: 0;
    }
  }
}

header {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: 2;
}

h2 {
  font-size: 2em;
  text-align: center;
}

p {
  font-size: 1.25em;
}

img {
  width: calc(min(#{$container-max-width}, 100%));
  vertical-align: middle;
}
</style>
