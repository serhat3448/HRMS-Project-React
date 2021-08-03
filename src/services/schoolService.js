import axios from "axios";

export default class SchoolService{

    getAllByJobseekerId(id){
        return axios.get(`https://hrms-backend-canli.herokuapp.com/api/schools/getAllByJobseekerId?id=${id}`)
    }

    addSchools(){
        return axios.post('https://hrms-backend-canli.herokuapp.com/api/schools/add')
    }
}