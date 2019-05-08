import React from 'react';

import '../normalize.css';
import './App.css';

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
        display: "false",
        selectedDropdown: ""
    }


    ///////////////////////////////////
    onSearchSubmit = async term => {
        const response = await unsplash.get(`search/${this.state.selectedDropdown}`, {
            params : {
                query : term,
                per_page: 30
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


    ///////////////////////////////////
    handleDropdown = (selectedItem) => {
        if(this.state.selectedDropdown === ''){
            this.setState({selectedDropdown: selectedItem})
        } else {
            this.setState({images: []})
            this.setState({selectedDropdown: selectedItem})
        }
    }
    ///////////////////////////////////


    render() {

        const displayImage = this.state.display === "true"
            ? <PreviewImage image={this.state.selectedImage} hiddenDisplay={this.hiddenDisplayImage}/>
            : null;

        const {selectedDropdown} = this.state;
        // eslint-disable-next-line no-unused-vars
        let Content;

        switch (selectedDropdown) {
            case "photos":
                Content = <ImageList　images={this.state.images} display={this.displayImage}/>;
                break;
            case "collections":
                Content = <CollectionList collections={this.state.images}/>;
                break;
            default :
                Content = null
        }

        return (
            <div>
                {displayImage}
                <header>
                        <SearchBar placeholderText="Search" onSubmit={this.onSearchSubmit}/>
                        <div className="search-category">
                            <h2>By</h2>
                            <DropdownList selecetedItem={this.handleDropdown}/>
                        </div>
                </header>

                <div className="ui container" style={{marginTop: '10px'}}>{Content}</div>
            </div>
        )
    }
}

export default App;
