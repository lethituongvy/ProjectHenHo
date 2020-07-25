import React, { Component } from 'react';
import './Home.css'
import {
    Link
} from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
class Home extends Component {
    constructor() {
        super();
        this.state = {
            love: []
        }
        this.getData();
        this.updateUI = this.updateUI.bind(this);
    }
    getData() {
        fetch("http://127.0.0.1:8000/api/love")
            .then(response => {
                return response.json();
            }).then((data) => {
                console.log(data);
                this.updateUI(data);
            }
        );
    }
    updateUI(data) {
        this.setState({
            love: data
        })
    }

    render() {
        const slideImages = [
            'https://nguoiyeudep.com/sites/default/files/styles/slide_542x415/public/shutterstock_579536017_1.jpg?itok=wTk9Nlj7',
            'https://nguoiyeudep.com/sites/default/files/styles/slide_542x415/public/shutterstock_257486560_1.jpg?itok=DRk0Bqku',
            'https://nguoiyeudep.com/sites/default/files/styles/slide_542x415/public/shutterstock_246917896_1.jpg?itok=3JksBZQq',
            'https://nguoiyeudep.com/sites/default/files/styles/slide_542x415/public/shutterstock_207585418_1.jpg?itok=FDUp8bc0',
            'https://nguoiyeudep.com/sites/default/files/styles/slide_542x415/public/shutterstock_571707052_1.jpg?itok=Mm6dKSBB'
        ];
        return (
            <div>
                <div className="home">
                    <div className="mySlide">
                        <Slide>
                            <div className="each-slide" >
                                <div className="item-slide" style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                                    <span></span>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div className="item-slide" style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                                    <span></span>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div className="item-slide" style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                                    <span></span>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div className="item-slide" style={{ 'backgroundImage': `url(${slideImages[3]})` }}>
                                    <span></span>
                                </div>
                            </div>
                            <div className="each-slide">
                                <div className="item-slide" style={{ 'backgroundImage': `url(${slideImages[4]})` }}>
                                    <span></span>
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <form className="dichoi">
                        <div className="formm">
                            <h1>HẸN HÒ ĐI CHƠI</h1>
                    Tôi là <select id="gioitinh" name="gioitinh">
                                <option value="nam">NGƯỜI NAM</option>
                                <option value="nữ">NGƯỜI NỮ</option>
                            </select> &nbsp;  &nbsp;  &nbsp;
                    cần tìm <select id="gioitinh" name="gioitinh">
                                <option value="nam">NGƯỜI NỮ</option>
                                <option value="nữ">NGƯỜI NAM</option>
                            </select>
                            <br /><br />
                    Tuổi từ <select id="tuoi" name="tuoi">
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="19">20</option>
                                <option value="19">21</option>
                                <option value="19">22</option>
                                <option value="19">23</option>
                                <option value="19">24</option>
                                <option value="19">25</option>
                                <option value="19">26</option>
                                <option value="19">27</option>
                                <option value="19">28</option>
                                <option value="19">29</option>
                                <option value="19">30</option>
                            </select> &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;  &nbsp;
                tới <select id="tuoi" name="tuoi">
                                <option value="19">20</option>
                                <option value="19">21</option>
                                <option value="19">22</option>
                                <option value="19">23</option>
                                <option value="19">24</option>
                                <option value="19">25</option>
                                <option value="19">26</option>
                                <option value="19">27</option>
                                <option value="19">28</option>
                                <option value="19">29</option>
                                <option value="19">30</option>
                            </select>
                            <br /><br />
                Để mời <select id="cate" name="cate">
                                <option value="cf">CÙNG ĐI ĂN/ ĐI CHƠI/ CÀ PHÊ</option>
                                <option value="sn">DỰ SINH NHẬT/ DỰ TIỆC</option>
                                <option value="gd">THAM GIA ĐÌNH/ RA MẮT BỐ MẸ</option>
                                <option value="dl">ĐI DU LỊCH, CHƠI DÃ NGOẠI/PICNIC</option>
                            </select>
                            <br /><br />
                Tại TP  &nbsp;&nbsp;<select id="cate" name="cate">
                                <option value="hcm">TP HỒ CHÍ MINH</option>
                                <option value="dn">ĐÀ NẲNG</option>
                                <option value="hn">HÀ NỘI</option>
                                <option value="qb">QUẢNG BÌNH</option>
                                <option value="bd">BÌNH ĐỊNH</option>
                                <option value="qt">QUẢNG TRỊ</option>
                                <option value="qn">QUẢNG NGÃI</option>
                            </select>
                            <br /><br />
                            <button><a href="/chon">THỰC HIỆN</a></button>
                        </div>

                    </form>
                </div>
                <br />
                <div className="container">
                    {this.state.love.map((item) =>
                        <div className="thumbnail">

                            <div className="caption">
                                <p className="if">
                                    <h3><img src={'http://127.0.0.1:8000' + item.image} alt="" width="400px" height="500px" /></h3>
                                    <h1>{item.name}</h1>
                                    <h3>{item.ages}</h3>
                                </p>
                                <p>
                                    <button><Link to={"/love/" + item.id}>Detail</ Link></button>
                                </p>
                            </div>
                        </div>

                    )}
                </div >
            </div>
        )
    }
}
export default Home;





