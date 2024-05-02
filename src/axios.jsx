import axios from 'axios'
import { baseUrl, API_KEY} from './constants/constans';
const instance = axios.create({
  baseURL: baseUrl,

});

export default instance