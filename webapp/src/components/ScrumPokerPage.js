"use strict";

import React from 'react';
import ScrumPokerList from './ScrumPokerList';
import ScrumPokerStore from '../stores/ScrumPokerStore';

class ScrumPokerPage extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            scrumpokers: ScrumPokerStore.getAllScrumPoker()
        };
    }

    // Start boiler plate
    componentWillMount() {
        ScrumPokerStore.addChangeListener(this._onChange);
    }
    componentWillUnmount() {
        ScrumPokerStore.removeChangeListener(this._onChange);
    }
    _onChange() {
        this.setState({ scrumpokers: ScrumPokerStore.getAllScrumPoker() });
    }
    // End boiler plate

    render () {
        return (
            <div>
                <h2>List of all ongoing Scrum Pokers</h2>
                <ScrumPokerList scrumpokers={this.state.scrumpokers}/>
                <a href="#">Back</a>
            </div>
        );
    }
}

export default ScrumPokerPage;
