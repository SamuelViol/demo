import React from "react"
import './App.css'
import Header from "./components/Header"
import ListaStudent from "./components/ListaStudent"
import CreateStudent from "./components/CreateStudent"
import Footer from "./components/Footer"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UpdateStudent from "./components/UpdateStudent"

function App() {
  return (

    <div>
      <Router>
          <Header />
          <div className="container">
            <Switch>
              <Route path='/' exact component={ListaStudent}></Route>
              <Route path='/students' component={ListaStudent}></Route>
              <Route path='/add-student' component={CreateStudent}></Route>
              <Route path='/update-student:/id' component={UpdateStudent}></Route>
            </Switch>
          </div>
          <Footer />
      </Router>
    </div>
  )
}

export default App
