import './imageList.css';
import React from 'react';
import ImageCard from './ImageCard';
import Pagination from './Pagination';

class ImageList extends React.Component {

    state = {
        currentPage: 1,
        imagePerPage: this.props.perPage
    };


    ///////////////////////////////////
    handleClick = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        });

        this.props.changePage(pageNumber);
    };
    ///////////////////////////////////


    render() {

        const {images} = this.props;
        const renderImages = images.map((image)=>{

            return (
                <ImageCard
                    key={image.id}
                    image={image}
                    display={this.props.display}
                />
            )
        });

        return(
            <div className="display-wrapper">
                <div className="image-list">
                    {renderImages}
                </div>
                <Pagination pageClick={this.handleClick} totalPage={this.props.totalPage}/>
            </div>
        )
    }
}

export default ImageList;
