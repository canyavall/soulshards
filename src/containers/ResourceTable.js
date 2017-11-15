//Main
import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty  } from 'react-redux-firebase';

//Components & Containers
import ResourceTableComponent from '../components/ResourceTable';
import ResourceAdd from '../components/ResourceAdd';
import ResourceRemove from '../components/ResourceRemove'

//Semantic UI
import { Dimmer, Loader, Segment} from 'semantic-ui-react'

class Resource extends React.Component {
    state = {
        selectedRow: false
    };

    handleSelectedRow = (e) => {
        this.setState({selectedRow: e})
    }

    render () {
        if (!isLoaded(this.props.resources))
            return (<Segment padded>
                        <Dimmer active inverted >
                            <Loader />
                        </Dimmer>
                    </Segment>);
        if (isEmpty(this.props.resources)) return <div>'Empty'</div>;
        return  <div>
                    <ResourceAdd />
                    <ResourceRemove selectedRow={this.state.selectedRow}/>
                    <ResourceTableComponent resources={this.props.resources}
                                            handleSelectedRow ={this.handleSelectedRow}
                                            selectedRow={this.state.selectedRow}
                    />
                </div>
    }
}

const mapStateToProps = (state) => {
    return {
        resources: state.firebase.data.resources
    };
}

export default compose(
    firebaseConnect(['resources']),
    connect(mapStateToProps)
)(Resource)