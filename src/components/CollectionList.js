import React from 'react';
import CollectionCard from './CollectionCard';

const CollectionList = (props) => {

    const collections = props.collections.map((collection)=>{

        return (
            <CollectionCard key={collection.id} collection={collection}/>
        )
    })

    return(
        <div className='collection-box'>{collections}</div>
    )
}

export default CollectionList;
