<template>
  <div class="margin"></div>
  <div class="content">
    <events>
      <div class="event">
        <div class="text-wrapper">
          <h3 style="
            margin: 2rem 0;
            font-size: 0.75rem;
            color: gray;
          ">pinned</h3>
          <p> We are an association for diasporic East Asian and Canadian scholars, students and enthusiasts.</p>
          <p> We are hiring editors! Please contact <a style="color: unset;" href="mailto:tia@oneamongus.ca">tia@oneamongus.ca</a>.</p>
        </div>
      </div>
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
// middle
@media screen and (min-width: 768px) {
  div .content events {
    width: 75%;
    column-count: 2;
  }
}

// big screens
@media screen and (min-width: 1279px) {
  div .content events {
    width: 95%;
    column-count: 3;
  }
}


// mobile
@media screen and (max-width: 768px) {
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
  display: grid;
  grid-auto-flow: row;
  padding: 3rem;

  events {
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
