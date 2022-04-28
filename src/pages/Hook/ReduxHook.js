import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'

export default function ReduxHook() {

    //useSelector: kết nối redux và lấy giá trị của reducer
    // const {arrComment}= useSelector((state)=>{
    //     return state.FaceAppReducer
    // })

    const { arrComment } = useSelector(state => state.FaceAppReducer)

    //Khai báo giá trị sẽ cần lưu ở state
    const [userComment, setComment] = useState({
        name:"",
        content:""
    });

    const handleInput = (event) => {
            console.log(event.target);

    }



    const renderComment = () => {

        return arrComment.map((comment) => {
            return <div className="row" key={comment.name}>
                <div className="col-2">
                    <img className='img-fluid' src={comment.avatar} alt="" />
                </div>
                <div className="col-10">
                    <p className='text-danger'>{comment.name}</p>
                    <p>
                        {comment.content}
                    </p>
                </div>
            </div>
        })
    }



    return (
        <div className='container py-5'>
            {console.log(arrComment)}
            <div className='bg-light'>
                {renderComment()}
            </div>
            <div>
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input onChange={(event) => { 
                            handleInput(event)
                         }} type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea onChange={(event) => { 
                            handleInput(event)
                         }} className="form-control" name="" cols="30" rows="5"></textarea>
                    </div>
                    <button type="button" className="btn btn-primary">Submit</button>
                </form>

            </div>

        </div>
    )
}
