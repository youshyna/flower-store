<template>
  <nav>
    <router-link to="/catalog">Catalog</router-link>
    <router-link to="/delivery">Delivery</router-link>
    <router-link to="/">Home (icon)</router-link>
    <router-link to="/contacts">Contacts</router-link>
    <router-link to="/cart">Cart</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px;
  background-color: rgba(255, 0, 0, 0.075);

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
