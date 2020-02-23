import endpoints from "../constant/api"
import http from '../utils/http'
import {axios, qs} from 'axios'

 
/**
 * API handler to fetch menu.
 */
export const fetchMenu = () => {
let options = {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  data: qs.stringify({'airportCode': 'jfk-t2'}),
  url: 'https://oa-server-prod.flosolutions.net/getMenu',
};
return axios(options);
    // const url = 'https://oa-server-prod.flosolutions.net/getMenu'
    // axios.post(url, data, {
    //     headers: headers
    // })
    // .then((data) => {
    //     return data
    // })
    // .catch((err) => {
    //     console.log("ERROR: ====", err);
    // })
    // return null
}