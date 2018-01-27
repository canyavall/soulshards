//Main
import React from 'react'
import {connect} from "react-redux";
import {firebaseConnect} from "react-redux-firebase";
import {compose} from "redux";

//Semantic UI
import { Dimmer, Loader, Segment, Table} from 'semantic-ui-react'
import {isEmpty, isLoaded} from "react-redux-firebase";

class AutoList extends React.Component {
    render() {
        const tableToWork = this.props.tableToWork
        const fields = this.props.fields
        const labels = this.props.labels


        //Loader till we have the data
        if (!isLoaded(tableToWork))
            return (<Segment padded>
                <Dimmer active inverted >
                    <Loader />
                </Dimmer>
            </Segment>);

        if (isEmpty(tableToWork)) return <div>'No resources available'</div>

        const printHeader = labels.map((field, index) => <Table.HeaderCell key={index}>{field}</Table.HeaderCell>)

        const printFields = Object.keys(tableToWork).map((keyName) => {
            return  <Table.Row key={keyName}>
                {fields.map((field, index) => <Table.Cell key={index}>{tableToWork[keyName][field]}</Table.Cell>)}
            </Table.Row>
        })

        return <div>
            <Table celled padded selectable>
                <Table.Header>
                    <Table.Row >
                        {printHeader}
                     </Table.Row>
                </Table.Header>
                <Table.Body>
                    { printFields }
                </Table.Body>
            </Table>
        </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        tableToWork: state.firebase.data[ownProps.table]
    };
}

export default compose(
    firebaseConnect((props) => ([
        props.table
    ])),
    connect(mapStateToProps)
)(AutoList)