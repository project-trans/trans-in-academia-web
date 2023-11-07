<template>
<div class="margin"></div>
<div class="content">
  <header>
    <img class="banner" alt="Trans in Academia Logo" src="/TIA_BannerL@2x.png">
    <h3> <center><a href="https://t.me/transacademicorg">Telegram</a> | <a href="https://discord.gg/A3exRdrEDp">Discord</a> | <a rel="me" href="https://kazv.moe/users/tia">Fediverse</a> </center></h3>
    <p> We are an association for diasporic East Asian and Canadian scholars, students and enthusiasts.</p>

    <p> We are hiring editors! Please contact <a href="mailto:tia@oneamongus.ca">tia@oneamongus.ca</a>.</p>
  </header>
  <main>
    <section>
      <h2> Events</h2>
      <img class="cover"
           src="/events/bhd-poster.jpg"
           alt="Bright, Hope, Dream">
      <p> Bright, Hope, Dream: TiA! Academic and Life Abroad Workshop <br/> First Talk: Canada and Nordic Countries @ 2023-10-28 14:00 UTC <br/> Join our <a href="#top">Social Media</a> for details. </p>
    </section>

    <section>
      <h2> Past Events</h2>
      <img class="cover"
           src="/events/lacan-reading.png"
           alt="Lacan reading group">
      <p> Reading Group: Lacanian Psychoanalysis for Activists <br/> Online from 2023-06-17 to 2023-08-10. </p>
      <br/>
      <img class="cover"
           src="/events/deleuze-reading.jpg"
           alt="Deleuze reading group">
      <p> Reading Group of <i> A Thousand Plateaus </i> <br/> Online from 2023-04-22. <br/> First series of seminars ended. Second in preparation. </p>
      <img class="cover"
           src="/events/miyazawa-poster.jpg"
           alt="Poster of livestream reading of Night of the Milky Way Railway">
      <p> Livestream reading of <i>Night of the Milky Way Railway</i> on TDOV 2023, by One Among Us & Project Trans. <br/> <a href="https://www.youtube.com/watch?v=TGhNTd-2I3c"> Replay </a> is available on YouTube. </p>
    </section>
  </main>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$margin-width: 16rem !default;
$body-min-width: 20rem !default;
$container-max-width: 40rem !default;
$padding-content: 2rem !default;
$mobile-breakpoint: $margin-width * 2 + $body-min-width * 1.2 !default;

// mobile
@media screen and (max-width: $mobile-breakpoint){

}
// big screens
@media screen and (min-width: $container-max-width) {
    div {
        padding-left: calc(100% - $container-max-width);
	padding-right: calc(100% - $container-max-width);
    }
}
div {
    max-width: calc(min(#{$container-max-width}, 100%));
    padding: $padding-content;
    box-sizing: content-box;
    border-inline: 16px;
    margin-inline: auto;
    margin-block-start: 0;
    margin-block-end: 2rem;
    display: grid;


header {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row: 2;
}
main {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row: 3;
}

h2 {
    font-size: 2em;
    text-align: center;
}
p {
    font-size: 1.2em;
}

img {
    width: calc(min(#{$container-max-width}, 100%));
    vertical-align: middle;
}
}
</style>
