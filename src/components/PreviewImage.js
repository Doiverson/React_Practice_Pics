import React from 'react';
import './PreviewImage.css';

class PreviewImage extends React.Component{

    render() {

        const {urls, description} = this.props.image;

        return(
            <div className="PreviewImage">
                <img src={urls.regular} alt={description} />
            </div>
        )
    }


}

export default PreviewImage;
