import axios from "axios";

export const api = axios.create({
   baseURL: "https://api.openweathermap.org/data/2.5"

})
export const api_key = '68cd13b633ac460847997ed354564d6a'