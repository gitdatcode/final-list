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
import getMovies from '../../../utils/api/movies'
  export default {
    name: 'Movies',
    data() {
      return {
        movies: [],
        loadingMovies: true,
        moviesLoaded: false
      }
    },
    mounted() {
      this.getMovies()
    },
    methods: {
      getMovies() {
        getMovies()
          .then((response) => {
            if (response) {
              this.movies = response.data
              return true
            }
            this.moviesLoaded = false
            return false
          })
          .catch((error) => {
            console.log(error)
            this.moviesLoaded = false
          })
          .finally(() => {
            this.loadingMovies = false
          })
      }
    }
  }
</script>

<style scoped>

</style>
