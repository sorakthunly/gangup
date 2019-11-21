import React, { useEffect, useState } from 'react';
import {
    BottomNavigation,
    BottomNavigationTab,
} from 'react-native-ui-kitten';
import { StyleSheet } from 'react-native';
import { withRouter } from 'react-router-native';

import { MY_EVENTS_URL, PUBLIC_EVENTS_URL } from '../routes/urlMap';

const styles = StyleSheet.create({
    bottomNavigation: {
        backgroundColor: 'white',
        alignSelf: 'stretch'
    },
    indicator: { backgroundColor: 'black' },
});

const navTabsUrl = [MY_EVENTS_URL, PUBLIC_EVENTS_URL];

const NagigationBar = props => {
    const { history, location: { pathname } } = props;
    const [index, setIndex] = useState();

    useEffect(() => {
        if (pathname !== navTabsUrl[index]) {
            const indexFound = navTabsUrl.findIndex(url => url === pathname);
            setIndex(indexFound);
        }
    });

    const handleSelect = selectedIndex => {
        history.push(navTabsUrl[selectedIndex]);
    };

    return (
        <BottomNavigation
            style={styles.bottomNavigation}
            indicatorStyle={styles.indicator}
            selectedIndex={index}
            onSelect={handleSelect}>
            <BottomNavigationTab title='My Events'/>
            <BottomNavigationTab title='All Public Events'/>
        </BottomNavigation>
    );
}

export default withRouter(NagigationBar);
