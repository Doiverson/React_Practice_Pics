import React from 'react';
import CollectionCard from './CollectionCard';
import Pagination from './Pagination';

class CollectionList extends React.Component {

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
        const collections = this.props.collections.map((collection)=>{

            return (
                <CollectionCard key={collection.id} collection={collection}/>
            )
        })

        return(
            <div className="display-wrapper">
                <div className='collection-box'>{collections}</div>
                <Pagination pageClick={this.handleClick} totalPage={this.props.totalPage}/>
            </div>
        )
    }
}

export default CollectionList;
