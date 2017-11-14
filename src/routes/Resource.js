//Main
import React from 'react';

//Components & Containers
import MenuContainer from '../containers/Menu';
import ResourceTable from '../containers/ResourceTable';
import ResourceAdd from '../components/ResourceAdd';

//utils
import { menuStyle, containerStyle, mainStyle } from "./style";

const Resource = () => (
    <div style={containerStyle.wrapper}>
        <div style={menuStyle.wrapper}>
            <MenuContainer/>
        </div>
        <div style={mainStyle.wrapper}>
            <h1>Resources</h1>
            <hr />
            <ResourceAdd />
            <ResourceTable />
        </div>
    </div>
);

export default Resource;