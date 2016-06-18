"use strict";

import React from 'react';


class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <a href="#">Home</a> | <a href="#scrumpokers">Scrum-Poker List</a>
            </div>
        );
    }
}

export default Header;
