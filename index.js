const axios = require('axios')

async function getdata() {
    let res = await axios.get(`https://randomuser.me/api/`)
    console.log(res.data);
}
getdata()

let url1 = `https://randomuser.me/api/`

async function getDataFromApi() {
    let res = await fetch(url1)
    let data = await res.json()
    console.log(data.results[0]);
}
getDataFromApi()