import axios from "axios"
import { TOKEN_CYBER } from "../../ulti/setting";


export const dangKyAction = (thongTinND) => {
    console.log(thongTinND);
    return (dispatch2) => { 
        const promise = axios({
            method: 'post',
            url: 'https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            headers:{
                "TokenCybersoft":TOKEN_CYBER
            },
            data:thongTinND
          });

          promise.then(result => {
              console.log(result);
              alert("Đăng ký thành công")
          });
          promise.catch(error => {
            console.log(error);
        });

     }
}