import axios from "axios";

export default class LinkService{
    getAllByJobseekerId(id){
        return axios.get(`https://hrms-backend-canli.herokuapp.com/api/links/getAllByJobseekerId?id=${id}`)
    }
}