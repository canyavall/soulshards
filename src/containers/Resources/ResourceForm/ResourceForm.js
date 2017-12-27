//Main
import React from 'react';
import { withFirebase } from 'react-redux-firebase';

// Templates
import ResourceFormTemplate from './template/ResourceFormTemplate';

//Constants
const initialResource = {
    picture: '',
    value: '',
    name: '',
    description: '',
    status: ''
};

class ResourceForm extends React.Component {
    constructor(props) {
        super(props);
        const resourceToEdit = (this.props.resourceEditFlag) ? this.props.resourceToEdit : initialResource;
        this.state = {
            resource: resourceToEdit,
            modal: false,
            warnings: {
                warningPicture: false,
                warningValue: false,
                warningName: false,
                warningStatus: false
            }
        };
    }


    //Handle any form change
    handleChange = (e, result) => {
        let newState = {...this.state.resource};
        newState[result.name] = result.value;
        this.setState({resource: newState });
    };

    //Checks the form
    formValidation = () => {
        let newState = {...this.state.warnings};
        newState.warningPicture = !this.state.resource.picture;
        newState.warningValue = !this.state.resource.value;
        newState.warningName = !this.state.resource.name;
        newState.warningStatus = !this.state.resource.status;

        if (!newState.warningPicture && !newState.warningValue && !newState.warningName && !newState.warningStatus) {
            return true;
        } else{
            this.setState(newState);
            return false;
        }
    }

    //If validation is passed, save data in firebase
    pushResource = () => {
        if (this.formValidation()){
            this.props.firebase.push('resources', this.state.resource);
            this.handleClose();
        }
    };

    //If validation is passed, save data in firebase
    editResource = () => {
        if (this.formValidation()){
            this.props.firebase.update(`resources/${this.props.resourceToEditId}`, this.state.resource);
            this.handleClose();
        }
    };

    handleOpen = () => this.setState({ modal: true });

    handleClose = () => this.setState({ modal: false });

    componentWillReceiveProps(nextProps) {
        // Update resource just in case a row is selected and parsed
        if (nextProps.resourceEditFlag && nextProps.resourceToEdit !== this.state.resource) {
            this.setState({ resource: nextProps.resourceToEdit });
        }
    }

    render () {
         return  <ResourceFormTemplate modalStatus={this.state.modal}
                                       modalHandleopen={this.handleOpen}
                                       modalHandleClose={this.handleClose}
                                       handleChange={this.handleChange}
                                       pushResource={this.pushResource}
                                       editResource={this.editResource}
                                       warnings={this.state.warnings}
                                       resourceEditFlag={this.props.resourceEditFlag}
                                       resource={this.state.resource}
        />
    };
}

export default withFirebase(ResourceForm);