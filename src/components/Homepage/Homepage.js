import React from 'react';
import './homepage.css'

class Homepage extends React.Component {
  state={
    loaded:false,
    opacity:0,
    placeholderOpacity:1
  }
  render() {
    const desktop_small = require('../../assets/images/desktop-small.jpg');
    const desktop_large = require('../../assets/images/desktop.jpg');
    const nhs_small = require('../../assets/images/KBAus-low.jpg');
    const nhs_large = 'https://nhs-dynamic.secure.footprint.net/Images/Homes/KBAus746/28125621-191001.jpg?format=jpg';
    const pexel_small = require('../../assets/images/pexels-photo-small.jpeg');
    const pexel_large = "https://images.pexels.com/photos/2765872/pexels-photo-2765872.jpeg?auto=compress&cs=tinysrgb&dpr=3";
    const pexel_small_2 = require('../../assets/images/pexel-photo-small-2.jpeg');
    const pexel_large_2 = "https://images.pexels.com/photos/3133685/pexels-photo-3133685.jpeg?auto=compress&cs=tinysrgb&dpr=2"
    return (
        <React.Fragment>
          {/* {ResponsiveImage()} */}
          <div className="container homepage">
            <div className="imageListing">
              <div className="imageParent" style={{opacity:this.state.opacity}}  >
                      <img className="realImage" src={nhs_large} alt="me" />
              </div>
              <img className="placeholderImage" src={nhs_small}  alt="small" style={{opacity:this.state.placeholderOpacity}}  /> 
            </div>
            <div className="imageListing">
              <div className="imageParent" style={{opacity:this.state.opacity}} >
                      <img className="realImage" src={pexel_large} alt="me" />
              </div>
              <img className="placeholderImage" src={pexel_small}  alt="small" style={{opacity:this.state.placeholderOpacity}} /> 
            </div>
            <div className="imageListing">
              <div className="imageParent" style={{opacity:this.state.opacity}} >
                      <img className="realImage" src={desktop_large} alt="me" />
              </div>
              <img className="placeholderImage" src={desktop_small}  alt="small" style={{opacity:this.state.placeholderOpacity}} /> 
            </div>
            <div className="imageListing">
              <div className="imageParent" style={{opacity:this.state.opacity}} >
                      <img className="realImage" src={pexel_large_2} alt="me" onLoad ={() => this.setState({loaded:true,opacity:1})}/>
              </div>
              <img className="placeholderImage" src={pexel_small_2}  alt="small" style={{opacity:this.state.placeholderOpacity}} /> 
            </div>
          </div>
        </React.Fragment>
    );
  }
}

export default Homepage;