import React, { Component } from 'react'
import Service from '../services/Service'
import moment from 'moment'

class CreateStudent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            dov: moment()
        .locale('en')
        .format('YYYY-MM-DD')
        }
        this.changeName = this.changeName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changeDtNasc = this.changeDtNasc.bind(this)
        this.saveStudent = this.saveStudent.bind(this)
        this.cancel = this.cancel.bind(this)
    }
    
    saveStudent = (e) => {
        e.preventDefault()
        let student = {name: this.state.name, email: this.state.email, dov: this.state.dov}
        console.log('student: ' + JSON.stringify(student))
        Service.createStudent(student).then(res =>{
            this.props.history.push('/')
        })
    }
    changeName = (event) => {
        this.setState({name: event.target.value})
    }
    changeEmail = (event) => {
        this.setState({email: event.target.value})
    }
    changeDtNasc = (event) => {
        this.setState({dov: event.target.value})
    }
    cancel(){
        this.props.history.push('/')
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2 className="text-center">Adicionar Novo</h2>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Nome: </label>
                                        <input placeholder="Nome" name="name" className="form-control" value={this.state.name} onChange={this.changeName}/>
                                        <label>Email: </label>
                                        <input placeholder="Email" name="email" className="form-control" value={this.state.email} onChange={this.changeEmail}/>
                                        <label>Data de Nascimento: </label>
                                        <input type="date" name="DtNasc" className="form-control" value={this.state.dov} onChange={this.changeDtNasc}/>
                                    </div>
                                        <button type="button" className="btn btn-outline-primary btn-sm" onClick={this.saveStudent}>Salvar</button>
                                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default CreateStudent
