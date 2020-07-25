import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './LienHe.css';

class LienHe extends Component {
    constructor(){
        super();
        this.onAddInformation = this.onAddInformation.bind(this);
    }
    onAddInformation(event){
        event.preventDefault();
        let name = event.target['name'].value;
        let ages = event.target['ages'].value;
        let phone = event.target['phone'].value;
        let email = event.target['email'].value;
        let date = event.target['date'].value;
        let hours = event.target['hours'].value;
    
        let infor = {
            name: name,
            ages: ages,
            phone: phone,
            email: email,
            date: date,
            hours : hours
        }
        
        let inforInJson = JSON.stringify(infor);
        console.log(inforInJson);
    
        fetch("http://127.0.0.1:8000/api/loves", {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: inforInJson
        })
        .then((response) => {
            console.log(response);
            this.props.history.push("/");
            alert("thanh cong");
            return response.json();
           
        });
    }
    render() {
        return (
            <form onSubmit={this.onAddInformation}>
                <div className="lienhe">
                    <div>
                        <h3>LIÊN HỆ DỊCH VỤ THUÊ NGƯỜI YÊU</h3>
                        <h4>Holine:<span>0356021924</span></h4>
                    </div>
                    <div className="information">
                        <h4>Thông tin khách hàng</h4>
                        <div>
                            <div class="form-group">
                                <label for="name">Họ và tên *</label><br />
                                <input type="text" class="form-control" name="name" />
                            </div>
                            <br />
                            <div class="form-group">
                                <label for="ages">Tuổi *</label><br />
                                <input type="text" class="form-control" name="ages" />
                            </div>
                            <br />
                            <div class="form-group">
                                <label for="phone">Phone *</label><br />
                                <input type="text" class="form-control" name="phone" />
                            </div>
                            <br />
                            <div class="form-group">
                                <label for="email">Email *</label><br />
                                <input type="text" class="form-control" name="email" />
                            </div>
                            <br />
                        </div>
                    </div>
                    <div className="mucdich">
                        <div class="form-item form-item-appointment-datetime form-type-textfield form-group">
                            <label class="control-label" for="edit-appointment-datetime">Thời gian bắt đầu từ
                            <span class="form-required" title="Trường dữ liệu này là bắt buộc.">*</span><br />
                            </label>
                            <input class="form-control form-text required" type="text" name="date" value="21/07/2020 18:55" />
                        </div>
                        <br />
                        <div class="form-group">
                            <label for="hours">Số giờ *</label><br />
                             <input type="text" class="form-control" name="hours" />
                        </div>
                        <br />
                        <div class="form-group">
                            <label for="hours">Địa điểm tại *</label><br />
                            <select id="cate" name="cate">
                                <option value="hcm">TP HỒ CHÍ MINH</option>
                                <option value="dn">ĐÀ NẲNG</option>
                                <option value="hn">HÀ NỘI</option>
                                <option value="qb">QUẢNG BÌNH</option>
                                <option value="bd">BÌNH ĐỊNH</option>
                                <option value="qt">QUẢNG TRỊ</option>
                                <option value="qn">QUẢNG NGÃI</option>
                            </select>
                        </div>
                        <br />
                        <div class="form-group">
                            <label for="add">Địa điểm gặp *</label><br />
                            <input type="text" class="form-control" name="add"></input>
                        </div>
                        <br />
                    </div>
                    <button type="submit">Gửi Yêu Cầu</button>
                </div>
            </form>
        )
    }
}
export default withRouter(LienHe);