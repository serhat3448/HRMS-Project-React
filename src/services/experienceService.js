import axios from "axios";

export default class ExperienceService{

    getAllByJobseekerId(id){
        return axios.get(`https://hrms-backend-canli.herokuapp.com/api/experiences/getAllByJobseekerId?id=${id}`)
    }
}