//Main
import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty  } from 'react-redux-firebase';

//Components & Containers
import ResourceComponent from '../components/ResourceTable';

//Semantic UI
import { Dimmer, Loader, Segment} from 'semantic-ui-react'


class Resource extends React.Component {

    render () {
        if (!isLoaded(this.props.resources))
            return (<Segment padded>
                        <Dimmer active inverted >
                            <Loader />
                        </Dimmer>
                    </Segment>);
        if (isEmpty(this.props.resources)) return <div>'Empty'</div>;
        return <ResourceComponent resources={this.props.resources}/>
    }
}

export default compose(
    firebaseConnect(['resources']),
    connect(
        (state) => ({
            resources: state.firebase.data.resources
        })
    )
)(Resource)