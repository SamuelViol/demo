import React from 'react'
import Service from '../services/Service'
import moment from 'moment'

export default class ListaStudent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            student: []
        }
        this.addStudent = this.addStudent.bind(this)
        this.editStudent = this.editStudent.bind(this)
    }

    componentDidMount() {
        Service.getStudent().then((res) =>
            this.setState({ student: res.data }))
    }

    addStudent() {
        this.props.history.push('/add-student')
    }

    editStudent(id) {
        this.props.history.push(`/update-student/${id}`)
    }

    render() {
        return (
            <div className="container">
                <h2 className="text-center">Lista Estudante</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-sm">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>NascData</th>
                                <th>Idade</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.student.map(
                                    student =>
                                        <tr key={student.id}>
                                            <td>{student.id}</td>
                                            <td>{student.name}</td>
                                            <td>{student.email}</td>
                                            <td>{student.dov}</td>
                                            <td>{student.age}</td>
                                            <td>
                                                <button type="button" className="btn btn-outline-success btn-sm">Visualizar</button>
                                                <button type="button" className="btn btn-outline-primary btn-sm" style={{ marginLeft: "10px" }} onClick={() => this.editStudent(student.id)}>Editar</button>
                                                <button type="button" className="btn btn-outline-danger btn-sm" style={{ marginLeft: "10px" }}>Deletar</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                        
                    </table>
                    <button type="button" className="btn btn-outline-secondary btn-sm float-right" onClick={this.addStudent}>Adicionar</button>
                </div>
            </div>
        )
    }
}