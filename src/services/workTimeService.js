import axios from "axios";

export default class WorkTimeService{
    getWorkTimes(){
        return axios.get("https://hrms-backend-canli.herokuapp.com/workTime/getAll")
    }
}