import axios from "axios";

export default class SchoolService{

    getAllByJobseekerId(id){
        return axios.get(`http://localhost:8080/api/schools/getAllByJobseekerId?id=${id}`)
    }
}