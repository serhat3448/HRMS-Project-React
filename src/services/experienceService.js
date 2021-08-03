import axios from "axios";

export default class ExperienceService{

    getAllByJobseekerId(id){
        return axios.get(`http://hrms-backend-canli.herokuapp.com/api/experiences/getAllByJobseekerId?id=${id}`)
    }
}