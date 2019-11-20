import React from 'react';
const SignUpForm = (props) =>{
    const {fname, lname, email, password, confirmPassword,errors}= props.state 
    const {handleChange, signUp} = props;
    return(
        <div className="card">
            <div className="card-header">
                <h3>Sign Up</h3>
            </div>
            <div className="card-body">
            <form>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input type="text" name="fname" value={fname} onChange={handleChange} className="form-control" placeholder="First Name" />
                    {errors.fname}
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input type="text" name="lname" value={lname} onChange={handleChange.bind(this)} className="form-control" placeholder="Last Name" />
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input type="email" name="email" value={email} onChange={handleChange.bind(this)} className="form-control" placeholder="username" />
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="password" name="password" value={password} onChange={handleChange.bind(this)} className="form-control" placeholder="password" />
                </div>
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                    <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange.bind(this)} className="form-control" placeholder="confirm password" />
                </div>
            </form>
        </div>
            <div className="card-footer">
                <div className="d-flex justify-content-center links">
                    <input type="submit" onClick={signUp} value="Sign up" className="btn float-right login_btn" />
                </div>
            </div>
        </div>
    )
}
export default SignUpForm