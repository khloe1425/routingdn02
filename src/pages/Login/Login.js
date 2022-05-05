import React, { useState } from 'react'
import {Prompt} from 'react-router-dom';


export default function Login(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
    isShowPopup:true
  });

  const handleInput = (event) => {
    // console.log(event.target);
    const { value, name } = event.target;

    setState({
      ...state,
      [name]: value
    })

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (state.username === "cybersoft") {
      //dang nhap thanh cong
      console.log(props);
      // Login => Home => (back) Login
      props.history.push("/home");

      //Login (thay thế) <=> Home => (back) về 1 trang trước đó trong history
      // props.history.replace("/home");

    } else {
      alert("tài khoản không đúng");
    }


  }

  return (
    <div className='container' onSubmit={handleSubmit}>
      <form className='w-50'>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Username</label>
          <input name='username' onChange={(event) => { handleInput(event) }} type="text" className="form-control" id="exampleInputEmail1" />

        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input name='password' onChange={handleInput} type="password" className="form-control" id="exampleInputPassword1" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <button onClick={() => {
          // Login => (back) Home
          props.history.goBack()
        }} type="button" className="btn btn-primary">GoBack</button>

        <Prompt when={state.isShowPopup} message={(location) => { 
          console.log(location);
            return "Bạn có muốn rời đi không?"
         }}  />


      </form>
    </div>

  )
}
