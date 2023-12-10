<template>
  <div class="nav">
    <li id="logo">
      <img src="/LOGO.png" width="100%">
    </li>
    <div>
      <li><a href="#" class="current"><span>Events</span></a></li>
      <li><a href="https://lib.oau.edu.kg" class="notcurrent"><span>Librar</span>y</a></li>
      <li><a href="https://uniguide.oau.edu.kg" class="notcurrent"><span>UniGui</span>de</a></li>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// middle
@media screen and (min-width: 1500px) {
  div .content events {
    max-width: 75%;
    column-count: 2;
  }

  .nav {
    position: fixed;
    top: 0;
    height: 100vh;
    min-width: calc(min(20rem, 20%));
    list-style-type: none;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    margin: 0;
    padding: 0;
    overflow: hidden;
    z-index: 10000;
    background-color: transparent;
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
  #app {
    flex-direction: column !important;
  }

  .nav {
    display: flex;
    flex-direction: row;
    top: unset;
    bottom: 0;
    width: 100%;
    list-style-type: none;
    justify-content: space-evenly;
    margin-top: 2rem;
  }
}

.nav {

  li:not(#logo) {
    font-size: 1.25rem;
    margin-left: 2rem;
    min-width: 10rem;
    border: 2px solid transparent;

    a {
      display: flex;
      align-items: center;
      padding: 0.5rem 2rem;
      min-width: 10rem;
      height: 2.33rem;
      text-decoration: none;
    }

    .notcurrent {
      border: none;
      color: rgba(0, 0, 0, 0.3);

      :hover {
        color: black;
      }
    }

    .current {
      border: 3px solid black;
      border-radius: 2.33rem;
      color: black;
    }
  }

}

#logo {
  margin: 4rem 0 2rem 2rem;

  img {
    width: 12rem;
  }

}
</style>
