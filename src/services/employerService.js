import axios from "axios";

export default class EmployerService{
    getEmployers(){
        return axios.get("http://localhost:8080/api/employers/getall")
    }

    register(values){
        return axios.post("http://localhost:8080/api/employers/add",values)
    }

    getEmployerById(id){
        return axios.get(`http://localhost:8080/api/employers/getbyid?id=${id}`)
    }
}