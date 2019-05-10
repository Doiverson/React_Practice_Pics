import React from 'react'
import { Pagination } from 'semantic-ui-react'

class PaginationExamplePagination extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            activePage: 1,
        }
    }


    ///////////////////////////////////
    handlePaginationChange = (e, {activePage}) => {
        this.setState({ activePage });
        this.props.pageClick(activePage);
    }
    ///////////////////////////////////


    render(){

        const {activePage} = this.state;

        return(
            <Pagination
                totalPages={this.props.totalPage}
                activePage={activePage}
                onPageChange={this.handlePaginationChange}
                onClick={this.onClick}
            />
        )
    }
}

export default PaginationExamplePagination
