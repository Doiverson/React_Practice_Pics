import React from 'react';
import './PreviewImage.css';
import CrossIcon from './icons/CrossIcon';

class PreviewImage extends React.Component{

    render() {

        const {urls, description} = this.props.image;

        return(
            <div className="PreviewImage">
                <CrossIcon hiddenDisplay={this.props.hiddenDisplay}/>
                <img src={urls.regular} alt={description} />
            </div>
        )
    }


}

export default PreviewImage;
