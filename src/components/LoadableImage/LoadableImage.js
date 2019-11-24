import React from 'react';
import './LoadableImage.css'

const LoadableImage = (props) =>{
    const {imageUrl, placeholderimageUrl,isLoaded,index,loadedfunc,width,height} = props

    return(
        <div className="imageListing">
            <div className="imageParent">
                <img className="realImage" style={{opacity:isLoaded?'1':"0"}} src={imageUrl} alt="me" onLoad={()=>loadedfunc(index)} />
            </div>
            <img className="placeholderImage" style={{opacity:isLoaded?"0":"1"}} src={placeholderimageUrl} width={width} height={height} alt="small"  />
        </div>
    )
}

export default LoadableImage