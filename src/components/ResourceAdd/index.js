//Main
import React from 'react';
import { withFirebase } from 'react-redux-firebase'

//Semantic UI
import {Button, Modal, Header, Form} from 'semantic-ui-react';

//Constants
import { resourcesStatus } from '../../utils/gameConstants';

class CreateResource extends React.Component {

    handleChange = (e, result) => {
        this.setState({[result.name]: result.value});
    };

    pushResource = () => {
        this.props.firebase.push('resources', this.state)
    };

    render () {
        return  <Modal trigger={<Button positive>
            Create resource
        </Button>}>
            <Modal.Content>
                <Modal.Description>
                    <Header>Create new Resource</Header>
                    <Form>
                        <Form.Input label='Picture' placeholder='Picture' name='picture' onChange={this.handleChange} />
                        <Form.Input label='Name' placeholder='name' name='name' onChange={this.handleChange} />
                        <Form.Input label='Value' placeholder='value' name='value' onChange={this.handleChange} />
                        <Form.TextArea label='Description' placeholder='description' name='description' onChange={this.handleChange} />
                        <Form.Select label='Status' options={resourcesStatus} placeholder='status' name='status' onChange={this.handleChange} />
                        <Form.Button onClick={this.pushResource}>Submit</Form.Button>
                    </Form>
                </Modal.Description>
            </Modal.Content>
        </Modal>
    };
}

export default withFirebase(CreateResource);