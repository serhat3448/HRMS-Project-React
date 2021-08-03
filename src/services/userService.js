import axios from "axios";

export default class UserService{
    login(values){
        return axios.post("http://hrms-backend-canli.herokuapp.com/api/users/login",values)
    }
}