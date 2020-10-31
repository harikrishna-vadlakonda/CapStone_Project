import "./TestingComp.css";
import React from "react";

function template() {
  return (

    <div className="testing-comp container">
      <div className="row">
        <div className="col-sm-4">

        <h2>{JSON.stringify(this.state.info)}</h2>
     

      <form >
        <div className="form-group">
          <input type="text" placeholder="First Name" className="form-control"
          onChange={(e)=>this.setState({
            ...this.state,
            firstname:e.target.value
          })} 
          />
        </div>

        <div className="form-group">
          <input type="text" placeholder="Last name" className="form-control" 
          onChange={(e)=>this.setState({
            ...this.state,
            lastname:e.target.value
          })}
          />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Email" className="form-control" 
          onChange={(e)=>this.setState({
            ...this.state,
            email:e.target.value
          })}
          />
        </div>

        <div className="form-group">
          <input type="password" placeholder="password" className="form-control" 
          onChange={(e)=>this.setState({
            ...this.state,
            password:e.target.value
          })}
          />
        </div>

        <div className="form-group">
          <input type="number" placeholder="Phone number" className="form-control"
          onChange={(e)=>this.setState({
            ...this.state,
            mobilenumber:e.target.value
          })}
          />
        </div>
       
        <div class="form-check"
        onChange={(e)=>this.setState({
          ...this.state,
          gender:e.target.value
        })}
        >
                   
                    <input type="radio" value="male" name="gender" class="form-check-input" />
                    <label className="form-check-label">Male</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="radio" value="female" name="gender" class="form-check-input" />
                    <label className="form-check-label">Female</label>
                </div>

        <div className="form-group"
        onChange={(e)=>this.setState({
          ...this.state,
          city:e.target.value
        })}
        >
                    <select className="form-control">
                        <option>Select City</option>
                        <option>Karimnagar</option>
                        <option>Dhule</option>
                        <option>Warangal</option>
                        <option>Latur</option>
                    </select>
                </div>
                <input value="Register" type="submit" className="btn btn-primary mt-2 mx-auto" onClick={this.getdata} />
      </form>
       
  
    </div>
    </div>
      </div>
  );
};

export default template;
