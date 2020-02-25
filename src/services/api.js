import endpoints from "../constant/api"
import http from '../utils/http'
import axios from 'axios'
 
/**
 * API handler to fetch menu. 
 */
export const fetchMenu = (airportCode) => {
return http.post('/getMenu', 
{'airportCode': airportCode}
)

}