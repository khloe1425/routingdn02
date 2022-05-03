import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { TOKEN_CYBER } from '../../ulti/setting';



export default function AxiosRFC(props) {

  // Khai báo state
  const [mangPhim, setMangPhim] = useState([])

  // useEffect(callback function, []) => didmount
  // useEffect(callback function, [mangPhim]) => didupdate
  // useEffect(callback function => return ) => unmount
  useEffect(() => {
    getMovieList();
  }, [])

  // C1: promise
  // const getMovieList = () => {
  //   let promise = axios({
  //     method: 'get',
  //     url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
  //     headers: {
  //       "TokenCybersoft": TOKEN_CYBER
  //     }
  //   });

  //   promise.then((result) => {
  //     //Lay data thanh cong
  //     setMangPhim(result.data.content);
  //   })

  //   promise.catch((error) => {
  //     console.log(error);
  //   })
  // }


  //C2: Async/await
  const getMovieList = async () => {

    try {
      //xử lý thành công
      let result = await axios({
        method: 'get',
        url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        headers: {
          "TokenCybersoft": TOKEN_CYBER
        }
      });

      // console.log(result.data.content)
      setMangPhim(result.data.content)

    } catch (error) {
      //xử lý thất bại / báo lỗi
      console.log(error);
    }
   
  }




  const renderPhim = () => {
    return mangPhim.map((phim) => {
      return <div className="col-4" key={phim.maPhim}>
        <div className="card">
          <img src={phim.hinhAnh} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{phim.tenPhim}</h5>
            <p className="card-text">{phim.moTa}</p>

          </div>
        </div>

      </div>
    })
  }



  return (
    <div className='container'>
      <button onClick={() => {
        getMovieList();
      }} className='btn btn-danger'>Click lấy danh sách phim</button>
      <div className="row">
        {renderPhim()}
      </div>
    </div>
  )



}
