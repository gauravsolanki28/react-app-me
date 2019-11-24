import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { ModalinAction } from './../../store/actions/index'

class  Header extends React.Component {
    login = (e) => {
        e.preventDefault();
        this.props.ModalinAction(this.props.isModalWindow)
    }

  render(){
      console.log(this.props)
      let login;
      if(this.props.isAuthed){
        login = "Welcome Gaurav"
      }
      else{
        login = "Login"
      }
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/imageloadeffect">Loadable-Image</Link></li>
                    <li><Link to="/contact-us">Contact</Link></li>
                    <li><Link to="/calculator">Calculator</Link></li>
                    <li><Link to="#" onClick={this.login}>{login}</Link></li>
                </ul>
            </nav>
        </header>
    );
  }
}
const mapStatetoProps = (state) =>{
    return{
        isModalWindow: state.ModalReducer.isModalWindow
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ModalinAction:bindActionCreators(ModalinAction,dispatch)
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Header);