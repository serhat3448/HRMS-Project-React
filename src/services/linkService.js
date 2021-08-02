import axios from "axios";

export default class LinkService{
    getAllByJobseekerId(id){
        return axios.get(`http://localhost:8080/api/links/getAllByJobseekerId?id=${id}`)
    }
}