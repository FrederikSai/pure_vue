<template>
  <div>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
    </div>
    <div class="second_div">
      <h3>{{ msg2 }}</h3>
    </div>
  </div>
</template>

<script>
import '@/style/List.scss'

export default {
  name: 'List',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg2: 'test'
    }
  }
}
</script>
