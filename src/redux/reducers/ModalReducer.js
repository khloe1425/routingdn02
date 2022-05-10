
const DefaultComponent = (props) => {
    return (
        <div>
            DefaultComponent
        </div>
    )
}


const initialState = {
    Component: <div>DefaultComponent</div>,
    handleSubmit: () => {

    }
}

export const ModalReducer = (state = initialState, action) => {
    switch (action.type) {

        case "OPEN_FORM":
            state.Component = action.Component;
            state.handleSubmit = action.handleSubmit;
            return { ...state };
       
        default:
            return state
    }
}
