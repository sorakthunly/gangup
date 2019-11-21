import { get } from '../api/fetch';

export const LOAD_PUBLIC_EVENTS = 'LOAD_PUBLIC_EVENTS';
export const LOAD_PUBLIC_EVENTS_SUCCESS = 'LOAD_PUBLIC_EVENTS_SUCCESS';

export const loadPublicEvents = () => ({
    type: LOAD_PUBLIC_EVENTS,
});

export const loadPublicEventsSuccess = events => ({
    events,
    type: LOAD_PUBLIC_EVENTS_SUCCESS,
});

export const loadPublicEventsAsync = () => dispatch => {
    dispatch(loadPublicEvents());

    return get('/events/public')
        .then(events => dispatch(loadPublicEventsSuccess(events)));
};
