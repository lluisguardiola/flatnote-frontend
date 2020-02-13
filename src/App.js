import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Login from './components/Login'
import About from './components/About'


class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
