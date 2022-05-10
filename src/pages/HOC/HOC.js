import React, { useState } from 'react'
import Modal from './Modal'
import Login from '../Login/Login'
import Register from '../Register/Register'
import { useDispatch } from 'react-redux';

export default function HOC() {

    //Lưu vào state component cần load trên modal
    const [componentForm,setComponentForm] = useState(<Login/>);

    const dispatch = useDispatch();
    return (
        <div className='container'>
            <div>
                <button data-toggle="modal" data-target="#exampleModal" className="btn btn-danger" onClick={() => { 
                    // setComponentForm(<Login/>)
                    const action ={
                        type:'OPEN_FORM',
                        Component:<Login/>,
                        handleSubmit:() => { 
                            alert("Xử lý Login");
                         }
                    }

                    dispatch(action);

                 }} >Login</button>
                <button data-toggle="modal" data-target="#exampleModal" className="btn btn-warning" onClick={() => { 
                    // setComponentForm(<Register/>)
                    const action ={
                        type:'OPEN_FORM',
                        Component:<Register/>,
                        handleSubmit:() => { 
                            alert("Xử lý Register");
                         }
                    }

                    dispatch(action);

                 }}>Register</button>
            </div>

        
            <Modal component={componentForm} />
        </div>
    )
}
