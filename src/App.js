
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import Navbar from './Components/Navbar'
import FormComponent from "./Components/FormComponent";
import RegisterComponent from "./Components/RegisterComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



class App extends React.Component {

  state = {
    users: []
  }

  callbackFunction = (childData) => {
    console.log("childata", childData);
    this.setState({
      users: [...this.state.users, childData]
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/" exact render={(props) => (<FormComponent {...props} data={this.state.users} />)} />
          <Route path="/register" exact render={(props) => (<RegisterComponent {...props} callback={this.callbackFunction} />)} />
          {/* <Footer/> */}
        </div>
      </Router>
    );
  }
}

export default App;