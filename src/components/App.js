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
        perPage: 10,
        totalPage: 100,
        currentTerm: "",
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
                per_page: this.state.perPage,
            },
        });

        this.setState({images: response.data.results, currentTerm: term})
    }
    ///////////////////////////////////


    ///////////////////////////////////
    changeCurrentPage = async pageNumber => {
        const response = await unsplash.get(`search/${this.state.selectedDropdown}`, {
            params : {
                query : this.state.currentTerm,
                page: pageNumber,
                per_page: this.state.perPage,
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


    ///////////////////////////////////
    showCollectionImages = (images) => {
        this.setState({selectedDropdown: 'photos', images: images})
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
                Content = <ImageList changePage={this.changeCurrentPage} images={this.state.images} display={this.displayImage} perPage={this.state.perPage} totalPage={this.state.totalPage}/>;
                break;
            case "collections":
                Content = <CollectionList changePage={this.changeCurrentPage} collections={this.state.images} showImages={this.showCollectionImages} perPage={this.state.perPage} totalPage={this.state.totalPage}/>;
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
