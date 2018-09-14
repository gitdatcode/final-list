<template>
  <div id="app" class="container">
  <div class="nav">
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
  </div>
  <div class="content">
    <router-view/>
  </div>
  <div class="footer">
    <div class="signature">a project by <a href='https://www.datcode.io'>DATCODE, INC.</a></div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      routes: this.$router.routes
    }
  }
}
</script>
