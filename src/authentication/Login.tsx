import React from 'react';
import { connect } from 'react-redux';
import { Button, Layout, Text } from 'react-native-ui-kitten';
import { Link } from 'react-router-native';

import { login as loginAction } from './authenticationActions';

const Login = props => {
    const { isLoading, login } = props;

    return (
        <Layout>
            <Text>This is Login page!!!</Text>
            <Text>{`isLoading: ${isLoading}`}</Text>
            <Link to="/my-events"><Text>Go to my event</Text></Link>
            <Link to="/public-events"><Text>Go to public event</Text></Link>
            <Button onPress={() => login()}>Login</Button>
        </Layout>
    );
};

const mapStateToProps = state => ({
    isLoading: state.authentication.isLoading,
});

const mapDispatchToProps = dispatch => ({
    login: () => dispatch(loginAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
