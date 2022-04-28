import { ADD_COMMENT } from "../type/FaceAppType"

export const addCommentAction = (userComment) => {
    return {
        type: ADD_COMMENT,
        userComment: {
            ...userComment,
            avatar: `https://i.pravatar.cc/150?u=${userComment.name}`
        }
    }
}