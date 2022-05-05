import React from 'react'
import { Redirect } from 'react-router-dom';

export default function Profile() {
    //Đã đăng nhập mới được vào trang profile(Thông tin tài khoản)
    //Dựa vào access token để kiểm tra người dùng đăng nhập chưa
    //Nếu đã đăng nhập => ở trang profile
    //Ngược lại => chuyển người dùng ra Login
    // localStorage.getItem("accessToken") => có localStorage
    // !localStorage.getItem("accessToken") => không có localStorage
    if(!localStorage.getItem("accessToken")){
        //không có accessToken trong localStorage
        //=> chưa đăng nhập
        alert("Chưa đăng nhập thì không được truy cập");
        return <Redirect to="/Login" />
    }

  return (
    <div>Profile</div>
  )
}
