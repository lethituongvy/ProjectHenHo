import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.css';

class Login extends Component {
    constructor(){
        super();
        localStorage.getItem('user');
        this.onAddUser = this.onAddUser.bind(this)
    }
    onAddUser(event) {
        event.preventDefault();
        let username = event.target['username'].value;
        let password = event.target['password'].value;

        let users = {
            username: username,
            password: password
        }

        let usersInJson = JSON.stringify(users);
        console.log(usersInJson);

        fetch("http://127.0.0.1:8000/api/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: usersInJson
        })
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response);
            // localStorage.removeItem("idUser");
            this.props.history.push("/");
            localStorage.setItem("idUser", response.data);
            // console.log(response);
            
        })
    }
    render() {
        return (
            <div className="login">
                <form onSubmit={this.onAddUser}>
                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-user"></i></span>
                        </div>
                        <input type="text" name="username" class="form-control" placeholder="username" />
                    </div>
                    <br />
                    <div class="input-group form-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text"><i class="fas fa-key"></i></span>
                        </div>
                        <input type="password" name="password" class="form-control" placeholder="password" />
                    </div>
                    <br />
                    <div class="form-group">
                        <button type='submit' >Login</button>
                        {/* <input type="submit" value="Login" class="btn float-right login_btn" /> */}
                    </div>
                </form>
                <div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/ENdPSVG5hYs" title="Hướng dẫn đăng nhập" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        );
    }
}
export default withRouter(Login);