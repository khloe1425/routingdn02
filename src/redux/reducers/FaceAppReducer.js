// rxr
import { ADD_COMMENT } from "../type/FaceAppType";

const initialState = {
    arrComment:[
        {name:"yasuo",content:"Ahihihi",avatar:"https://i.pravatar.cc/300"},
        {name:"yasuo 2",content:"Ahihihi",avatar:"https://i.pravatar.cc/300"}
    ]
}

export const FaceAppReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            console.log(action.userComment);
            state.arrComment = [
                ...state.arrComment,
                action.userComment
            ]

            return {...state}
        default:
            return state
    }
}
