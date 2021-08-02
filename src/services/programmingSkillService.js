import axios from "axios";

export default class ProgrammingSkillService{
    
    getAllByJobseekerId(id){
        return axios.get(`http://localhost:8080/api/programmingSkills/getAllByJobseekerId?id=${id}`)
    }
}