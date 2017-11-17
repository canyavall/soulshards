//Main
import React from 'react';

//Components & Containers
import MenuContainer from '../components/Menu/Menu';
import HomeContainer from '../components/Home/Home';

//utils
import { menuStyle, containerStyle, mainStyle } from "./style";

const Home = () => (
    <div style={containerStyle.wrapper}>
        <div style={menuStyle.wrapper}>
            <MenuContainer/>
        </div>
        <div style={mainStyle.wrapper}>
            <HomeContainer />
        </div>
    </div>
);

export default Home;
