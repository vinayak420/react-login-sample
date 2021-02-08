import React from "react";
import ReactDOM from "react-dom";

function FormComponent(props) {



    return (
        <div>
            <form className="login-form">
                <h3>Login</h3>
                <div className="form-group">
                    <input type="text" name="Email" placeholder="Enter Email" className="form-control" />
                    <input type="password" name="password" className="form-control" placeholder="Enter Password" />
                    <button className="btn btn-large submit"> Submit </button>
                </div>
            </form>
            <hr></hr>
            <p id="msg">Not Registered yet? <a href="/register">Sign up here</a></p>
        </div>
    )
}

export default FormComponent