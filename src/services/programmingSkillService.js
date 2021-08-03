import axios from "axios";

export default class ProgrammingSkillService{
    
    getAllByJobseekerId(id){
        return axios.get(`http://hrms-backend-canli.herokuapp.com/api/programmingSkills/getAllByJobseekerId?id=${id}`)
    }
}