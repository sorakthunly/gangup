import React from 'react';
import { Layout, Text } from 'react-native-ui-kitten';

import BaseLayout from '../../baseLayout/BaseLayout';
import EventForm from '../components/EventForm';

const NewEvent = () => {
    return (
        <BaseLayout>
            <Layout style={{ padding: 30 }}>
                <Text style={{ textAlign: 'center', fontSize: 20, marginBottom: 20 }}>
                    Create New Event Now!!
                </Text>
                <EventForm />
            </Layout>
        </BaseLayout>
    );
};

export default NewEvent;
