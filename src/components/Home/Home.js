//Main
import React from 'react';
import { connect } from 'react-redux';

//Components & Containers
import HomeComponent from './template/index';


class Home extends React.Component {


    render () {
        return <HomeComponent />
    }
}

const mapStateToProps = (state) => {
    return {
    };
}

export default connect(mapStateToProps)(Home);