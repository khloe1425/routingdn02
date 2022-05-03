import React, { Component } from 'react'
import axios from 'axios'

export default class AxiosDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mangPhim: []
        }
    }

    getMovieList = () => {
        let promise = axios({
            method: 'get',
            url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            headers: {
                "TokenCybersoft": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMiIsIkhldEhhblN0cmluZyI6IjI4LzA5LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2NDMyMzIwMDAwMCIsIm5iZiI6MTYzNzYwMDQwMCwiZXhwIjoxNjY0NDcwODAwfQ.VTPopaICbOzWIlCgYPhOFPrtszAvDaK0b8_0GZwdEAU"
            }
        });

        promise.then((result) => {
            //Lay data thanh cong
            // console.log(result.data.content);
            this.setState({
                mangPhim: result.data.content
            })
        })

        promise.catch((error) => {
            console.log(error);
        })
    }

    renderPhim = () => {
        return this.state.mangPhim.map((phim) => {
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


    render() {
      
        return (
            <div className='container'>

                  {/* 
                  Han chế gọi setState trong render => khi setState sẽ render lại UI => lại chạy lại setState
                  getMovieList() */}
                {console.log(this.state.mangPhim)}
                <button onClick={() => {
                    this.getMovieList();
                }} className='btn btn-danger'>Click lay danh sach</button>

                <div className="row">
                    {this.renderPhim()}
                </div>
            </div>
        )
    }

    componentDidMount(){
        this.getMovieList();
    }
}
