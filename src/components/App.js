import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import CollectionList from './CollectionList';
import PreviewImage from './PreviewImage';
import DropdownList from './DropdownList';


class App extends React.Component{

    state = {
        images: [],
        selectedImage: "",
        display: "false"
    }


    ///////////////////////////////////
    onSearchSubmit = async term => {
        const response = await unsplash.get('search/collections', {
            params : {
                query : term,
                per_page: 10
            },
        });

        this.setState({images: response.data.results})
    }
    ///////////////////////////////////


    ///////////////////////////////////
    displayImage = image => {
        this.setState({
            display: "true",
            selectedImage: image
        });
    }
    ///////////////////////////////////


    ///////////////////////////////////
    hiddenDisplayImage = () => {
        this.setState({display:"false"})
    }
    ///////////////////////////////////


    render() {

        console.log(this.state.images);

        const displayImage = this.state.display === "true"
            ? <PreviewImage image={this.state.selectedImage} hiddenDisplay={this.hiddenDisplayImage}/>
            : null;

        return (
            <div>
                {displayImage}
                <div className="ui container" style={{marginTop: '10px'}}>
                    <SearchBar placeholderText="Search" onSubmit={this.onSearchSubmit}/>
                    <h2>By</h2><DropdownList/>
                    {/*<ImageList　images={this.state.images} display={this.displayImage}/>*/}
                    <CollectionList collections={this.state.images}/>
                </div>
            </div>
        )
    }
}

export default App;
