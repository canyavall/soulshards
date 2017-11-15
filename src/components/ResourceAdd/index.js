//Main
import React from 'react';
import { withFirebase } from 'react-redux-firebase'

//Semantic UI
import {Button, Modal, Header, Form} from 'semantic-ui-react';

//Constants
import { resourcesStatus } from '../../utils/gameConstants';

class ResourceAdd extends React.Component {
    state = {
        resource: {},
        modal: false,
        warningPicture: false,
        warningValue: false,
        warningName: false,
        warningStatus: false
    };

    //Handle any form change
    handleChange = (e, result) => {
        let newState = this.state.resource;
        newState[result.name] = result.value;
        this.setState({resource: newState });
    };

    //Check validation and save of show validation error
    pushResource = () => {
        let newState = this.state.resource;
        newState.warningPicture = !this.state.resource.picture;
        newState.warningValue = !this.state.resource.value;
        newState.warningName = !this.state.resource.name;
        newState.warningStatus = !this.state.resource.status;
        if (!newState.warningPicture && !newState.warningValue && !newState.warningName && !newState.warningStatus){
            this.props.firebase.push('resources', this.state.resource);
            this.handleClose();
        }else{
            this.setState(newState);
        }
    };

    handleOpen = () => this.setState({ modal: true });

    handleClose = () => this.setState({ modal: false });

    render () {
        return  <Modal trigger={<Button positive onClick={this.handleOpen}>Create resource</Button>}
                       open={this.state.modal}
                       onClose={this.handleClose}
                >
                <Modal.Content>
                    <Modal.Description>
                        <Header>Create new Resource</Header>
                        <Form error>
                            <Form.Input label='Picture' placeholder='Picture' name='picture' onChange={this.handleChange} required error={this.state.warningPicture }/>
                            <Form.Input label='Name' placeholder='name' name='name' onChange={this.handleChange} required error={this.state.warningName }/>
                            <Form.Input type="number" label='Value' placeholder='value' name='value' onChange={this.handleChange} required error={this.state.warningValue }/>
                            <Form.TextArea label='Description' placeholder='description' name='description' onChange={this.handleChange} required/>
                            <Form.Select label='Status' options={resourcesStatus} placeholder='status' name='status' onChange={this.handleChange} required error={this.state.warningStatus }/>
                            <Form.Group inline>
                                <Form.Button type="button" onClick={this.pushResource}>Submit</Form.Button>
                                <Form.Button type="button" onClick={this.handleClose}>Cancel</Form.Button>
                            </Form.Group>
                        </Form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
    };
}

export default withFirebase(ResourceAdd);