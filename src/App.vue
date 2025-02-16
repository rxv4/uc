<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Helvetica', sans-serif;
}

/* styles globaux */
body {
  margin: 0;
  padding: 0;
  background-color: var(--background-color-dark);
}
</style>
