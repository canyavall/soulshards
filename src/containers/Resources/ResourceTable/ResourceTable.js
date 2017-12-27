//Main
import React from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { firebaseConnect, isLoaded, isEmpty  } from 'react-redux-firebase';

//Components & Containers
import ResourceTableComponent from './template/ResourceTemplate';
import ResourceForm from '../ResourceForm/ResourceForm';
import ResourceRemove from '../ResourceRemove/ResourceRemove'

//Semantic UI
import { Dimmer, Loader, Segment} from 'semantic-ui-react'

class Resource extends React.Component {
    state = {
        selectedRow: false
    };

    handleSelectedRow = (e) => {
        const selectedRow = (e !== this.state.selectedRow) ? e : false
        this.setState({selectedRow: selectedRow})
    };

    render () {
        //Loader till we have the data
        if (!isLoaded(this.props.resources))
            return (<Segment padded>
                        <Dimmer active inverted >
                            <Loader />
                        </Dimmer>
                    </Segment>);

        if (isEmpty(this.props.resources)) return <div>'No resources available'</div>;

        return  <div>
                    <ResourceForm />
                    {this.state.selectedRow && (<ResourceForm resourceEditFlag={true}
                                                              resourceToEdit={this.props.resources[this.state.selectedRow]}
                                                              resourceToEditId={this.state.selectedRow}
                    />)}
                    {this.state.selectedRow && (<ResourceRemove selectedRow={this.state.selectedRow}/>)}
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