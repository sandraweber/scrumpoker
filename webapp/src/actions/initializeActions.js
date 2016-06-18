"use strict";

import ScrumPokerDispatcher from '../dispatcher/scrumPokerDispatcher';
import * as ScrumPokerApi from '../api/scrumpokerApi';
import ActionTypes from '../constants/actionTypes';

export default class InitializeActions {
    static initApp() {
        ScrumPokerApi.getAllScrumPokers().then(scrumpokers => {
            ScrumPokerDispatcher.dispatch({
                actionType: ActionTypes.INITIALIZE,
                initialData: {
                    scrumpokers: scrumpokers
                }
            });
        });
    }
}