//Main
import React from 'react';
//Components & Containers
import AutoList from '../containers/autoform/AutoList'
//utils
import {mainStyle} from "./style";

const Login = () => (
        <div style={mainStyle.wrapper}>
            <AutoList table="resources"
                      labels={["Picture", "Name", "Description", "Value", "Status"]}
                      fields={["picture", "name", "description", "value", "status"]}
            />
        </div>
);

export default Login;