import { Route } from "react-router-dom"



export const FormTemplate = (props) => {
    return <Route exact path={props.path} render={(propsRoute) => {
        return <div className="container">
            <div className="row">
                <div className="col-6">
                    <img className="img-fluid" src="https://source.unsplash.com/450x300" alt="" />
                </div>
                <div className="col-6">
                    <props.component {...propsRoute} />
                </div>
            </div>

        </div>
    }} />
}