<template>
  <div v-for="(item, name) in eventslist.Events" :key="name">
    <div class="event" loading='lazy'>
      <a :href="`${item?.link?.url}`">
        <img :src="`events/assets/${item.image}`" :alt="`${name}`" />
      </a>
      <div class="text-wrapper">
        <h3> {{ name }} </h3>
        <p v-if="item.time">
          {{ Date(item.time).toLocaleString() }}
        </p>
        <p>
          {{
            item.lang
            ? item.lang.reduce((x, y) => x + " / " + y)
            : "English / 普通话 / 吳語 / 日本語"
          }}
        </p>
        <a v-if="item.link && item.link.type" class="link-type" :href="`${item.link.url}`">
          {{ item.link.type }}
        </a>
        <p> {{ item.description }} </p>
      </div>
    </div>
  </div>
</template>

<script lang="jsx">
import eventslist from '/public/events/events.yaml'

export default {
  setup() {
    return { eventslist }
  }
};
</script>

<style lang="scss">
.nolink {
  display: none;
}

div {
  text-decoration: none;

  .event {
    margin: 2rem 0;
    padding-bottom: 1rem;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.2);
    break-inside: avoid;

    :hover {
      transition: cubic-bezier(); //@TODO
    }

    img {
      border-radius: 1rem 1rem 0 0;
    }

    .text-wrapper {
      display: flex;
      flex-direction: column;
      margin: 1rem;

      h3 {
        font-size: 1.5rem;
        margin-top: 0;
        margin-bottom: 0;
        font-family: "Inter Tight";
        font-weight: 500;
      }

      p {
        text-align: left;
        font-family: "Inter";
        margin-top: 0;
        color: #0000009a;
      }

      .link-type {
        color: black;
        margin: 0 0 1rem 0;
        border: 2px solid black;
        text-decoration: none;
        width: min-content;
        border-radius: 2rem;
        padding: 0.05rem 0.5rem;
      }
    }
  }
}
</style>
