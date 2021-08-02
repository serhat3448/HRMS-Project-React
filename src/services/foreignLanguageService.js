import axios from "axios";

export default class ForeignLanguageService{

    getAllByJobseekerId(id){
        return axios.get(`http://localhost:8080/api/foreignlanguages/getAllByJobseekerId?id=${id}`)
    }
    
}