import axios from "axios";

export default class JobPositionService{
    getJobPositions(){
        return axios.get("http://hrms-backend-canli.herokuapp.com/api/jobpositions/getall")
    }

    getJobPositionById(id){
        return axios.get(`http://hrms-backend-canli.herokuapp.com/api/jobpositions/getbyid?id=${id}`)
    }
}