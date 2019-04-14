import React, {Component} from "react";
import {Container, Image, Menu} from "semantic-ui-react";


/**
 * Navbar component for the application. Semi-responsive (will stack when in mobile mode,
 * but does not currently collapse).
 */
class AppNavbar extends Component {


    /**
     * Renders the navbar.
     *
     * @returns {*}
     */
    render() {
        const {children, leftItems, rightItems} = this.props;

        return (<div>
            <Menu inverted stackable>
                <Menu.Item>
                    <Image size="mini" src="https://react.semantic-ui.com/logo.png"/>
                </Menu.Item>
                {leftItems.map((item, idx) => <Menu.Item {...item} key={"menu item " + idx}/>)}
                <Menu.Menu position="right">
                    {rightItems.map((item, idx) => <Menu.Item {...item} key={"menu item " + idx}/>)}
                </Menu.Menu>
            </Menu>
            <Container style={{marginTop: "5em"}}>{children}</Container>
        </div>);
    }
}

export default AppNavbar;
