import React from 'react';
import './ImageLoadEffect.css';
import LoadableImage from '../LoadableImage/LoadableImage';

class ImageLoadEffect extends React.Component {
  state = {
    Images:[
        { placeholderimageUrl:require('../../assets/images/desktop-small.jpg'),
          imageUrl : require('../../assets/images/desktop.jpg'),
          width:"1500",
          height:"1000",
          isLoaded:false
        },
        {
          placeholderimageUrl : require('../../assets/images/bdx-small.jpg'),
          imageUrl: require('../../assets/images/bdx.jpg'),
          width:"1200",
          height:"800",
          isLoaded:false
        },
        {
          placeholderimageUrl : require('../../assets/images/pexels-photo-small.jpeg'),
          imageUrl : require("../../assets/images/pexels-photo.jpeg"),
          width:"8192",
          height:"5464",
          isLoaded:false
        },
        {
          placeholderimageUrl : require('../../assets/images/pexels-photo-2-small.jpeg'),
          imageUrl : require("../../assets/images/pexels-photo-2.jpeg"),
          width:"8192",
          height:"5461",
          isLoaded:false
        }
    ]
  }
  loadedfunc = (index) =>{
    var imageloaded = Object.assign({}, this.state);
    imageloaded.Images[index].isLoaded = true
    this.setState({
      imageloaded
    })
  }
  render() {
    return (
      <React.Fragment>
        {/* {ResponsiveImage()} */}
        <div className="container imageLoadEffect">
          {
            this.state.Images.map((image,i)=>{
              return (<LoadableImage key={i}
                  index={i}
                  imageUrl={image.imageUrl}
                  placeholderimageUrl={image.placeholderimageUrl}
                  width={image.width}
                  height={image.height}
                  isLoaded={image.isLoaded}
                  loadedfunc={this.loadedfunc}/>)
            })
          }
            
        </div>
      </React.Fragment>
    );
  }
}

export default ImageLoadEffect;