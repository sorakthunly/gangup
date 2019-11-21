import React from 'react';
import { Layout } from 'react-native-ui-kitten';
import { Dimensions, ScrollView } from 'react-native';

import NavigationBar from '../navigation/NavigationBar';

const BaseLayout = ({ children }) => {
    const navBarHeight = 60;
    const fullHeight = Dimensions.get('window').height;
    const mainContentHeight = fullHeight - navBarHeight;

    return (
        <Layout>
            <ScrollView style={{ height: mainContentHeight }}>
                {children}
            </ScrollView>
            <NavigationBar />
        </Layout>
    );
};

export default BaseLayout;
