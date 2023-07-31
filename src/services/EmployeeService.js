import axios from "axios";

let EMPLOYEE_API_BASE_URL = "https://empls.onrender.com/api/v1/employees";

class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee,{proxy: {
      host: '104.236.174.88',
      port: 3128
    }});
  }

  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL,{proxy: {
      host: '104.236.174.88',
      port: 3128
    }});
  }

  deleteEmployee(id) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id,{proxy: {
      host: '104.236.174.88',
      port: 3128
    }});
  }

  getEmployeeById(id) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + id,{proxy: {
      host: '104.236.174.88',
      port: 3128
    }});
  }

  updateEmployee(employee, id) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee,{proxy: {
      host: '104.236.174.88',
      port: 3128
    }});
  }
}

export default new EmployeeService();
