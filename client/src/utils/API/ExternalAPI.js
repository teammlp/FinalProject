import axios from "axios";

const BASEURL = "https://data.usajobs.gov/api/search?";

export default {
  search: function(query) {
    return axios.get(BASEURL + query);
    console.log(BASEURL + query);
  }
};