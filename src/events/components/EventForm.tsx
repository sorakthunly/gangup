import React from 'react';
import { Datepicker, Input, Layout, Select, Text, Toggle } from 'react-native-ui-kitten';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    toggle: {
        alignSelf: 'flex-start',
        marginTop: 10,
    },
});

const selectOptions = Array.from({ length: 5 }, (_, index) => ({
    text: String(index + 1),
}));

const EventForm = props => {
    const {
        name,
        description,
        startDate,
        finishDate,
        isPublic,
        shouldInviteAll,
        canInviteExtendedGuests,
        maxAdults,
        maxChildren,
        handleChange,
    } = props;
    
    return (
        <Layout>
            <Input
                label="Event name:"
                value={name}
                placeholder="Event name"
                size="large"
                onChangeText={text => handleChange('name', text)}
            />
            <Input
                label="Description:"
                value={description}
                placeholder="Description"
                size="large"
                onChangeText={text => handleChange('description', text)}
            />
            <Text>Start Date:</Text>
            <Datepicker
                date={startDate}
                onSelect={date => handleChange('startDate', date)}
            />
            <Text>Finish Date:</Text>
            <Datepicker
                date={finishDate}
                onSelect={date => handleChange('finishDate', date)}
            />
            <Toggle
                style={styles.toggle}
                text='Is public'
                checked={isPublic}
                onChange={checked => handleChange('isPublic', checked)}
            />
            <Toggle
                style={styles.toggle}
                disabled={!isPublic}
                text='Invite all'
                checked={shouldInviteAll}
                onChange={checked => handleChange('shouldInviteAll', checked)}
            />
            <Toggle
                style={styles.toggle}
                text='Can invite extended guests'
                checked={canInviteExtendedGuests}
                onChange={checked => handleChange('canInviteExtendedGuests', checked)}
            />
            <Select
                disabled={!canInviteExtendedGuests}
                label="Number of adult guests"
                data={selectOptions}
                placeholder='Please select a number'
                selectedOption={maxAdults}
                onSelect={selectedOption => handleChange('maxAdults', selectedOption)}
            />
            <Select
                disabled={!canInviteExtendedGuests}
                label="Number of child guests"
                data={selectOptions}
                placeholder='Please select a number'
                selectedOption={maxChildren}
                onSelect={selectedOption => handleChange('maxChildren', selectedOption)}
            />
        </Layout>
    );
};

export default EventForm;
