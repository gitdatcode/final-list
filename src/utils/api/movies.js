import axios from 'axios'

export default function getMovies () {
  return axios.get('/movies')
    .then(response => {
      console.log(response)
      return response
    })
    .catch((error) => {
      console.log(error)
    })
}
