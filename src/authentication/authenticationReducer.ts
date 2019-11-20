import { LOGIN } from './authenticationActions';

const initialState = {
    isAuthenticated: false,
    isLoading: false,
};

const authentication = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLoading: true,
            };

        default:
            return state;
    }
};

export default authentication;