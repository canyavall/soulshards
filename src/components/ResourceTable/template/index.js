//Main
import React from 'react';
import { style } from './style';

//Material Ui
import {Table} from 'semantic-ui-react';

const Resource = (props) => {
    const selected = props.selectedRow;
    return <div style={ style.wrapper }>
                <Table celled padded selectable>
                    <Table.Header>
                        <Table.Row >
                            <Table.HeaderCell>Picture</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Value</Table.HeaderCell>
                            <Table.HeaderCell>Status</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        { Object.keys(props.resources).map(function(keyName, keyIndex) {
                            return  <Table.Row key={keyName} onClick={() => props.handleSelectedRow(keyName)} active={keyName === selected}>
                                        <Table.Cell>{props.resources[keyName].picture}</Table.Cell>
                                        <Table.Cell>{props.resources[keyName].name}</Table.Cell>
                                        <Table.Cell>{props.resources[keyName].description}</Table.Cell>
                                        <Table.Cell>{props.resources[keyName].value}</Table.Cell>
                                        <Table.Cell>{props.resources[keyName].status}</Table.Cell>
                                    </Table.Row>
                            })
                        }
                    </Table.Body>
                </Table>
            </div>
}

export default Resource;