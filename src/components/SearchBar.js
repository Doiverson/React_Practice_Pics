import React from 'react';

class SearchBar extends React.Component{

    onInputChange = (event) => {
        console.log(event.target.value)
    }

    onInputClick = () => {
        console.log("Hi");
    }

    render() {
        return(
            <div className="ui segment">
                <form className="ui form" action="">
                    <div className="field">
                        <label>Image Search</label>
                        <input type="text" onClick={this.onInputClick} onChange={this.onInputChange}/>
                    </div>

                </form>
            </div>
        )
    }
}

export default SearchBar;
