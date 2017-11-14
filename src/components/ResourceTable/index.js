//Main
import React from 'react';
import { style } from './style';

//Components
import ResourceItem from '../ResourceItem';


//Material Ui
import {Table} from 'semantic-ui-react';

const Resource = (props) => {
    return <div style={ style.wrapper }>
                <Table celled padded>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Picture</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Value</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        { Object.keys(props.resources).map(function(keyName, keyIndex) {
                            return < ResourceItem key={keyName} resource={props.resources[keyName]}/>
                            })
                        }
                    </Table.Body>
                </Table>
            </div>
}

export default Resource;