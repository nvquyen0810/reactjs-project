import React, {Component} from 'react';

import './App.css';
import Header from "./components/Header";
import Product from "./components/Product";

class App extends Component {
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
        const elements = users.map((user, index) => {
            return <div key={user.id}>
                Tên : {user.name} <br/>
                Tuổi : {user.age} <br/>
            </div>
        })
        return (
            <div>
                <Header/>
                <h4>
                    ID : {prod.id} <br/>
                    Name : {prod.name} <br/>
                    Price : {prod.price} <br/>
                </h4>
                <hr/>
                <h4>{elements}</h4>
                <hr/>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Product/>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <Product/>
                </div>
            </div>
        );
    }
}

export default App;
