import React, { Component } from 'react';
import _ from "lodash";

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            term: ''
        };

        //this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange = (term) => {
        const {onSearch} = this.props
        this.setState({
            term: term
        });
        onSearch(term);
    };


    render() {
        const {term} = this.state;
        const {activeSearch} = this.props;
        let output;
        if(activeSearch == null){
            output = "";
        } else {
            output = term;
        }
        return (
            <div id="SearchFaculty" className="col-md-12">

            <div className="form-group form-inline " >
                <label>Search </label>
                <input
                    className="form-control pull-right"
                    value={output}
                    onChange={(e)=>this.onInputChange(e.target.value)} />
            </div>
            </div>
        );
    }
}

export default Search;
