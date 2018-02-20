<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <router-link to="alret">Go to alert</router-link>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
