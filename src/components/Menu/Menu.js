//Main
import React from 'react';
import { connect } from 'react-redux';
import { Menu as MenuSemantic} from 'semantic-ui-react'
import { Link } from 'react-router-dom';

//Components & Containers



class Menu extends React.Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render () {
        const { activeItem } = this.state
        return (
            <MenuSemantic pointing vertical>
                <MenuSemantic.Item as={Link} to='/home' name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />

                <MenuSemantic.Item>
                    Game
                    <MenuSemantic.Menu>
                        <MenuSemantic.Item as={Link} to='/resource' name='resources' active={activeItem === 'resources'} onClick={this.handleItemClick} />
                        <MenuSemantic.Item name='avatars' active={activeItem === 'avatars'} onClick={this.handleItemClick} />
                        <MenuSemantic.Item name='buildings' active={activeItem === 'buildings'} onClick={this.handleItemClick} />
                        <MenuSemantic.Item name='rewards' active={activeItem === 'rewards'} onClick={this.handleItemClick} />
                        <MenuSemantic.Item name='quests' active={activeItem === 'quests'} onClick={this.handleItemClick} />
                        <MenuSemantic.Item name='achievements' active={activeItem === 'achievements'} onClick={this.handleItemClick} />
                    </MenuSemantic.Menu>
                </MenuSemantic.Item>

                <MenuSemantic.Item name='players' active={activeItem === 'players'} onClick={this.handleItemClick} />

                <MenuSemantic.Item name='payments' active={activeItem === 'payments'} onClick={this.handleItemClick} />
            </MenuSemantic>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    };
}

export default connect(mapStateToProps)(Menu);