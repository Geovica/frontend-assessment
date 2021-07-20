<template>
  <div id="app">
    <router-link id="routes" to="/"> Exercise 1 </router-link> |
    <router-link id="routes" to="/exe-2"> Exercise 2 </router-link>
    <router-view />
  </div>
</template>

<style lang="scss" scopped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,900&display=swap");

body {
  font-family: "Roboto", sans-serif;
}

#routes {
  padding: 30px;

  font-weight: normal;
  color: #a5a5a5;
  font-family: "Roboto", sans-serif;
  font-size: 14px;

  &.router-link-exact-active {
    color: #000000;
  }
}
</style>
