import axios from "axios";

export default class JobseekerService {

    getJobseekers() {
        return axios.get("http://hrms-backend-canli.herokuapp.com/api/jobseekers/getall")
    }

    register(values){
        return axios.post("http://hrms-backend-canli.herokuapp.com/api/jobseekers/add",values)
    }

}