import React, { Component } from 'react'

export default class Header extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {

    //     }
    // }
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://twitter.com/home" className="navbar-brand">Estudante Controle</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

