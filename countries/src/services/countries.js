import axios from 'axios'

const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api/all';
const singleCountryURL = 'https://studies.cs.helsinki.fi/restcountries/api/name/'

const getAllCountries = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

export default { 
    getAllCountries 
}