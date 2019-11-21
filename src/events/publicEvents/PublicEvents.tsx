import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns'
import { Text } from 'react-native-elements';

import BaseLayout from '../../baseLayout/BaseLayout';
import CenteredSpinner from '../../UI/spinner/CenteredSpinner';
import EventCard from '../components/EventCard';
import { loadPublicEventsAsync } from '../eventsActions';

const DATE_FORMAT = 'MM/dd/yyyy';

const PublicEvent = props => {
    const {
        events,
        isLoading,
        loadPublicEvents,
    } = props;

    useEffect(() => {
        loadPublicEvents();
    }, []);

    if (isLoading || !events.length) return <CenteredSpinner />;

    return (
        <BaseLayout>
            <Text h3 style={{ textAlign: 'center', marginTop: 30 }}>
                Join Public Events
            </Text>
            {
                events.map(event => (
                    <EventCard
                        key={event.id}
                        name={event.name}
                        description={event.description}
                        startTime={format(new Date(event.startTime), DATE_FORMAT)}
                        finishTime={format(new Date(event.finishTime), DATE_FORMAT)}
                    />
                ))
            }
        </BaseLayout>
    );
};

const mapStateToProps = state => ({
    isLoading: state.events.isLoading,
    events: state.events.events,
});

const mapDispatchToProps = dispatch => ({
    loadPublicEvents: () => dispatch(loadPublicEventsAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PublicEvent);
