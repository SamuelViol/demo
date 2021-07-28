import axios from 'axios'
import React from 'react'

const API_URL = "http://localhost:8080/api/v1/student"

class Service extends React.Component {
    getStudent(){
        return axios.get(API_URL)
    }
    createStudent(students){
        return axios.post(API_URL, students)
    }
    updateStudent(studentsId){
        return axios.put(API_URL+'/'+studentsId)
    }
}

export default new Service()
