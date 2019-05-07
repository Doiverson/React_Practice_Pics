import React from 'react';
import './CollectionCard.css';

const CollectionCard = (props) => {

    const {preview_photos} = props.collection;

    return(

        <div className="image-box">
        {preview_photos.map(photo => {
            return <img key={photo.id} src={photo.urls.regular} alt=""/>
        })}
        </div>

    )

}

export default CollectionCard;
