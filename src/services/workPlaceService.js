import axios from "axios";

export default class WorkPlaceService{
    getWorkPlaces(){
        return axios.get("http://hrms-backend-canli.herokuapp.com/workPlace/getAll")
    }
}