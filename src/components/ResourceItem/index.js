//Main
import React from 'react';

import {Table} from 'semantic-ui-react';

const ResourceItem = (props) => {
    return  <Table.Row>
                <Table.Cell>{props.resource.picture}</Table.Cell>
                <Table.Cell>{props.resource.name}</Table.Cell>
                <Table.Cell>{props.resource.description}</Table.Cell>
                <Table.Cell>{props.resource.value}</Table.Cell>
                <Table.Cell>{props.resource.status}</Table.Cell>
            </Table.Row>
}

export default ResourceItem;