import React from 'react'
import { useState, useEffect } from 'react';

export default function UseEffectDemo() {

    let [like, setLike] = useState(0);
    let [number, setNumber] = useState(0);
    //?didmount, didupdate, willunmount
    //? chạy sau khi UI render xong

    // useEffect(() => { 
    //     //thay thế cả 2 lifecycle didmount, didupdate
    //     //chạy khi load  component
    //     console.log('didmount');
    //     //chạy khi đổi giá trị của state
    //     console.log('didupdate');
    //  })

    //?thay thế lifecycle didmount
    // useEffect(() => {
    //     console.log('didmount');
    // }, []);// chạy 1 lần useEffect


    //?Khi like thay đổi thì chay useEffect
    // useEffect(() => {
    //     console.log('didupdate like');
    // }, [like]);


    useEffect(() => { 
            return () => { 
                //chạy trước khi rời khỏi component hoặc component bị ẩn
                console.log("unmount")
             }
     },[]);//chạy 1 lần





    const changeLike = () => {
        setLike(like + 1);
    }

    return (

        <div className='container py-5'>
            {console.log("render UI")}

            <div className="card" style={{ width: '18rem' }}>
                <img src="https://picsum.photos/300/200" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Like: <span>

                        {like}
                    </span></p>
                    <button onClick={() => {
                        changeLike()
                    }} className="btn btn-primary">Tăng Like</button>
                    <p className="card-text">number: <span>
                        {number}
                    </span></p>
                    <button onClick={() => {
                       setNumber(number + 1)
                    }} className="btn btn-primary">Tăng Number</button>
                </div>
            </div>

        </div>
    )
}
