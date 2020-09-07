import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { searchJobFromApi } from '../API/JobOfferBDApi'

class JobOffer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            jobOffer: [],
        }
        this.searchedJobId = "";
    }

    _loadJobOffers() {
        searchJobFromApi(this.searchedJobId)
            .then(data => {
                this.setState({ job: data })
            })
    }

    render() {
        return (
            <React.Fragment>
                <h1>Offres d'emploi</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium et inventore, ipsum nemo
                    perspiciatis voluptas.</p>
                <div>{this._loadJobOffers()}</div>
            </React.Fragment>
        );
    }
}

JobOffer.propTypes = {};

export default JobOffer;
