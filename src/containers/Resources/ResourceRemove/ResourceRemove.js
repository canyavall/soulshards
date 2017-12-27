//Main
import React from 'react';
import { withFirebase } from 'react-redux-firebase'

//Semantic UI
import {Button} from 'semantic-ui-react';

class ResourceRemove extends React.Component {

    //Check validation and save of show validation error
    deleteResource = (selectedRow) => {
        this.props.firebase.remove(`resources/${selectedRow}`)
    };

    render () {
        return  <Button negative onClick={() => this.deleteResource(this.props.selectedRow)}>Delete resource</Button>
    };
}

export default withFirebase(ResourceRemove);