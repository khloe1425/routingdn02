import axios from "axios";
import { TOKEN_CYBER } from "../../ulti/setting";
import { LAY_DANH_SACH_PHIM } from "../type/PhimType";

// export const layDanhSachPhim = (dispatch2) => {
//     //thường sẽ call api trong action
//     let promise = axios({
//         method: 'get',
//         url: 'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
//         headers: {
//             "TokenCybersoft": TOKEN_CYBER
//         }
//     });

//     promise.then((result) => {
//         //Lay data thanh cong
//         //    console.log(result.data.content);

//         //dispatch2: giúp đẩy data từ API lên reducer
//         dispatch2({
//             type: LAY_DANH_SACH_PHIM,
//             mangPhim: result.data.content
//         })
//     })

//     promise.catch((error) => {
//         console.log(error);
//     })

// }

export const layDanhSachPhim = (maNhom = 'GP01') => {

    return (dispatch2) => {
        //thường sẽ call api trong action
        let promise = axios({
            method: 'get',
            url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
            headers: {
                "TokenCybersoft": TOKEN_CYBER
            }
        });

        promise.then((result) => {
            //Lay data thanh cong
            //    console.log(result.data.content);

            //dispatch2: giúp đẩy data từ API lên reducer
            dispatch2({
                type: LAY_DANH_SACH_PHIM,
                mangPhim: result.data.content
            })
        })

        promise.catch((error) => {
            console.log(error);
        })

    }



}