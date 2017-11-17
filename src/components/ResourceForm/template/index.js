//Main
import React from 'react';

//Semantic UI
import {Button, Modal, Header, Form} from 'semantic-ui-react';


//Constants
import { resourcesStatus } from '../../../utils/gameConstants';

const ResourceFormTemplate = (props) => {

    //Prepare button
    const modalButton = (!props.resourceEditFlag) ?
        <Button positive onClick={props.modalHandleopen}>Create resource</Button> :
        <Button primary onClick={props.modalHandleopen}>Edit resource</Button>;

    const submitButton = (!props.resourceEditFlag) ?
        <Form.Button type="button" onClick={props.pushResource}>Submit</Form.Button> :
        <Form.Button type="button" onClick={props.editResource}>Submit</Form.Button>
    //We need the resource before printing
    if (!props.resource) return  "";

    //Return form
    return  <Modal trigger={modalButton}
                   open={props.modalStatus}
                   onClose={props.modalHandleClose}
            >
            <Modal.Content>
                <Modal.Description>
                    <Header>Create new Resource</Header>
                    <Form error>
                        <Form.Input label='Picture'
                                    value={ props.resource.picture }
                                    name='picture'
                                    onChange={props.handleChange}
                                    error={props.warnings.warningPicture }
                                    required
                        />
                        <Form.Input label='Name'
                                    value={ props.resource.name }
                                    name='name'
                                    onChange={props.handleChange}
                                    error={props.warnings.warningName }
                                    required
                        />
                        <Form.Input type="number"
                                    label='Value'
                                    value={ props.resource.value }
                                    name='value'
                                    onChange={props.handleChange}
                                    error={props.warnings.warningValue }
                                    required
                        />
                        <Form.TextArea label='Description'
                                       value={ props.resource.description }
                                       name='description'
                                       onChange={props.handleChange}
                        />
                        <Form.Select label='Status'
                                     options={resourcesStatus}
                                     value={ props.resource.status }
                                     name='status'
                                     onChange={props.handleChange}
                                     error={props.warnings.warningStatus }
                                     required
                        />
                        <Form.Group inline>
                            <Form.Button type="button" onClick={props.pushResource}>Submit</Form.Button>
                            <Form.Button type="button" onClick={props.modalHandleClose}>Cancel</Form.Button>
                        </Form.Group>
                    </Form>
                </Modal.Description>
            </Modal.Content>
        </Modal>
}

export default ResourceFormTemplate;