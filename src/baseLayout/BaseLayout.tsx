import React, { useEffect } from 'react';
import { Layout } from 'react-native-ui-kitten';
import { Dimensions, ScrollView } from 'react-native';

import NavigationBar from '../navigation/NavigationBar';
import { askPermissions } from '../notification/notificationHelpers';

const BaseLayout = ({ children }) => {
    const navBarHeight = 60;
    const fullHeight = Dimensions.get('window').height;
    const mainContentHeight = fullHeight - navBarHeight;

    useEffect(() => {
        askPermissions();
    }, []);

    return (
        <Layout>
            <ScrollView style={{ height: mainContentHeight, backgroundColor: '#f3f3f3' }}>
                {children}
            </ScrollView>
            <NavigationBar />
        </Layout>
    );
};

export default BaseLayout;
