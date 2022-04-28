import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { ADD_COMMENT } from '../../redux/type/FaceAppType'
import { addCommentAction } from '../../redux/action/FaceAction'

export default function ReduxHook() {

    //useSelector: kết nối redux và lấy giá trị của reducer
    // const {arrComment}= useSelector((state)=>{
    //     return state.FaceAppReducer
    // })

    const { arrComment } = useSelector(state => state.FaceAppReducer)
    const dispatch = useDispatch();


    //Khai báo giá trị sẽ cần lưu ở state
    const [userComment, setComment] = useState({
        name:"",
        content:""
    });

    const handleInput = (event) => {
            // console.log(event.target);
        let {name,value} = event.target;
        // ...userComment: copy giá trị cũ
        //[name]: value // gán giá trị mới cho thuộc tính cần thay đổi
        //?speard operator : nếu thuộc tính chưa có trong object thì sẽ tạo thuộc tính mới
        //?Ngược lại, nếu đã có thuộc tính thì sẽ gán giá trị mới cho thuộc tính
        setComment({
            ...userComment,
            [name]: value
        })
        // [name]: value // name: "user133"
       // [name]: value // content: "ahihihi"
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

    const handleSubmit = (event) => {
        //chặn sự kiện có sẵn của thẻ
        //cụ thẻ là load trang của thẻ form
        event.preventDefault();
        // console.log("handle submit")
        // let action = {
        //     type:ADD_COMMENT,
        //     userComment:{
        //         ...userComment,
        //         avatar: `https://i.pravatar.cc/150?u=${userComment.name}`
        //     }
        // }

        //? chia tách action thường dùng cho dự án lớn
        //? action creator
        //! action= addCommentAction => action là hàm
        //!=> redux-thunk mơi gắn được hàm vào action

        //gọi hàm addCommentAction(userComment)
        //=> trả về đối tượng {}
        // => lưu đối tượng vào action
        let action = addCommentAction(userComment);
        // action là hàm callback function
        dispatch(action)

        // dispatch(addCommentAction(userComment))
    }

    return (
        <div className='container py-5'>
            {console.log(arrComment)}
            {console.log(userComment)}
            <div className='bg-light'>
                {renderComment()}
            </div>
            <div>
            {/* onSubmit={handleSubmit} */}
                <form onSubmit={(event) => { 
                    handleSubmit(event)
                 }}>
                    <div className="form-group">
                        <label>Name</label>
                        <input onChange={(event) => { 
                            handleInput(event)
                         }} name="name" type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea onChange={(event) => { 
                            handleInput(event)
                         }} name="content"  className="form-control"  cols="30" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>

        </div>
    )
}
