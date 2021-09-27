import React, { useRef, useState } from 'react'
import {
  Link
} from "react-router-dom";

function Header({setInfo,Info}) {
  const ref = useRef(null);

  const [userInfo, setuserInfo] = useState({
    name:'',
    email:''
  })

  const SignOut = () =>{
    setInfo({
      name:'',
    email:'',
    order:'',
    price:0
    })
  }

  const UserAuth = (e) =>{
    e.preventDefault();
    setInfo({...Info,name:userInfo.name,email:userInfo.email})
    ref.current.click();
  }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
  <a className="navbar-brand font-weight-bold" href="/">Microservices</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active mx-5 font-weight-bold">
      <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item active mx-5 font-weight-bold">
      <Link className="nav-link" to="/NewOrderData">New Order</Link>
      </li>
      {/* <li className="nav-item active mx-5 font-weight-bold">
        <a className="nav-link" href="/">Send Email</a>
      </li> */}
     { (Info.name === '') ? <li className="nav-item active mx-5 font-weight-bold">
        <button className="btn bg-danger text-white" href="/" data-toggle="modal" data-target="#exampleModal">Login</button>
      </li>
      :
      <li className="nav-item active mx-5 font-weight-bold">
        <a className="nav-link" href="/" onClick={SignOut}>{Info.name}</a>
      </li>}
    </ul>
  </div>
</nav>

{/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" ref={ref} className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
                            <form onSubmit={UserAuth}>
                        <div className="form-group">
                          <label>Name</label>
                          <input type="text" className="form-control" name="name" onChange={e => setuserInfo({...userInfo,[e.target.name]:e.target.value})} id="name" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                          <label>Email Id</label>
                          <input type="email" className="form-control" onChange={e => setuserInfo({...userInfo,[e.target.id]:e.target.value})} id="email" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Header
