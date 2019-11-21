import { combineReducers } from 'redux';

import authentication from '../authentication/authenticationReducer';
import events from '../events/eventsReducer';

export default combineReducers({
    authentication,
    events,
});