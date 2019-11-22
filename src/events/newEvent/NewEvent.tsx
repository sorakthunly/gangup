import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Layout, Text } from 'react-native-ui-kitten';

import BaseLayout from '../../baseLayout/BaseLayout';
import EventForm from '../components/EventForm';
import { createNewEvent } from '../eventsActions';
import { MY_EVENTS_URL } from '../../routes/urlMap';
import { sendNotificationImmediately } from '../../notification/notificationHelpers';

const NewEvent = ({ create, history }) => {
    const [formData, setFormData] = useState({
        name: "Next Year's Christmas Party",
        description: 'We are too excited to wait till next year, so we just throw the party in advance...',
        startTime: new Date('2019-12-21'),
        finishTime: new Date('2019-12-31'),
        isPublic: true,
        shouldInviteAll: true,
        canInviteExtendedGuests: true,
        maxAdults: { text: 100 },
        maxChildren: { text: 100 },
        location: '601 Coronation Drive, Toowong, QLD',
    });

    const handleChange = (name, value) => {
        setFormData(formData => ({
            ...formData,
            [name]: value,
        }));
    };

    const handleCreate = () => {
        const startTimeString = formData.startTime.toString();
        const finishTimeString = formData.finishTime.toString();
        const event = {
            ...formData,
            id: 3,
            startTime: startTimeString,
            finishTime: finishTimeString,
            maxAdults: Number(formData.maxAdults.text),
            maxChildren: Number(formData.maxChildren.text),
            image: 'https://cdn.newsapi.com.au/image/v1/a8585fb73d802df40aa8a8cbeef4eb97?width=1024',
        };
        create(event);
        setTimeout(() => {
            sendNotificationImmediately({
                title: "You are invited to Next Year's Christmas Party!",
                body: 'Check My Events for more details',
                iso: { _displayInForeground: true },
            });
        }, 5000);
        history.push(MY_EVENTS_URL);
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
                    startTime={formData.startTime}
                    finishTime={formData.finishTime}
                    isPublic={formData.isPublic}
                    shouldInviteAll={formData.shouldInviteAll}
                    canInviteExtendedGuests={formData.canInviteExtendedGuests}
                    maxAdults={formData.maxAdults}
                    maxChildren={formData.maxChildren}
                    location={formData.location}
                />
                <Button onPress={handleCreate} style={{ marginTop: 20 }}>Create</Button>
            </Layout>
        </BaseLayout>
    );
};

const mapDispatchToProps = dispatch => ({
    create: event => dispatch(createNewEvent(event)),
});

export default connect(null, mapDispatchToProps)(NewEvent);
