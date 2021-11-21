<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Main</router-link> |
      <router-link to="/ContactUs">Contact Us</router-link> |
      <router-link to="/AboutUs">About Us</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
  a {
    font-family: Avenir;
    text-align: center;
    font-weight: bold;
    color: #017cfc;

    &.router-link-exact-active {
      color: #3ac082;
    }
  }
}
</style>