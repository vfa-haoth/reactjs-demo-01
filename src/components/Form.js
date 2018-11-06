import React, { Component } from 'react';

class Form extends Component {

  constructor(props){
    super(props);
    this.state = {
      txtName : '',
      txtTel : '',
      sltGender : 0,
      isDisplay : false,
      txtAddr : '',
      txtProd : '',
      rbPayment : 'pre',
      cbPolicy : false
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange(event){
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value ;

    this.setState ({
      [name] : value
    });
  }

  onHandleSubmit(event){
    event.preventDefault();
    if(this.state.sltGender === 0){
      this.setState ({
        isDisplay : true
      });
    }
    console.log(this.state);
  }

  render() {

    var warning = this.state.isDisplay ? "Please choose a gender!" : "";

    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <form onSubmit = {this.onHandleSubmit}>
            <div className="form-group">
              <label>Customer's info</label>
              <p>Name</p>
              <input 
                type="text" 
                className="form-control" 
                name="txtName" 
                onChange={this.onHandleChange}
                value={this.state.txtName}/>
              <br/>
              <p>Phone number</p>
              <input type="text" value={this.state.txtTel} name="txtTel" className="form-control" onChange={this.onHandleChange}/>
              <br/>
              <p>Gender</p>
              <select name="sltGender" onChange={this.onHandleChange} className="form-control" value={this.state.sltGender}>
                <option value={0}>(Gender)</option>
                <option value={1}>Female</option>
                <option value={2}>Male</option>
              </select>
              <label className="lblChosenGender">
                {warning}
              </label>
              <br/>
              <p>Address</p>
              <textarea name="txtAddr" value={this.state.txtAddr} className="form-control" rows="3" onChange={this.onHandleChange} />
              <br/>
              <label>Selected product to purchase</label>
              <input type="text" name="txtProd" className="form-control" value={this.state.txtProd} readOnly = {true} />
              <div className="radio">
                <label className="radio-inline">
                  <input type="radio" name="rbPayment" value="pre" checked={this.state.rbPayment === "pre"} onChange={this.onHandleChange} />
                  Prepay
                </label>
                <label className="radio-inline">
                  <input type="radio" name="rbPayment" value="pos" checked={this.state.rbPayment === "pos"} onChange={this.onHandleChange} />
                  Postpay
                </label>
              </div>
              <div className="checkbox">
                <label>
                  <input type="checkbox" value={true} name="cbPolicy" onChange={this.onHandleChange}  checked={this.state.cbPolicy === true}/>
                  By checking this box, you will agree with the policy.
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
