import React, {Component} from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                    <div className="thumbnail">
                        <img src="https://cdn.tgdd.vn/Category/Quicklink/7978/1\090521-050308.jpg" alt="Đồng hồ thời trang" />
                        <div className="caption">
                            <h3>Title</h3>
                            <p>
                                Content...
                            </p>
                            <p>
                                <a href="#" className="btn btn-primary">Action</a>
                                <a href="#" className="btn btn-default">Action</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;