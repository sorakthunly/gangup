import React, { useState } from 'react';
import { Button, Input, Layout, Spinner } from 'react-native-ui-kitten';
import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';

import { loginAsync as loginAction } from './authenticationActions';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    input: {
        marginVertical: 10,
    },
    login: {
        alignSelf: 'stretch',
    },
});

const Login = props => {
    const { history, isLoading, login } = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (isLoading) {
        return (
            <Layout style={styles.container}>
                <Spinner size="giant" />
            </Layout>
        );
    }

    return (
        <Layout style={styles.container}>
            <Input
                label="Email:"
                value={email}
                style={styles.input}
                placeholder="Email"
                size="large"
                onChangeText={setEmail}
            />
            <Input
                label="Password:"
                value={password}
                style={styles.input}
                placeholder="Password"
                size="large"
                textContentType="password"
                onChangeText={setPassword}
            />
            <Button
                style={styles.login}
                onPress={() => login(email, password, history)}
            >
                Login
            </Button>
        </Layout>
    );
};

const mapStateToProps = state => ({
    isLoading: state.authentication.isLoading,
});

const mapDispatchToProps = dispatch => ({
    login: (email, password, history) => dispatch(loginAction(email, password, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
