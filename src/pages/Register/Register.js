import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { dangKyAction } from '../../redux/action/QuanLyNDAction';

export default function Register() {

  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      taiKhoan: '',
      matKhau: '',
      email: '',
      soDt:'',
      hoTen:'',
      maNhom:"GP01"
    },validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Tài khoản không được để trống"),
      matKhau: Yup.string().required("Mật khẩu không được để trống").min(3,"Độ dài ít nhất 3 ký tự").max(6,"Đọ dài tối đa 6 ký tự"),
      email:Yup.string().required("Email không được để trống").email("Email không đúng định dạng"),
      hoTen:Yup.string().required("Họ tên không được để trống").matches(/^[A-Z a-z]+$/,"Họ tên không đúng định dạng")
    }),
    onSubmit: values => {
      console.log(values);
      const action = dangKyAction(values);
      dispatch(action);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <label >Tài khoản</label>
        <input onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        name='taiKhoan' type="text" className="form-control" />
        {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
         <div className='alert alert-danger'>{formik.errors.taiKhoan}</div>
       ) : null}
      </div>
      <div className="form-group">
        <label >Mật khẩu</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='matKhau' type="password" className="form-control" />
        {formik.touched.matKhau && formik.errors.matKhau ? (
         <div className='alert alert-danger'>{formik.errors.matKhau}</div>
       ) : null}
      </div>
      <div className="form-group">
        <label >Email</label>
        <input onBlur={formik.handleBlur}  onChange={formik.handleChange} name='email' type="text" className="form-control" />
        {formik.touched.email && formik.errors.email ? (
         <div className='alert alert-danger'>{formik.errors.email}</div>
       ) : null}
      </div>
      <div className="form-group">
        <label >Số đt</label>
        <input onChange={formik.handleChange} name='soDt' type="text" className="form-control" />
      </div>
      <div className="form-group">
        <label >Họ tên</label>
        <input onBlur={formik.handleBlur} onChange={formik.handleChange} name='hoTen' type="text" className="form-control" />
        {formik.touched.hoTen && formik.errors.hoTen ? (
         <div className='alert alert-danger'>{formik.errors.hoTen}</div>
       ) : null}
      </div>
     
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  )
}
