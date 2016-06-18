"use strict";

import React from 'react';
import ScrumPokerActions from '../actions/scrumPokerActions';

class ScrumPokerList extends React.Component {
    render() {
        var createScrumPokerRow = function (scrumpoker) {
            return (
                <tr key={scrumpoker.id}>
                    <td><a href={"/#scrumpoker/" + scrumpoker.id}>{scrumpoker.id}</a></td>
                    <td>{scrumpoker.name}</td>
                    <td><a href="#" onClick={this.deleteScrumPoker.bind(this, scrumpoker.id)}>Delete</a></td>
                </tr>
            );
        };
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>{this.props.scrumpokers.map(createScrumPokerRow, this)}</tbody>
                </table>
            </div>
        );
    }
}
ScrumPokerList.propTypes = {
    scrumpokers: React.PropTypes.array.isRequired
};

export default ScrumPokerList;
