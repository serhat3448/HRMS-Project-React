import axios from "axios";

export default class SchoolService{

    getAllByJobseekerId(id){
        return axios.get(`http://hrms-backend-canli.herokuapp.com/api/schools/getAllByJobseekerId?id=${id}`)
    }
}