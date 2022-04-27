import React from 'react'
import { useState } from 'react'

export default function UseStateDemo() {

  //useState: giúp khai báo state và phương thức setState trong function component
  //let {id,name} = product;
  // this.state={
  //   like:0
  // }
  // this.setState({
  //   like: this.state.like + 1
  // })
  // let [state,setState] = useState({like:1})//trả về mảng có 2 phần tử [pt1,pt2]

  // let [state,setState] = useState({
  //   like:1, 
  //   user:{taikhoan:"user123", pass:"123"}
  // })
  let [like, setLike] = useState(0);
  let [user, setUser] = useState({taikhoan:"user123", pass:"123"});
  const changeLike = () => {
    // setState({
    //   like: state.like + 1
    // })
      setLike(like + 1);
  }





  return (
    <div className='container py-5'>
      <div className="card" style={{ width: '18rem' }}>
        <img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Like: <span>
            {/* {state.like} */}
            {like}
            </span></p>
          <button onClick={() => {
            changeLike()
          }} className="btn btn-primary">Tăng Like</button>
        </div>
      </div>

    </div>
  )
}
