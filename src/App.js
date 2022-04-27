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


function App() {
  return (
    <BrowserRouter>
      {/* Route: khai báo đường dẫn tới component */}
      <Header/>
      
      <Switch>
        <Route exact path="/help" render={(propsRoute) => { 
            return<div>
                <p>Help</p>
                {/* <Help/> */}
            </div>
         }}/>

        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/usestate" component={UseStateDemo} />
        <Route exact path="/changecolor" component={DemoChangeColor} />
        <Route exact path="/useeffect" component={UseEffectDemo} />
        <Route exact path="/reduxhook" component={ReduxHook} />


        <Route exact path="/" component={Home} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
