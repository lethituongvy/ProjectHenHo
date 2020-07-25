import React, { Component } from 'react';
import './Deatil.css';
import { withRouter } from 'react-router';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loves: []
        }
        let id = this.props.match.params.id;
        this.getData(id);
        this.updateUI = this.updateUI.bind(this);

    }
    getData(id) {

        fetch("http://127.0.0.1:8000/api/love/" + id)
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
            loves: data
        })
    }
    render() {
        return (
            <div>
                <div className="container">
                    {this.state.loves.map((item) =>
                        <div className="thumbnail">
                            <h3><img src={'http://127.0.0.1:8000' + item.image} alt="" width="400px" height="400px" /></h3>
                            <div className="caption">
                                <h1>{item.name}</h1>
                                <h3>{item.ages}</h3>
                                <h3>{item.price} 1 ngay</h3>
                                <h3>{item.description}</h3>
                                <p>
                                    <button><a href="/lienhe">LIÊN HỆ NGAY </a></button>
                                </p>

                            </div>
                        </div>
                    )}
                </div >
            </div>
        )
    }
}
export default withRouter(Detail);





