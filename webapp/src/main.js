"use strict";

import React from 'react';
import ReactDom from 'react-dom';
import HomePage from './components/HomePage';
import ScrumPokerPage from './components/ScrumPokerPage';
import Header from './components/Header';
import Footer from './components/Footer';
import InitializeActions from './actions/initializeActions';

InitializeActions.initApp();

class App extends React.Component {
    render() {
        var Child;
        switch(this.props.route) {
            case 'scrumpokers':
                Child = ScrumPokerPage;
                break;
            default:
                Child = HomePage;
                break;
        }
        return (
            <div>
                <Header/>
                <Child/>
                <Footer/>
            </div>
        );
    }

}

function render() {
    var route = window.location.hash.substr(1);
    ReactDom.render(<App route={route}/>, document.getElementById('app'));
}
window.addEventListener('hashchange', render);
render();
