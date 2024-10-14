<template>
  <div class="footer">
    <b>Hoc Iter ad Astra</b>
    <br />
    <img
      class="icon"
      alt="CreativeCommons"
      src="https://creativecommons.org/wp-content/themes/vocabulary-theme/vocabulary/svg/cc/icons/cc-icons.svg#cc-logo"
    />
    <img
      class="icon"
      alt="Attribution"
      src="https://creativecommons.org/wp-content/themes/vocabulary-theme/vocabulary/svg/cc/icons/cc-icons.svg#cc-by"
    />
    <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">
      CC BY 4.0</a
    >
    Licensed
    <br />
    © Trans in Academia! 2023-{{ currentYear }}
    <br />
  </div>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped lang="scss">
.footer {
  display: none;
  position: fixed;
  top: 88vh;
  margin: 0 auto 0 auto;
  text-align: center;
  font-family: Comme, sans-serif;
  img {
    width: 1em;
    height: 1em;
  }
}
</style>
