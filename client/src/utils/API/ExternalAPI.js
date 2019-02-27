import axios from "axios";

const BASEURL = "https://bikewise.org:443/api/v2/incidents?page=1&proximity_square=10&proximity=";

const APIKEY = "&api_key = EJcaVAoRWytx9tP1oj1oAAti9TQdKTHNvvmT20h59VI="

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
    return axios.get(BASEURL + query);
    console.log(BASEURL + query);
  }
};