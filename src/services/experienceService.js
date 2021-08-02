import axios from "axios";

export default class ExperienceService{

    getAllByJobseekerId(id){
        return axios.get(`http://localhost:8080/api/experiences/getAllByJobseekerId?id=${id}`)
    }
}