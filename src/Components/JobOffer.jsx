import React, {Component} from 'react';
import PropTypes from 'prop-types';

class JobOffer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobOffer: [],
        }
        this.searchedJob = "";
    }

    render() {
        return (
            <React.Fragment>
                <span>{}</span>
                <button>Details</button>
            </React.Fragment>
        );
    }
}

JobOffer.propTypes = {};

export default JobOffer;
