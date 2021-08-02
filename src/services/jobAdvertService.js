import axios from "axios";

export default class JobAdvertService{
    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadvert/getAll")
    }

    add(values){
        return axios.post("http://localhost:8080/api/jobadvert/create",values)
    }

    getJobAdvertsByEmployerId(id){
        return axios.get(`http://localhost:8080/api/jobadvert/getAllByEmployerId?id=${id}`)
    }

    getById(id){
        return axios.get(`http://localhost:8080/api/jobadvert/getbyid?id=${id}`)
    }
}