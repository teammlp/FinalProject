import axios from "axios";

export default {

    // Get all places
    getPlaces: function (diningData) {
        return axios.get("/api/searchplace", { params: diningData })
    },
    // Get a specific places by id

    getPlace: function (id) {
        return axios.get("/api/place/" + id);
    }

}