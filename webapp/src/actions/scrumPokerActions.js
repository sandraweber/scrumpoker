"use strict";

import ScrumPokerDispatcher from '../dispatcher/scrumPokerDispatcher';
import * as ScrumPokerApi from '../api/scrumpokerApi';
import ActionTypes from '../constants/actionTypes';

export default class ScrumPokerActions {
    static createScrumPoker(id) {
        ScrumPokerApi.createScrumPoker(id);
        ScrumPokerDispatcher.dispatch({
            actionType: ActionTypes.CREATE_SCRUMPOKER,
            id: id
        });
    }
}