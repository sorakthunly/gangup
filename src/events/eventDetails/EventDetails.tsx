import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Image, ListItem, Overlay, Text } from 'react-native-elements';
import { uniqueNamesGenerator, starWars } from 'unique-names-generator';

import BaseLayout from '../../baseLayout/BaseLayout';
import { reformat } from '../../utils/timeHelpers';
import { Button, Layout, Select, Toggle } from 'react-native-ui-kitten';
import { ScrollView } from 'react-native';

import { sendNotificationImmediately } from '../../notification/notificationHelpers';

const config = {
    dictionaries: [starWars],
    length: 1,
};

const mockAvatars = [
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://www.w3schools.com/howto/img_avatar.png',
    'https://st2.depositphotos.com/4967775/11323/v/950/depositphotos_113235752-stock-illustration-avatar-girls-icon-vector-woman.jpg',
    'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png',
];

const getStatus = () => {
    const random = Math.random();
    if (random < 0.3) return 'Coming';
    if (random < 0.6 && random > 0.3) return 'Not coming';
    return 'Pending';
};

const mockList = Array.from({ length: 30 }, (_, index) => {
    const name = uniqueNamesGenerator(config);
    return {
        name,
        avatarUrl: mockAvatars[index + 1 > mockAvatars.length ? index % mockAvatars.length : index],
        subtitle: getStatus(),
    };
});

const selectOptions = Array.from({ length: 5 }, (_, index) => ({
    text: String(index + 1),
}));

const EventDetails = props => {
    const {
        event: {
            name,
            description,
            startTime,
            finishTime,
            canInviteExtendedGuests,
            image,
            location,
        },
    } = props;

    const [shouldShowGuestList, setShouldShowGuestList] = useState(false);
    const [shouldRSVPModal, setShouldRSVPModal] = useState(false);
    const [isGoing, setIsGoing] = useState(false);

    return (
        <BaseLayout>
            <Text h3 style={{ textAlign: 'center', marginTop: 30 }}>{name}</Text>
            <Image
                source={{ uri: image }}
                style={{ flex: 1, height: 200 }}
            />
            <Layout style={{ paddingHorizontal: 20 }}>
                <Text style={{ marginVertical: 10 }}>{description}</Text>
                <Layout style={{ flexDirection: 'row', opacity: 0.5, marginBottom: 10 }}>
                    <Text>{reformat(startTime)}</Text>
                    <Text style={{ marginHorizontal: 5 }}>to</Text>
                    <Text>{reformat(finishTime)}</Text>
                </Layout>
                <Text>Location: {location}</Text>
                <Text>Can invite extented guests: {canInviteExtendedGuests ? 'YES' : 'NO'}</Text>
                <Text>Total invited: 130</Text>
                <Text>Coming: 60</Text>
                <Text>Not coming: 35</Text>
                <Text>Pending: 45</Text>
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
                        {mockList.map((guest, index) => (
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
                            checked={isGoing}
                            text="Going"
                            onChange={isGoing => setIsGoing(isGoing)}
                        />
                        <Select
                            style={{ marginVertical: 10 }}
                            label="Number of additional adult guests"
                            selectedOption={{ text: '1'}}
                            data={[{ text: '1'}]}
                            placeholder='Please select a number'
                            onSelect={() => {}}
                        />
                        <Select
                            label="Number of additional child guests"
                            data={selectOptions}
                            selectedOption={{ text: '2'}}
                            placeholder='Please select a number'
                            onSelect={() => {}}
                        />
                        <Button
                            style={{ marginTop: 10 }}
                            status="success"
                            onPress={() => {
                                setShouldRSVPModal(false);
                                setTimeout(() => {
                                    sendNotificationImmediately({
                                        title: "Madhava Gurram is coming to Next Year's Christmas Party!",
                                        body: 'Check Event Details for more information',
                                    });
                                }, 3000);
                            }}
                        >
                            Response
                        </Button>
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
