<template>
  <div v-for="(item, name) in eventslist.Events" :key="name">
    <div class="event" loading="lazy">
      <a :href="`${item?.link?.url}`">
        <img :src="`events/assets/${item.image}`" :alt="`${name}`" />
      </a>
      <div class="text-wrapper">
        <h3>{{ name }}</h3>
        <p v-if="item.time">
          {{ new Date(item.time).toLocaleString() }}
        </p>
        <p>
          {{
            item.lang
              ? item.lang.reduce((x, y) => x + ' / ' + y)
              : 'English / 普通话 / 吳語 / 日本語'
          }}
        </p>
        <a
          v-if="item.link && item.link.type"
          class="link-type"
          :href="`${item.link.url}`"
          target="_blank"
        >
          {{ item.link.type }}
        </a>
        <p
          class="markdown"
          v-if="!!item.description"
          v-html="this.marked(item.description.replaceAll('\n', '\n\n'))"
        />
      </div>
    </div>
  </div>
</template>

<script lang="jsx">
import eventslist from '/public/events/events.yaml';
import { marked } from 'marked';

export default {
  setup() {
    return { eventslist };
  },
  created() {
    this.marked = marked;
  }
};
</script>

<style lang="scss">
@import '~@/style/markdown.scss';

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
    transition: all 0.5s cubic-bezier(0.45, 0.65, 0.875, 0.8);

    &:hover {
      transform: translateY(-5px);
      filter: drop-shadow(0px 10px 5px #191c241d);
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
        font-family: 'Inter Tight';
        font-weight: 500;
      }

      .link-type {
        color: black;
        margin: 0 0 1rem 0;
        border: 2px solid black;
        text-decoration: none;
        width: fit-content;
        border-radius: 2rem;
        padding: 0.15rem 0.5rem;
      }
    }
  }
}

@media (prefers-color-scheme: dark) {
  .nolink {
    display: none;
  }

  div {
    .event {
      box-shadow: 0px 2px 2px 0px rgba(255, 255, 255, 0.05);
      background-color: black;

      &:hover {
        transform: none;
        filter: drop-shadow(0px 0px 10px #fadce7);
      }
    }

    .text-wrapper {
      color: white;

      .link-type {
        color: white !important;
        border: 2px solid white !important;
        border-radius: 2rem !important;
      }
    }
  }
}
</style>
