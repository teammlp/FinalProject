const axios = require("axios");
const router = require("express").Router();

// match routes /api/searchplace

router.get("/searchplace", (req, res) => {
    const {
        term,
        location,
    } = req.query;
    
    const AuthStr = 'Bearer '.concat("cMe6mTlc6VA6HIOXkjyGX6QyXjOPeUE4HbZPmmMG8Q2KWEsz_sCMM_OPeFpA5tth5At2cXRYa-Wju0IOtFCl8yVggsUeYlPtjNaXP1qGWdn6kHYDqvdUy7rBw8N4XHYx")
    console.log (AuthStr)
    const URL = "https://api.yelp.com/v3/businesses/search?term=" + term + "&location=" + location ;
    console.log (URL)
    axios.get(URL, {
        headers: {
            Authorization: AuthStr,
        },
        timeout: 10000
    })
        .then(results => results.data)
        .then(results => res.json(results))
        .catch(err => res.status(422).json(err));
})

module.exports = router