// import axios from "axios";
const axios = require('axios');
const api = axios.create({
    baseURL: "https://api.shrtco.de/v2"
});

const shortLink = async (url) => {
    const link = await api.get(`/shorten?url=${url}`);

    console.log(link);
}
const handleShort = async () => {
    const url = document.getElementById("txtShort").value;
    await shortLink(url);
}
