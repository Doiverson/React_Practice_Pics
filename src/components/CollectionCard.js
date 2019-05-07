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

    render() {

        console.log(this.state.collectionArr);

        return(

            <div className="image-box">
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
