import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Home from './components/users/Home';
import Detail from './components/users/Detail';
import GioiThieu from './components/users/GioiThieu';
import Footer from './components/auth/Footer';
import Chon from './components/users/Chon';
import TaoUser from './components/users/TaoUser';
import LienHe from './components/users/LienHe';
import Profile from './components/users/Profile';
class App extends Component {
  constructor() {
    super();
    let checkLogin = localStorage.getItem('idUser');
    let check = checkLogin ? "on" : "off";
    this.state = {
      checkLogin: check
    }

  }
  render() {
    return (
      <div className="app">
        <Router>
          <ul className="chinh">
            <li><Link to="/">TRANG CHỦ</Link></li>
            <li><Link to="/gioithieu" exact>GIỚI THIỆU</Link></li>
            <li><Link to="/chon">CHỌN PG/PB</Link></li>
            <li><Link to="/create">TẠO HỒ SƠ PG/PB</Link></li>
            <li><Link to="/lienhe">LIÊN HỆ HẸN HÒ</Link></li>
            <li><Link to="/register">TRANG CA NHAN</Link></li>
          </ul>
          <Switch>
            <Route path="/" exact> <Home /></Route>
            <Route path="/gioithieu" exact> <GioiThieu /></Route>
            <Route path={"/love/:id"}>
              <Detail />
            </Route>
            <Route path='/register'>
              <Profile />
            </Route>
            <Route path="/create">
              <TaoUser />
            </Route>
            <Route path="/chon"> <Chon /></Route>
            {/* {this.state.checkLogin.map((item) =>
              <button className="Register" onClick={this.onLogout}>Logout</button> :
              <Link to="/register"><button className="Register">Register</button></Link>
            )} */}
            <Route path="/myprofile"> <Profile /></Route>
            <Route path="/lienhe" exact> <LienHe /></Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    )
  }
}
export default App;
