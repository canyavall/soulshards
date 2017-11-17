//Main
import React from 'react';

//Components & Containers
import MenuContainer from '../components/Menu/Menu';
import ResourceTable from '../components/ResourceTable/ResourceTable';

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
            <ResourceTable />
        </div>
    </div>
);

export default Resource;