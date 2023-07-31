import axios from "axios";

let EMPLOYEE_API_BASE_URL = "https://empls.onrender.com/api/v1/employees";


// class EmployeeService {
//   saveEmployee(employee) {
//     return axios(EMPLOYEE_API_BASE_URL, employee,{
//       method: 'POST',
//       mode: 'cors',
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//       },
//       withCredentials: true,
//       credentials: 'same-origin',});
//   }

//   getEmployees() {
//     return axios (EMPLOYEE_API_BASE_URL,{
//       method: 'GET',
//       mode: 'cors',
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//       },
//       withCredentials: true,
//       credentials: 'same-origin',});
//   }

//   deleteEmployee(id) {
//     return axios(EMPLOYEE_API_BASE_URL + "/" + id,{
//       method: 'DELETE',
//       mode: 'cors',
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//       },
//       withCredentials: true,
//       credentials: 'same-origin',});
//   }

//   getEmployeeById(id) {
//     return axios(EMPLOYEE_API_BASE_URL + "/" + id,{
//       method: 'GET',
//       mode: 'cors',
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//       },
//       withCredentials: true,
//       credentials: 'same-origin',});
//   }

//   updateEmployee(employee, id) {
//     return axios(EMPLOYEE_API_BASE_URL + "/" + id, employee,{
//       method: 'PUT',
//       mode: 'cors',
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Content-Type': 'application/json',
//       },
//       withCredentials: true,
//       credentials: 'same-origin',});
//   }
// }

// export default new EmployeeService();
class EmployeeService {
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
  }

  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  deleteEmployee(id) {
    return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
  }

  getEmployeeById(id) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
  }

  updateEmployee(employee, id) {
    return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
  }
}

export default new EmployeeService();
