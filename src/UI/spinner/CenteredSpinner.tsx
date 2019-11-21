import React from 'react';
import { Layout, Spinner } from 'react-native-ui-kitten';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const CenteredSpinner = () => {
    return (
        <Layout style={styles.container}>
            <Spinner size="giant" />
        </Layout>
    );
};

export default CenteredSpinner;