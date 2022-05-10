import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './components/Header/Header';
import UseStateDemo from './pages/Hook/UseStateDemo';
import DemoChangeColor from './pages/Hook/DemoChangeColor';
import UseEffectDemo from './pages/Hook/UseEffectDemo';
import ReduxHook from './pages/Hook/ReduxHook';
import AxiosDemo from './pages/AxiosAPI/AxiosDemo';
import AxiosRFC from './pages/AxiosAPI/AxiosRFC';
import AxiosMiddleWare from './pages/AxiosAPI/AxiosMiddleWare';
import Detail from './pages/Detail/Detail';
import Profile from './pages/Profile/Profile';
import HOC from './pages/HOC/HOC';


function App() {
  return (
    <BrowserRouter>
      {/* Route: khai báo đường dẫn tới component */}
      {/* <Header/> */}

      <Switch>
        <Route exact path="/help" render={(propsRoute) => {
          return <div>
            <p>Help</p>
            {/* <Help/> */}
          </div>
        }} />

        <Route exact path="/home" render={(propsRoute) => {
          return <div>
              <Header />
              <Home {...propsRoute}/>
          </div>
        }} />
          <Route exact path="/about" render={(propsRoute) => {
          return <div>
              <Header />
              <About {...propsRoute}/>
          </div>
        }} />

        {/* <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/usestate" component={UseStateDemo} />
        <Route exact path="/changecolor" component={DemoChangeColor} />
        <Route exact path="/useeffect" component={UseEffectDemo} />
        <Route exact path="/reduxhook" component={ReduxHook} />
        <Route exact path="/axiosdemo" component={AxiosDemo} />
        <Route exact path="/axiosrfc" component={AxiosRFC} />
        <Route exact path="/axiosmiddleware" component={AxiosMiddleWare} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/hoc" component={HOC} />


        <Route exact path="/" component={Home} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
