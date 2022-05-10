import { Fragment } from "react"
import { Route } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

export const HomeTemplate = (props) => {
    //props (path, component)
    return <Route exact path={props.path} render={(propsRoute) => {
        return <Fragment>
            <Header />
            {/* <Home {...propsRoute}/> */}
            <props.component  {...propsRoute} />

            <Footer />
        </Fragment>
    }} />
}