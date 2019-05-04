import React from 'react';

class ImageCard extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            spans: 0
        }

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({spans})
    }

    downloadImage = () => {

        const {image} = this.props;
        this.props.display(image);
    }


    render() {
        const {description, urls} = this.props.image;

        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
                <img className="selected-image" ref={this.imageRef} alt={description} src={urls.regular} onClick={this.downloadImage}/>
            </div>
        )
    }
}

export default ImageCard;
