import { LAY_DANH_SACH_PHIM } from "../type/PhimType"
// rxr
const initialState = {
    mangPhim: []
}

export const PhimReducer = (state = initialState, action) => {
    switch (action.type) {
        case LAY_DANH_SACH_PHIM:
            state.mangPhim = action.mangPhim

            return {...state}

        default:
            return state
    }
}
