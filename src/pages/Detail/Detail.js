import React from 'react'

export default function Detail(props) {
  return (
    <div>
        {/* {console.log(props)} */}
        
        {/* 
        Truyền data bằng params của url:
        + dữ liệu không cần bảo mật
        + không tốn lưu trữ dữ liệu
        + truyền data đơn giản
        http://localhost:3000/detail/456321467 
        */}
        Tham số: {props.match.params.id}
    </div>
  )
}
