import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import PreviewImage from './PreviewImage';


class App extends React.Component{

    state = {
        images : [],
        selectedImage: "",
        display: "false"
    }


    ///////////////////////////////////
    onSearchSubmit = async term => {
        const response = await unsplash.get('search/photos', {
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


    render() {

        const displayImage = this.state.display === "true"
            ? <PreviewImage image={this.state.selectedImage} hiddenDisplay={this.hiddenDisplayImage}/>
            : null;

        return (
            <div>
                {displayImage}
                <div className="ui container" style={{marginTop: '10px'}}>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
                    <ImageList　images={this.state.images} display={this.displayImage}/>
                </div>
            </div>
        )
    }
}

export default App;
