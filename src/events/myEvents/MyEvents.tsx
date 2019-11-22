import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';

import BaseLayout from '../../baseLayout/BaseLayout';
import CenteredSpinner from '../../UI/spinner/CenteredSpinner';
import EventCard from '../components/EventCard';
import { loadPublicEventsAsync } from '../eventsActions';
import { reformat } from '../../utils/timeHelpers';

const MyEvents = props => {
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
                My Events
            </Text>
            <Text style={{ marginTop: 10, marginLeft: 5, fontSize: 20, opacity: 0.6 }}>
                Going:
            </Text>
            {
                events.slice(0, 1).map(event => (
                    <EventCard
                        key={event.id}
                        id={event.id}
                        name={event.name}
                        description={event.description}
                        startTime={reformat(event.startTime)}
                        finishTime={reformat(event.finishTime)}
                        image={event.image}
                    />
                ))
            }
            <Text style={{ marginTop: 20, marginLeft: 5, fontSize: 20, opacity: 0.6 }}>
                Pending:
            </Text>
            {
                events.slice(1, 3).map(event => (
                    <EventCard
                        key={event.id}
                        id={event.id}
                        name={event.name}
                        description={event.description}
                        startTime={reformat(event.startTime)}
                        finishTime={reformat(event.finishTime)}
                        image={event.image}
                    />
                ))
            }
            <Text style={{ marginTop: 20, marginLeft: 5, fontSize: 20, opacity: 0.6 }}>
                Created:
            </Text>
            {
                events.slice(2, 3).map(event => (
                    <EventCard
                        key={event.id}
                        id={event.id}
                        name={event.name}
                        description={event.description}
                        startTime={reformat(event.startTime)}
                        finishTime={reformat(event.finishTime)}
                        image={event.image}
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

export default connect(mapStateToProps, mapDispatchToProps)(MyEvents);
