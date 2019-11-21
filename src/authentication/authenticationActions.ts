import { MY_EVENTS_URL } from './../routes/urlMap';
import { setToken } from "./authenticationHelpers";

export const LOGIN = 'LOGIN';

export const login = () => ({
    type: LOGIN,
});

export const loginAsync = (email, password, history) => dispatch => {
    dispatch(login());

    return new Promise(resolve => {
        setTimeout(() => resolve('myFakeToken'), 500);
    })
        .then(token => setToken(token))
        .then(() => history.push(MY_EVENTS_URL));
};
