import { LOAD_PUBLIC_EVENTS, LOAD_PUBLIC_EVENTS_SUCCESS } from './eventsActions';

const initialState = {
    events: [],
    isLoading: false,
};

const events = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_PUBLIC_EVENTS:
            return {
                ...state,
                isLoading: true,
            };

        case LOAD_PUBLIC_EVENTS_SUCCESS:
            return {
                ...state,
                events: action.events,
                isLoading: false,
            };

        default:
            return state;
    }
};

export default events;