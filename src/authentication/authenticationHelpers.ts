import { AsyncStorage } from 'react-native';

const JWT_KEY = 'jwt';

export const checkIsAuthenticated = async (): Promise<boolean> => {
    const jwt = await AsyncStorage.getItem(JWT_KEY);

    return !!jwt;
};