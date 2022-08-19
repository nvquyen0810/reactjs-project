import React, {Component} from 'react';

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
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
                }
            ],
            isActive: true
        }
        // this.onSetState = this.onSetState.bind(this);
    }
    onSetState = () => {
        if(this.state.isActive === true) {
            this.setState({
                isActive : false
            })
        } else {
            this.setState({
                isActive : true
            })
        }
    }
    render() {
        const el = this.state.products.map((product, index) => {
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td><img style={{width: 90}} src={product.img} alt={product.name}/></td>
                <td>{product.price}</td>
            </tr>
        })
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Hình ảnh</th>
                        <th>Giá</th>
                    </tr>
                    </thead>
                    <tbody>
                        {el}
                    </tbody>
                </table>
                <button type="button" className="btn btn-success" onClick={this.onSetState}>
                    Click : {this.state.isActive === true ? 'true' : 'false'}

                </button>
            </div>
        );
    }
}

export default State;