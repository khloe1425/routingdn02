import React from 'react'
import { useSelector } from 'react-redux'

export default function ReduxHook() {

    //useSelector: kết nối redux và lấy giá trị của reducer
     const {arrComment}= useSelector(state => state.FaceAppReducer)


    return (
        <div className='container py-5'>
            {console.log(arrComment)}
            <div className='bg-light'>
                <div className="row">
                    <div className="col-3">
                        <img src="" alt="" />
                    </div>
                    <div className="col-9">
                        <p className='text-danger'>user1</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea className="form-control" name="" cols="30" rows="5"></textarea>
                    </div>                  
                    <button type="button" className="btn btn-primary">Submit</button>
                </form>

            </div>

        </div>
    )
}
