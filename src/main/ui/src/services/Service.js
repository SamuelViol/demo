import axios from 'axios'
import React from 'react'

const API_URL = "http://localhost:8080/api/v1/student"

class Service extends React.Component {
    getStudent(){
        return axios.get(API_URL)
    }
    createStudent(student){
        return axios.post(API_URL, student)
    }
    updateStudent(studentId, student){
        return axios.put(API_URL + `/${studentId}`, student)
    }
}

export default new Service()
