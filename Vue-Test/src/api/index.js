import Axios from 'axios'
import API from './resources'

export default {
  register (data) {
    return Axios.post(API.register, data)
  },
  getCaptcha (data) {
    return Axios.post(API.getCaptcha, data)
  },
  searchJobs (data) {
    return Axios.post(API.searchJobs, data)
  },
  addStarJob (data) {
    return Axios.post(API.addStarJob, data)
  },
  cancleStar (data) {
    return Axios.post(API.cancleStar, data)
  },
  getStarJob (data) {
    return Axios.post(API.getStarJob, data)
  }
}