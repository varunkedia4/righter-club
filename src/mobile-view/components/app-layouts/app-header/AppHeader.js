import React, {useState} from 'react';
import {createMedia} from "@artsy/fresnel";
import {useNavigate} from "react-router-dom";
import { Menu, Icon, Button } from 'semantic-ui-react'
import {navigationLinks} from "../../../constants/NavigationLinks";
import {commonConstants} from "../../../constants/Common";
import SideMenu from "./SideMenu";

const { Media, MediaContextProvider } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})

const MobileHeader = () => {

    const navigate = useNavigate();
    const [isMenuVisible, setSideMenuVisible] = useState(false);

    const handleNavigation = (navigationLink) => {
        setSideMenuVisible(false);
        navigate(navigationLink);
    }

    return(
        <Media at='mobile'>
            <Menu fixed='top' inverted borderless fluid widths={3}>
                <Menu.Item as='a' onClick={() => setSideMenuVisible(true)}> <Icon name='bars' size={'large'}/> </Menu.Item>
                <Menu.Item as='a'>
                    <Button basic inverted href={navigationLinks.HOME} onClick={() => handleNavigation(navigationLinks.HOME)}> {commonConstants.RIGHTER} </Button>
                </Menu.Item>
                <Menu.Item as='a' target='_blank' href={navigationLinks.WHATSAPP}> <Icon name='whatsapp' size={'large'} color={'green'}/> </Menu.Item>
            </Menu>

            <SideMenu closeMenu={() => setSideMenuVisible(false)} isMenuVisible={isMenuVisible} />
        </Media>
    );
};

const AppHeader = () => (
    <MediaContextProvider>
        <MobileHeader />
    </MediaContextProvider>
)

export default AppHeader;