import React from 'react';
import { Datepicker, Input, Layout, Select, Text, Toggle } from 'react-native-ui-kitten';
import { StyleSheet } from 'react-native';

const EventForm = props => {
    const {
        name,
        description,
        startDate,
        finishDate,
        isPublic,
        canInviteExtendedGuests,
        maxAdults,
        maxChildren,
    } = props;
    
    return (
        <Layout>
            <Input
                label="Event name:"
                value={name}
                placeholder="Event name"
                size="large"
            />
            <Input
                label="Description:"
                value={description}
                placeholder="Description"
                size="large"
            />
            <Text>Start Date:</Text>
            <Datepicker
                date={startDate}
                onSelect={() => {}}
            />
            <Text>Finish Date:</Text>
            <Datepicker
                date={finishDate}
                onSelect={() => {}}
            />
            <Toggle
                text='Is public'
                checked={isPublic}
            />
            <Toggle
                text='Invite all'
                checked={isPublic}
            />
            <Toggle
                text='Can invite extended guests'
                checked={canInviteExtendedGuests}
            />
            <Select
                label="Number of adult guests"
                data={[]}
                placeholder='Please select a number'
                selectedOption={maxAdults}
                onSelect={() => {}}
            />
            <Select
                label="Number of child guests"
                data={[]}
                placeholder='Please select a number'
                selectedOption={maxChildren}
                onSelect={() => {}}
            />
        </Layout>
    );
};

export default EventForm;
