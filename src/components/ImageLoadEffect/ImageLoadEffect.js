import React from 'react';
import './ImageLoadEffect.css';
import LoadableImage from '../LoadableImage/LoadableImage';

class ImageLoadEffect extends React.Component {
  state = {
    Images:[
        { placeholderimageUrl:require('../../assets/images/desktop-small.jpg'),
          imageUrl : require('../../assets/images/desktop.jpg'),
          isLoaded:false
        },
        {
          placeholderimageUrl : require('../../assets/images/KBAus-low.jpg'),
          imageUrl: 'https://nhs-dynamic.secure.footprint.net/Images/Homes/KBAus746/28125621-191001.jpg?format=jpg',
          isLoaded:false
        },
        {
          placeholderimageUrl : require('../../assets/images/pexels-photo-small.jpeg'),
          imageUrl : "https://images.pexels.com/photos/2765872/pexels-photo-2765872.jpeg?auto=compress&cs=tinysrgb&dpr=3",
          isLoaded:false
        },
        {
          placeholderimageUrl : require('../../assets/images/pexel-photo-small-2.jpeg'),
          imageUrl : "https://images.pexels.com/photos/3133685/pexels-photo-3133685.jpeg?auto=compress&cs=tinysrgb&dpr=2",
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
        <div className="container homepage">
          {
            this.state.Images.map((image,i)=>{
              return (<LoadableImage key={i}
                  index={i}
                  imageUrl={image.imageUrl}
                  placeholderimageUrl={image.placeholderimageUrl}
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