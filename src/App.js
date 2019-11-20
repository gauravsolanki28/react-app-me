import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import Calculator from './components/Calculator/Calculator';
import { connect } from 'react-redux';
import Loader from "./components/Loader";


 class App extends React.Component {
  componentDidMount(){
  }
  render(){
    let header, lastLocation, loader
    if(this.props.isAuthed ){
      header = <Header />
    }
    if(this.props.isLoading){
      loader = <Loader/>
    }
    lastLocation = window.location.pathname;
    if(lastLocation === "/user/login"){
      lastLocation ="/"; 
    }
    return (
      <React.Fragment>
        <div className="App" >
              <Router>
                {header}
                <Route  path="/" render={()=>(
                  !this.props.isAuthed ? (<Redirect to="/user/login"/>):(<Redirect to={lastLocation}/>))}/>
                <Route  exact path ="/user/login" component={() => <Login />}/>
                <Route  exact path ="/user/signup" component={SignUp} />  
                <Route  exact path ="/" component={Homepage} />  
                <Route  exact path ="/calculator" component={Calculator} />  
            </Router>
        </div>
        {loader}
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
	return {
    isAuthed: state.AuthReducer.isAuthed,
    isLoading: state.LoadingReducer.isLoading
	}
  }
  export default connect(mapStateToProps,null)(App);