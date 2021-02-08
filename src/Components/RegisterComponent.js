import React from "react";
import ReactDom from "react-dom";

class RegisterComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            name: "",
            number: "",
            email: "",
            password: ""
        }
    }

    handleChange = (event) => {
        if (event.target.name === "name") {
            setTimeout(() => {
                event.target.value.length < 2 ? this.message = "Please enter a valid name" : this.message = " "
            }, 3000);
        } else
            if (event.target.name === "number") {
                setTimeout(() => {
                    event.target.value.length !== 10 ? this.message = "Please enter a valid phone number" : this.message = " "
                }, 3000);
            } else
                if (event.target.name === "password") {
                    setTimeout(() => {
                        event.target.value.length < 4 ? this.message = "Password too short" : this.message = " "
                    }, 3000);
                } if (event.target.name === "repassword") {

                    event.target.value !== this.state.password ? this.message = "Passwords do not match" : this.message = " "

                } else {
            this.setState({
                [event.target.name]: event.target.value
            })
        }
    }

    message = "";

    sendData = (event) => {
        event.preventDefault();
        this.props.callback(this.state);
    }

    render() {
        return (
            <div>
                <form className="register-form" onSubmit={this.sendData}>
                    <h3>register</h3>
                    <div className="form-group">
                        <div id="first-row">
                            <input type="text" placeholder="Enter Name" name="name" className="form-control" required={true} onChange={this.handleChange}></input>
                            <input type="text" placeholder="Enter Phone Number" name="number" className="form-control" required={true} onChange={this.handleChange}></input>
                        </div>
                        <input type="email" placeholder="Enter Email" name="email" className="form-control" required={true} onChange={this.handleChange}></input>
                        <div id="last-row">
                            <input type="password" placeholder="Enter Password" name="pasword" className="form-control" required={true} onChange={this.handleChange}></input>
                            <input type="password" placeholder="Re-enter Password" name="repassword" className="form-control" required={true} onChange={this.handleChange}></input>
                        </div>
                        <button className="btn btn-large submit"> Submit </button>
                    </div>
                </form>
                <hr></hr>
                <p id="msg">Already Registered?<a href="/">Login here</a></p>
                <p id="error">{this.message}</p>
            </div>
        )
    }
}

export default RegisterComponent;