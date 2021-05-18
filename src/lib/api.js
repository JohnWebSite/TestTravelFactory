import axios from 'axios';
const baseUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address=paris&key=AIzaSyDKvvBgAkSCugEbXckutuAFuqPzthsCnJ8';

export async function getTheAdressGPS(adress) {
    let url = baseUrl;
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}
