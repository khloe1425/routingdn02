import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { layDanhSachPhim } from '../../redux/action/PhimAction';
import { LAY_DANH_SACH_PHIM } from '../../redux/type/PhimType';
import { TOKEN_CYBER } from '../../ulti/setting';

export default function AxiosMiddleWare() {

    const { mangPhim } = useSelector(state => state.PhimReducer)

    const dispatch = useDispatch()
    useEffect(() => {

        //2 loại action
        //loại 1: đối tượng {type:.., mangPhim:[]}
        //Loại 2 được sử dụng khi cần tách code action ở file riêng và action cần xử lý call API
        //loại 2: function => phải sử dụng middleware (redux-thunk)

        // const action = layDanhSachPhim;
        const action = layDanhSachPhim('GP02');

        //dispatch 1 giúp thực thi hàm action
        dispatch(action);




    }, [])


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
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}
