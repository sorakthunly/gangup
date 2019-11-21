import { AsyncStorage } from 'react-native';

const JWT_KEY = 'jwt';

export const setToken = async token => await AsyncStorage.setItem(JWT_KEY, token);

export const checkIsAuthenticated = async (): Promise<boolean> => {
    const jwt = await AsyncStorage.getItem(JWT_KEY);

    return !!jwt;
};