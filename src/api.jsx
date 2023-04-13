import axios from "axios";

export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':'https://api.api-ninjas.com/v1/quotes?category=happiness'
        
    })
}