<template>
  <div>
    <h2>Movies List</h2>
    <template v-if="moviesLoading">
      <p>Loading....</p>
    </template>
    <template v-else>
        <template v-if="moviesLoaded && movies.length > 0">
          <div
            v-for="movie in movies"
            :key="movie.id"
          >
            <h2>
              {{ movie.title }}
            </h2>
          </div>
        </template>
        <template v-else-if="moviesLoaded">
          <p>No movie found</p>
        </template>
        <template v-else>
          <p>An error occurred while loading movies, please try again.</p>
        </template>
    </template>
  </div>
</template>

<script>
import getMovies from '../../../utils/api/movies'
export default {
  name: 'Movies',
  data () {
    return {
      movies: [],
      moviesLoading: true,
      moviesLoaded: false
    }
  },
  mounted () {
    this.getMovies()
  },
  methods: {
    getMovies () {
      getMovies()
        .then((response) => {
          if (response.status === 200) {
            this.movies = response.data
            console.log(this.movies)
            this.moviesLoaded = true
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
          this.moviesLoading = false
        })
    }
  }
}
</script>

<style scoped>

</style>
