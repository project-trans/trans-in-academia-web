<template>
  <div class="margin"></div>
  <div class="content">
    <events>
      <div class="event" style="padding-bottom: 0">
        <div class="text-wrapper" style="margin-bottom: 0">
          <h3 style="margin: 1rem 0; font-size: 0.75rem; color: gray">
            Pinned
          </h3>
          <p style="color: black">
            Trans in Academia! (TiA!) is an organization established by Chinese
            trans people in 2022. TiA! aims to document theoretical and
            practical knowledge from the Sinophone trans community, help trans
            people pursue studies, professional development, and employment,
            share academic knowledge related to trans issues, and produce
            original content from the perspective of trans people.
          </p>
          <p style="color: black">
            跨儿学术小组 Trans in Academia! 建立于 2022
            年。作为由华语跨儿建立和主导的组织，TiA!
            致力于记录我们所在社群的理论和实践知识，帮助跨儿求学、进修、工作，分享与跨儿有关的学术知识，并以跨儿的视角发声。
          </p>
        </div>
      </div>
      <div class="event social">
        <div class="text-wrapper">
          <h3 style="margin: 1rem 0; font-size: 0.75rem; color: gray">
            社交媒体
          </h3>
          <div>
            <a href="https://t.me/transacademicorg">
              <div><img src="social/tg.svg" />
                <div>Telegram</div>
              </div>
            </a>
            <a href="https://discord.gg/A3exRdrEDp">
              <div><img src="social/dis.svg" />
                <div>Discord</div>
              </div>
            </a>
            <a href="https://kazv.moe/users/tia">
              <div><img src="social/fed.png" />
                <div>Fediverse</div>
              </div>
            </a>
            <a href="https://x.com/transinacademia">
              <div><img src="social/tw.svg" />
                <div>Twitter</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="event placeholder"></div>
      <EventsList />
    </events>
  </div>
</template>

<script>
import EventsList from './EventsList.vue';
export default {
  components: {
    EventsList
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// middle
@media screen and (min-width: 642px) {
  div .content events {
    width: 100%;
    column-count: 2;
  }
}

@media screen and (min-width: 996px) {
  div .content events {
    width: 100%;
    column-count: 3;
  }
}

// big screens
@media screen and (min-width: 1279px) {
  div .content events {
    width: 95%;
    column-count: 4;
  }
}


// mobile
@media screen and (max-width: 642px) {
  div .content events {
    column-count: 1;
    margin: auto;
  }

  div .margin {
    min-width: unset !important;
    width: 0;
  }

  .placeholder {
    display: none;
  }

  .social .text-wrapper div {

    // flex-wrap: nowrap;
    a div {

      div {
        width: 70% !important;
      }

      img {
        width: 70% !important;
      }
    }
  }
}

div .margin {
  min-width: calc(min(20rem, 20%));
}

div .content {
  display: grid;
  grid-auto-flow: row;
  padding: 2rem;

  events {
    .placeholder {
      background-color: transparent;
      box-shadow: none;
      height: 20rem;
    }

    .social .text-wrapper div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      a {
        text-decoration: none;
        color: gray;
        width: 25%;
      }

      // flex-wrap: nowrap;
      a div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        div {
          font-size: 0.75rem;
          text-align: center;
          width: 90%;
          margin: auto;
          margin-top: 0.5rem;
        }

        img {
          width: 90%;
          margin: auto;
        }
      }
    }

    column-gap: 2rem;

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
  font-size: 1.25rem;
  text-align: center;
}

p {
  font-size: 0.85rem;
}

img {
  width: 100%;
  vertical-align: middle;
}

@media (prefers-color-scheme: dark) {
  .text-wrapper {
    h3 {
      color: aliceblue !important;
    }

    p {
      color: white !important;
    }
  }
}
</style>
