import React, {Component} from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.onAddToCart = this.onAddToCart.bind(this);
    }
    onAddToCart(){
        alert(this.props.name);
    }
    render() {
        return (
            <div>
                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div className="thumbnail">
                        <img src={this.props.img} alt={this.props.name} />
                        <div className="caption">
                            <p>{this.props.children}</p>
                            <h5>{this.props.name}</h5>
                            <p>Giá: {this.props.price}</p>
                            <p>
                                <a href="#" className="btn btn-primary" onClick={ this.onAddToCart }>Mua ngay</a>
                                <a href="#" className="btn btn-default">Xem chi tiết</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;