import React, {useState} from 'react';
import {createMedia} from "@artsy/fresnel";
import { Menu, Icon } from 'semantic-ui-react'
import {navigationLinks} from "../../../constants/NavigationLinks";
import SideMenu from "./SideMenu";

const { Media, MediaContextProvider } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})

const MobileHeader = () => {

    const [isMenuVisible, setSideMenuVisible] = useState(false);

    const whatsAppNavigationLink = navigationLinks.WHATSAPP + "/?text=" +
        "Hi Righter! I'm looking for tailor made men's wear. Help me get started.";

    return(
        <Media at='mobile'>
            <Menu style={{backgroundColor: '#ffffff'}} fixed='top' inverted borderless fluid widths={3}>
                <Menu.Item as='a' style={{color: '#000000'}} onClick={() => setSideMenuVisible(true)}>
                    <Icon name='bars' size={'large'}/>
                </Menu.Item>
                <Menu.Item as='a' style={{color: '#000000', fontSize: '1.2em'}} href={navigationLinks.HOME}> Righter </Menu.Item>
                <Menu.Item as='a' target='_blank' style={{color: '#25D366'}} href={whatsAppNavigationLink}>
                    <Icon name='whatsapp' size={'large'}/>
                </Menu.Item>
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