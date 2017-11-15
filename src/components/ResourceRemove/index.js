//Main
import React from 'react';
import { withFirebase } from 'react-redux-firebase'

//Semantic UI
import {Button} from 'semantic-ui-react';

class ResourceRemove extends React.Component {
    state = {
    };

    //Check validation and save of show validation error
    deleteResource = (selectedRow) => {
        console.log("delete: ", selectedRow)
    };

    render () {
        return  <Button negative onClick={() => this.deleteResource(this.props.selectedRow)}>Delete resource</Button>
    };
}

export default withFirebase(ResourceRemove);