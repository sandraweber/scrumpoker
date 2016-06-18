"use strict";
import ScrumPokerDispatcher from '../dispatcher/scrumPokerDispatcher';
import ActionTypes from '../constants/actionTypes';
import { EventEmitter } from 'events';
import assign from 'object-assign';
import _ from 'lodash';

var CHANGE_EVENT = 'change';
var _scrumpokers = [];

var ScrumPokerStore = assign({}, EventEmitter.prototype, {
    // Start boiler plate code
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    },
    // End boiler plate code

    getAllScrumPoker() {
        return _scrumpokers;
    },
    getScrumPokerById(id) {
        return _.find(_scrumpokers, {id: id});
    }
});
export default ScrumPokerStore;

ScrumPokerDispatcher.register(function(action) {
    switch(action.actionType) {
        case ActionTypes.INITIALIZE:
            _scrumpokers = action.initialData.scrumpokers;
            ScrumPokerStore.emitChange();
            break;
        default:
// no op
    }
});