import axios from "axios";

export default class EmployerService{
    getEmployers(){
        return axios.get("http://hrms-backend-canli.herokuapp.com/api/employers/getall")
    }

    register(values){
        return axios.post("http://hrms-backend-canli.herokuapp.com/api/employers/add",values)
    }

    getEmployerById(id){
        return axios.get(`http://hrms-backend-canli.herokuapp.com/api/employers/getbyid?id=${id}`)
    }
}