import { get } from '../api/fetch';

export const LOAD_PUBLIC_EVENTS = 'LOAD_PUBLIC_EVENTS';
export const LOAD_PUBLIC_EVENTS_SUCCESS = 'LOAD_PUBLIC_EVENTS_SUCCESS';
export const CREATE_NEW_EVENT = 'CREATE_NEW_EVENT';

export const loadPublicEvents = () => ({
    type: LOAD_PUBLIC_EVENTS,
});

export const loadPublicEventsSuccess = events => ({
    events,
    type: LOAD_PUBLIC_EVENTS_SUCCESS,
});

const mockImages = [
    'https://c.ndtvimg.com/2018-11/68g3f5sk_event-generic_625x300_16_November_18.jpg',
    'https://static.wixstatic.com/media/3020fd_ed6023372fda42939ef471b3c2d63bc3~mv2.jpg',
    'https://ourhamilton.co.nz/wp-content/uploads/2019/10/Meteor_807x538-807x538.jpg',
];

export const loadPublicEventsAsync = () => dispatch => {
    dispatch(loadPublicEvents());

    return get('/events/public')
        .then(events => {
            const eventsWithImage = events.map((event, index) => ({
                ...event,
                image: mockImages[index + 1 > mockImages.length ? index % mockImages.length : index],
                location: '601 Coronation Drive, Toowong, QLD',
            }));

            dispatch(loadPublicEventsSuccess(eventsWithImage));
        });
};

export const createNewEvent = event => ({
    event,
    type: CREATE_NEW_EVENT,
});
