<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
      <!-- <router-link to = 'rain' append>After ---</router-link>
      <router-view></router-view><br> -->

  </div>
</template>

<script>
export default {
  name: 'AppMain',
  data () {
    return {
      msg: 'ZSY first VUE-cli'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
