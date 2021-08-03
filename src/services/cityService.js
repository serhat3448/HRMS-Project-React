import axios from "axios"

export default class CityService{
    getCities(){
        return axios.get("https://hrms-backend-canli.herokuapp.com/api/cities/getall")
    }
}