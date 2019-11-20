import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import {connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { LogOutAction } from './../../store/actions/index'

class  Header extends React.Component {
    logout = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        this.props.actions(this.props.isAuthed);
    }
  render(){
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/contact-us">Contact</Link></li>
                    <li><Link to="/calculator">Calculator</Link></li>
                    <li><Link to="#" onClick={this.logout}>Logout</Link></li>
                </ul>
            </nav>
        </header>
    );
  }
}
const mapStatetoProps = (state) =>{
    return{
        isAuthed: state.AuthReducer.isAuthed
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions:bindActionCreators(LogOutAction,dispatch)
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Header);