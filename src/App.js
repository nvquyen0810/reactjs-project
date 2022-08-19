import React, {Component} from 'react';

import './App.css';
import Header from "./components/Header";
import Product from "./components/Product";
import State from "./components/State";

class App extends Component {
    constructor(props) {
        super(props);
        // this.onAddNew = this.onAddNew.bind(this);
    }

    onAddNew = () => {
        console.log(this.refs.name.name);
    }

    render() {
        const prod = {
            id: 12,
            name: 'samsung',
            price: 1500
        };
        const users = [
            {
                id: 1,
                name: 'Nguyễn Văn A',
                age: 14
            },
            {
                id: 2,
                name: 'Lê Văn B',
                age: 63
            },
            {
                id: 3,
                name: 'Trần Văn C',
                age: 42
            },
        ]
        const products = [
            {
                id: 1,
                img: 'https://cdn.tgdd.vn/Products/Images/7264/275058/orient-ra-aa0b05r19b-thumb-1-600x600.jpg',
                name: 'Đồng hồ ORIENT SK 41.7 mm Nam RA-AA0B05R19B',
                price: '7.200.000₫',
                des: 'VNPAY GIẢM 500k'
            },
            {
                id: 2,
                img: 'https://cdn.tgdd.vn/Products/Images/7264/270253/orient-star-re-ay0003s00b-nam-060422-101329-600x600.jpg',
                name: 'Đồng hồ ORIENT 42.4 mm Nam RA-AC0J09L10B',
                price: '6.200.000₫',
                des: ''
            },
            {
                id: 3,
                img: 'https://cdn.tgdd.vn/Products/Images/7264/286441/casio-mts-100l-1avdf-nam-1-600x600.jpg',
                name: 'Đồng hồ CASIO 41.3 mm Nam MTS-100L-1AVDF',
                price: '1.745.000₫',
                des: ''
            },
        ]
        const list = products.map((product, index) => {
            return <Product key={index}
                            img={product.img}
                            name={product.name}
                            price={product.price}
            >{product.des}</Product>
        })

        const elements = users.map((user, index) => {
            return <div key={user.id}>
                Tên : {user.name} <br/>
                Tuổi : {user.age} <br/>
            </div>
        })

        return (
            <div>
                <Header/>

                <h5>
                    ID : {prod.id} <br/>
                    Name : {prod.name} <br/>
                    Price : {prod.price} <br/>
                </h5>
                <hr/>
                <h5>{elements}</h5>

                <hr/>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <legend>Thêm sản phẩm</legend>

                    <div className="form-group">
                        <label>Thêm đồng hồ</label>
                        <input type="text" className="form-control" ref="name"/>
                    </div>

                    <button type="submit" className="btn btn-primary" onClick={this.onAddNew}>Thêm</button>
                </div>
                <hr/>

                <div className="container">
                    <div className='row'>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                {list}
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <State />

            </div>
        );
    }
}

export default App;
