import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Image, ListItem, Overlay, Text } from 'react-native-elements';

import BaseLayout from '../../baseLayout/BaseLayout';
import { reformat } from '../../utils/timeHelpers';
import { Button, Layout, Select, Toggle } from 'react-native-ui-kitten';
import { ScrollView } from 'react-native';

const mockGuestList = [
    {
        name: 'Amy Farha',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Coming',
    },
    {
        name: 'Chris Jackson',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Coming',
    },
    {
        name: 'Amy Farha',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        subtitle: 'Not coming',
    },
    {
        name: 'Chris Jackson',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Coming',
    },
    {
        name: 'Chris Jackson',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Pending',
    },
    {
        name: 'Chris Jackson',
        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        subtitle: 'Pending',
    },
];

const EventDetails = props => {
    const {
        event: {
            name,
            description,
            startTime,
            finishTime,
            canInviteExtendedGuests,
        },
    } = props;

    const [shouldShowGuestList, setShouldShowGuestList] = useState(false);
    const [shouldRSVPModal, setShouldRSVPModal] = useState(false);

    return (
        <BaseLayout>
            <Text h3 style={{ textAlign: 'center', marginTop: 30 }}>{name}</Text>
            <Image
                source={{ uri: 'https://c.ndtvimg.com/2018-11/68g3f5sk_event-generic_625x300_16_November_18.jpg' }}
                style={{ flex: 1, height: 200 }}
            />
            <Layout style={{ paddingHorizontal: 20 }}>
                <Text style={{ marginVertical: 10 }}>{description}</Text>
                <Layout style={{ flexDirection: 'row', opacity: 0.5, marginBottom: 10 }}>
                    <Text>{reformat(startTime)}</Text>
                    <Text style={{ marginHorizontal: 5 }}>to</Text>
                    <Text>{reformat(finishTime)}</Text>
                </Layout>
                <Text>Can invite extented guests: {canInviteExtendedGuests ? 'YES' : 'NO'}</Text>
                <Text>Total invited: 130</Text>
                <Text>Coming: 60</Text>
                <Text>Not coming: 35</Text>
                <Text>Not responsed: 45</Text>
                <Text>Additional adult guest: 40</Text>
                <Text>Additional child guest: 20</Text>
                <Button
                    appearance='outline'
                    style={{ marginVertical: 10 }}
                    onPress={() => setShouldShowGuestList(true)}
                >
                    View all guests
                </Button>
                <Button onPress={() => setShouldRSVPModal(true)}>RSVP now</Button>
                <Overlay
                    isVisible={shouldShowGuestList}
                    onBackdropPress={() => setShouldShowGuestList(false)}
                >
                    <ScrollView>
                        {mockGuestList.map((guest, index) => (
                            <ListItem
                                key={index}
                                leftAvatar={{ source: { uri: guest.avatarUrl } }}
                                title={guest.name}
                                subtitle={guest.subtitle}
                                bottomDivider
                            />
                        ))}
                    </ScrollView>
                </Overlay>
                <Overlay
                    isVisible={shouldRSVPModal}
                    onBackdropPress={() => setShouldRSVPModal(false)}
                >
                    <Layout style={{ paddingVertical: 50 }}>
                        <Toggle
                            style={{ alignSelf: 'flex-start' }}
                            checked={false}
                            text="Coming"
                        />
                        <Select
                            style={{ marginVertical: 10 }}
                            label="Number of adult guests"
                            data={[]}
                            placeholder='Please select a number'
                            onSelect={() => {}}
                        />
                        <Select
                            label="Number of child guests"
                            data={[]}
                            placeholder='Please select a number'
                            onSelect={() => {}}
                        />
                        <Button style={{ marginTop: 10 }} status="success">Response</Button>
                    </Layout>
                </Overlay>
            </Layout>
        </BaseLayout>
    );
};

const mapStateToProps = (state, ownProps) => {
    const {
        match: {
            params: { id }
        },
    } = ownProps;

    const event = state.events.events.find(event => event.id === Number(id));

    return {
        event,
    };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
