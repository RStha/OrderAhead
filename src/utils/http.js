import axios from 'axios'
import Config from 'react-native-config'

const http = axios.create({
    baseURL: 'https://oa-server-prod.flosolutions.net',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default http;