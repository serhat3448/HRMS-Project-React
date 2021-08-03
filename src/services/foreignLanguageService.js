import axios from "axios";

export default class ForeignLanguageService{

    getAllByJobseekerId(id){
        return axios.get(`http://hrms-backend-canli.herokuapp.com/api/foreignlanguages/getAllByJobseekerId?id=${id}`)
    }
    
}