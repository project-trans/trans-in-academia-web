<template>
  <div class="margin"></div>
  <div class="content">
    <div class="events">
      <div class="event" style="padding-bottom: 0;">
        <div class="text-wrapper" style="margin-bottom: 0;">
          <h3 style="
            margin: 1rem 0;
            font-size: 0.75rem;
            color: gray;
          ">Pinned</h3>
          <p style="color: black;">A community for diasporic Chinese trans and gender nonconforming people pursuing
            academic and career goals. </p>
          <p style="color: black;">分享与跨性别有关的学术动态，帮助跨性别者及友跨人士求学、进修、工作，以跨性别学术人的视角发声。</p>
        </div>
      </div>
      <div class="event social">
        <div class="text-wrapper">
          <h3 style="
            margin: 1rem 0;
            font-size: 0.75rem;
            color: gray;
          ">社交媒体</h3>
          <div>
            <a href="https://t.me/transacademicorg">
              <div><img src="/social/tg.svg" />
                <div>Telegram</div>
              </div>
            </a>
            <a href="https://discord.gg/A3exRdrEDp">
              <div><img src="/social/dis.svg" />
                <div>Discord</div>
              </div>
            </a>
            <a href="https://kazv.moe/users/tia">
              <div><img src="/social/fed.png" />
                <div>Fediverse</div>
              </div>
            </a>
            <a href="https://x.com/transinacademia">
              <div><img src="/social/tw.svg" />
                <div>Twitter</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="event placeholder">
      </div>
      <EventsList />
    </div>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// middle
@media screen and (min-width: 768px) {
  div .content .events {
    width: 75%;
    column-count: 2;
  }
}

// big screens
@media screen and (min-width: 1279px) {
  div .content .events {
    width: 95%;
    column-count: 4;
  }
}


// mobile
@media screen and (max-width: 768px) {
  div .content .events {
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

  .events {
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
</style>
