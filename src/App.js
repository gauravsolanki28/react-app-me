import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Login from './components/Authentication/Login';
import SignUp from './components/Authentication/SignUp';
import Calculator from './components/Calculator/Calculator';
import ImageLoadEffect from './components/ImageLoadEffect/ImageLoadEffect'
import ModalWindow from './components/ModalWindow/ModalWindow'
import { connect } from 'react-redux';


 class App extends React.Component {

  render(){
    console.log(this.props)
    let modalWindow;

    // let  lastLocation
    // lastLocation = window.location.pathname;
    // if(lastLocation === "/user/login"){
    //   lastLocation ="/"; 
    // }
    if(this.props.isModalWindow){
      modalWindow = <ModalWindow />
    }
    return (
      <React.Fragment>
        <div className="App" >
              <Router>
                <Header />
                <main>
                  <Route path ="/" component={Homepage} />
                  {/* <Route  path="/" render={()=>(
                    !this.props.isAuthed ? (<Redirect to="/user/login"/>):(<Redirect to={lastLocation}/>))}/>
                  <Route  exact path ="/user/login" component={() => <Login />}/> */}
                  <Route  exact path ="/user/signup" component={SignUp} />  
                  <Route  exact path ="/calculator" component={Calculator} /> 
                  <Route  exact path ="/imageloadeffect" component={ImageLoadEffect} /> 
                </main>
            </Router>
            {modalWindow}
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
	return {
    isAuthed: state.AuthReducer.isAuthed,
    isModalWindow: state.ModalReducer.isModalWindow
	}
  }
  export default connect(mapStateToProps,null)(App);