import React, { Component } from 'react';
import Product from './components/Product';
import Form from './components/Form';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      products : [
        {
          id : 1,
          name : 'Iphone X',
          price : 18000000,
          image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzK2eeMKLsge654g_lZRwksVAzCWAJyjT_-IRoHVUNsUxIBe2G',
          status : true
        },
        {
          id : 2,
          name : 'Iphone Xs',
          price : 22000000,
          image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrK5IviMgLsE15DD4OWV5wDeESLdC-ojNeVRV4AugQOLq70E',
          status : true
        },
        {
          id : 3,
          name : 'Iphone Xs Plus',
          price : 24000000,
          image : 'data:image/jpeg;base64,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',
          status : true
        }
      ],
      onAddToCart : ''
    };
    this.onAddProduct = this.onAddProduct.bind(this);
  }

  onAddProduct(){
    console.log(this.refs.name.value)
  }

  onAddToCart(){

  }

  render() {
    let elements = this.state.products.map((product, index) => {
      let result = '';
      if(index % 2 === 0){
          result = <Product 
                      key={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      status={product.status}
                  />
      }
      return result;
    });

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <a className="navbar-brand" href="#a">Final</a>
            <ul className="nav navbar-nav">
              <li>
                <a href="#a">Product</a>
              </li>
              <li>
                <a href="#a">Form</a>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="panel panel-danger">
                  <div className="panel-heading">Add product</div>
                  <div className="panel-body">
                    <div className="form-group">
                      <input type="text" className="form-control" ref="name"/>
                    </div>
                      <button type="submit" className="btn btn-primary" onClick = {this.onAddProduct} >Submit</button>
                    </div>
                </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              {elements}
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <Form onAddToCart = {this.onAddToCart}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
