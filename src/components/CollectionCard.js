import React from 'react';
import './CollectionCard.css';

class CollectionCard extends React.Component {

    state = {
        collectionArr: []
    }

    componentWillMount() {
        const {preview_photos} = this.props.collection;
        const collectionArr = preview_photos.map(photo => {
            return photo
        })
        this.setState({collectionArr})
    }


    handleShowAll = () => {
        this.props.showImages(this.props.collection.preview_photos);
    }


    render() {

        return(

            <div className="image-box" onClick={this.handleShowAll}>
                <div className="left-column">
                    <img src={this.state.collectionArr[0].urls.regular} alt=""/>
                </div>
                <div className="right-column">
                    <div className="upper"><img src={this.state.collectionArr[1].urls.regular} alt=""/></div>
                    <div className="lower"><img src={this.state.collectionArr[2].urls.regular} alt=""/></div>
                </div>
            </div>

        )

    }
}

export default CollectionCard;
