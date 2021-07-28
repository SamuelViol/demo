import React from 'react'
import Service from '../services/Service'
import moment from 'moment'

export default class ListaStudent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            students: []
        }
        this.addStudent = this.addStudent.bind(this)
    }

    componentDidMount() {
        Service.getStudent().then((res) =>
            this.setState({ students: res.data }))
    }

    addStudent() {
        this.props.history.push('/add-student')
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista Estudante</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>NascData</th>
                                <th>Idade</th>
                                <th>Ações <button type="button" className="btn btn-outline-secondary btn-sm" onClick={this.addStudent}>Adicionar</button></th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.students.map(
                                    students =>
                                        <tr key={students.id}>
                                            <td>{students.id}</td>
                                            <td>{students.name}</td>
                                            <td>{students.email}</td>
                                            <td>{students.dov}</td>
                                            <td>{students.age}</td>
                                            <td>
                                                <button type="button" className="btn btn-outline-success btn-sm">Visualizar</button>
                                                <button type="button" className="btn btn-outline-primary btn-sm" style={{ marginLeft: "10px" }}>Editar</button>
                                                <button type="button" className="btn btn-outline-danger btn-sm" style={{ marginLeft: "10px" }}>Deletar</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}
