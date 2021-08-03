import axios from "axios";

export default class JobAdvertService{
    getJobAdverts(){
        return axios.get("http://hrms-backend-canli.herokuapp.com/api/jobadvert/getAll")
    }

    add(values){
        return axios.post("http://hrms-backend-canli.herokuapp.com/api/jobadvert/create",values)
    }

    getJobAdvertsByEmployerId(id){
        return axios.get(`http://hrms-backend-canli.herokuapp.com/api/jobadvert/getAllByEmployerId?id=${id}`)
    }

    getById(id){
        return axios.get(`http://hrms-backend-canli.herokuapp.com/api/jobadvert/getbyid?id=${id}`)
    }
}