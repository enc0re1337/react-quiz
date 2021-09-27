import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-ae319-default-rtdb.firebaseio.com/'
})