import React from 'react';
import { Card, Text } from 'react-native-elements';
import { Button, Layout } from 'react-native-ui-kitten';

const EventCard = props => {
    const {
        name,
        description,
        startTime,
        finishTime,
    } = props;

    return (
        <Card
            image={{ uri: 'https://c.ndtvimg.com/2018-11/68g3f5sk_event-generic_625x300_16_November_18.jpg'} }
        >
            <Text h4>
                {name}
            </Text>
            <Text style={{ marginBottom: 3 }}>
                {description}
            </Text>
            <Layout style={{ flexDirection: 'row', marginBottom: 10, opacity: 0.5 }}>
                <Text>{startTime}</Text>
                <Text style={{ marginHorizontal: 5 }}>to</Text>
                <Text>{finishTime}</Text>
            </Layout>
            <Button
                style={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            >
                View Event
            </Button>
        </Card>
    );
};

export default EventCard;