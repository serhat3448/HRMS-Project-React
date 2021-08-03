import axios from "axios";

export default class JobseekerService {

    getJobseekers() {
        return axios.get("https://hrms-backend-canli.herokuapp.com/api/jobseekers/getall")
    }

    register(values){
        return axios.post("https://hrms-backend-canli.herokuapp.com/api/jobseekers/add",values)
    }

}