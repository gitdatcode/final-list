import axios from 'axios'

export const getMovies = () => {
  return axios.get(`/movies`)
    .then(response => response)
    .catch((error) => {
      console.log(error)
    })
}
