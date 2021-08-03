import axios from "axios"

export default class EmployeeService{
    getEmployees(){
        return axios.get("https://hrms-backend-canli.herokuapp.com/api/employees/getall")
    }
}