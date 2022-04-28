import React, { Component } from 'react'
import axios from 'axios'

export default class AxiosDemo extends Component {


    getMovieList = () => {
        let promise = axios({
            method: 'get',
            url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            headers:{
                "TokenCybersoft":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCDEkMOgIE7hurVuZyAwMiIsIkhldEhhblN0cmluZyI6IjI4LzA5LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY2NDMyMzIwMDAwMCIsIm5iZiI6MTYzNzYwMDQwMCwiZXhwIjoxNjY0NDcwODAwfQ.VTPopaICbOzWIlCgYPhOFPrtszAvDaK0b8_0GZwdEAU"
            }
        });

        promise.then((result) => { 
            console.log(result.data.content);
         })

         promise.catch((error) => { 
            console.log(error);
         })
    }

    render() {
        return (
            <div>
                <button onClick={() => { 
                    this.getMovieList();
                 }} className='btn btn-danger'>Click lay danh sach</button>
            </div>
        )
    }
}
