import React from 'react'
import { useState } from 'react'

export default function DemoChangeColor() {

  //Xác định state (giá trị cần đổi lưu trong state)
  //Khai báo state, hàm gắn giá trị mới cho state
  const [imgCar,setImg] = useState("./img/CarBasic/products/red-car.jpg");

  const changeColor = (color) => {
      console.log(color);
      setImg(`./img/CarBasic/products/${color}-car.jpg`)
  }

  return (
    <div className='container py-5'>
      <div className="row">
        <div className="col-8">
          <img className='img-fluid' src={imgCar} alt="" />
        </div>
        <div className="col-4">
          <ul className="list-group">
            <li className="list-group-item">
              <button onClick={() => { 
                  changeColor('red');
               }}  className='btn btn-danger'>RED</button>
            </li>
            <li className="list-group-item">
              <button onClick={() => { 
                  changeColor('black');
               }} className='btn btn-dark'>BLACK</button>
            </li>
            <li className="list-group-item">
              <button onClick={() => { 
                  changeColor('silver');
               }} className='btn btn-light'>SLIVER</button>
            </li>
            <li className="list-group-item">
              <button onClick={() => { 
                  changeColor('steel');
               }} className='btn btn-secondary'>STEEL</button>
            </li>

          </ul>

        </div>
      </div>
    </div>
  )
}
