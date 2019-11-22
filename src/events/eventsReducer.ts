import { CREATE_NEW_EVENT, LOAD_PUBLIC_EVENTS, LOAD_PUBLIC_EVENTS_SUCCESS } from './eventsActions';

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
            const filteredEvents = action.events.filter(event =>
                !state.events.find(existingEvent => existingEvent.id === event.id));

            return {
                ...state,
                events: [...state.events, ...filteredEvents],
                isLoading: false,
            };

        case CREATE_NEW_EVENT:
            return {
                ...state,
                events: [...state.events, action.event],
            };

        default:
            return state;
    }
};

export default events;