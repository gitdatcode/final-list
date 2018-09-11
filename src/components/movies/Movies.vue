<template>
  <div>
    <h2>Movies List</h2>
    <template v-if="loadingMovies">

    </template>
    <template v-else>
      
    </template>
  </div>
</template>

<script>
  export default {
    name: 'Movies',
    data() {
      return {
        movies: [],
        loadingMovies: true,
        loadedMovies: false
      }
    }
  }
</script>

<style scoped>

</style>
