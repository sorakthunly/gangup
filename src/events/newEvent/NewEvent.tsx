import React, { useState } from 'react';
import { Button, Layout, Text } from 'react-native-ui-kitten';

import BaseLayout from '../../baseLayout/BaseLayout';
import EventForm from '../components/EventForm';

const NewEvent = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        startDate: null,
        finishDate: null,
        isPublic: false,
        shouldInviteAll: false,
        canInviteExtendedGuests: false,
        maxAdults: null,
        maxChildren: null,
    });

    const handleChange = (name, value) => {
        setFormData(formData => ({
            ...formData,
            [name]: value,
        }));
    };

    return (
        <BaseLayout>
            <Layout style={{ padding: 30 }}>
                <Text style={{ textAlign: 'center', fontSize: 20, marginBottom: 20 }}>
                    Create New Event Now!!
                </Text>
                <EventForm
                    handleChange={handleChange}
                    name={formData.name}
                    description={formData.description}
                    startDate={formData.startDate}
                    finishDate={formData.finishDate}
                    isPublic={formData.isPublic}
                    shouldInviteAll={formData.shouldInviteAll}
                    canInviteExtendedGuests={formData.canInviteExtendedGuests}
                    maxAdults={formData.maxAdults}
                    maxChildren={formData.maxChildren}
                />
                <Button style={{ marginTop: 20 }}>Create</Button>
            </Layout>
        </BaseLayout>
    );
};

export default NewEvent;
