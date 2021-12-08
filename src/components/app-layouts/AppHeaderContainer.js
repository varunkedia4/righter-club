import React, {useState} from 'react';
import {createMedia} from "@artsy/fresnel";
import {useNavigate} from "react-router-dom";
import {Button, Container, Menu, Segment, Sidebar,Icon} from "semantic-ui-react";
import {redirectionLinks} from "../../constants/ApplicationConstants";
import {sendClickEvent} from "../../util/CommonUtils";

const { Media, MediaContextProvider } = createMedia({
    breakpoints: {
        mobile: 0,
        tablet: 768,
        computer: 1024,
    },
})

const DesktopContainer = (props) => {

    const navigate = useNavigate();
    const { children } = props

    const handleNavigation = (navigationLink, navigationPage) => {
        navigate(navigationLink);
        sendClickEvent("header-button", "Header Button", navigationPage);
    }

    return (
        <Media greaterThan='mobile' className="app-header">
            <Segment textAlign='center' vertical style={{ background: '#000000' }}>
                <Menu fixed={'top'} secondary={true} size='large' style={{ background: '#000000', padding: '1em 1em' }}>
                    <Container>
                        <Menu.Item>
                            <Button basic inverted
                                    href={redirectionLinks.HOME}
                                    onClick={() => handleNavigation(redirectionLinks.HOME, "home")}
                            >
                                Righter
                            </Button>
                        </Menu.Item>

                        <Menu.Item position='right'>
                            <a href={redirectionLinks.START_SHOPPING}
                               onClick={() => handleNavigation(redirectionLinks.START_SHOPPING, "start-shopping")}
                               style={{ cursor: 'pointer', marginRight: '2em', color: 'white' }}
                            >
                                Get Started
                            </a>

                            <a href={redirectionLinks.HOW_IT_WORKS}
                               onClick={() => handleNavigation(redirectionLinks.HOW_IT_WORKS, "how-it-works")}
                               style={{ cursor: 'pointer', marginRight: '2em', color: 'white' }}
                            >
                                How it works
                            </a>

                            <a href={redirectionLinks.WHY_RIGHTER}
                               onClick={() => handleNavigation(redirectionLinks.WHY_RIGHTER, "why-righter")}
                               style={{ cursor: 'pointer', marginRight: '2em', color: 'white' }}
                            >
                                Why Righter
                            </a>

                            <a href={redirectionLinks.OUR_STORY}
                               onClick={() => handleNavigation(redirectionLinks.OUR_STORY, "our-story")}
                               style={{ cursor: 'pointer', marginRight: '2em', color: 'white' }}
                            >
                                Our Story
                            </a>

                            <a  href={redirectionLinks.CONTACT_US}
                                onClick={() => handleNavigation(redirectionLinks.CONTACT_US, "contact-us")}
                                style={{ cursor: 'pointer', marginRight: '2em', color: 'white' }}
                            >
                                Contact us
                            </a>
                        </Menu.Item>
                    </Container>
                </Menu>
            </Segment>

            {children}

        </Media>
    );
};

const MobileContainer = (props) => {

    const navigate = useNavigate();
    const { children } = props
    const [isSideBarOpen, setSideBarOpen] = useState(false);

    const handleNavigation = (navigationLink, navigationPage) => {
        setSideBarOpen(false);
        navigate(navigationLink);
        sendClickEvent("side-bar-button", "Side Bar Button", navigationPage);
    }

    return(
        <Media as={Sidebar.Pushable} at='mobile'>
            <Sidebar.Pushable>
                <Sidebar as={Menu} animation='overlay' inverted onHide={() => setSideBarOpen(false)} vertical visible={isSideBarOpen}>
                    <Menu.Item as='a'
                               href={redirectionLinks.HOME}
                               onClick={() => handleNavigation(redirectionLinks.HOME, "home")}
                    >
                        Home
                    </Menu.Item>
                    <Menu.Item as='a'
                               href={redirectionLinks.START_SHOPPING}
                               onClick={() => handleNavigation(redirectionLinks.START_SHOPPING, "start-shopping")}
                    >
                        Get Started
                    </Menu.Item>
                    <Menu.Item as='a'
                               href={redirectionLinks.HOW_IT_WORKS}
                               onClick={() => handleNavigation(redirectionLinks.HOW_IT_WORKS, "how-it-works")}
                    >
                        How it works
                    </Menu.Item>
                    <Menu.Item as='a'
                               href={redirectionLinks.WHY_RIGHTER}
                               onClick={() => handleNavigation(redirectionLinks.WHY_RIGHTER, "why-righter")}
                    >
                        Why Righter
                    </Menu.Item>
                    <Menu.Item as='a'
                               href={redirectionLinks.OUR_STORY}
                               onClick={() => handleNavigation(redirectionLinks.OUR_STORY, "our-story")}
                    >
                        Our Story
                    </Menu.Item>
                    <Menu.Item as='a'
                               href={redirectionLinks.CONTACT_US}
                               onClick={() => handleNavigation(redirectionLinks.CONTACT_US, "contact-us")}
                    >
                        Contact us
                    </Menu.Item>
                </Sidebar>

                <Sidebar.Pusher dimmed={isSideBarOpen}>
                    <Segment inverted textAlign='center' style={{ minHeight: 50, padding: '0em 0em 0em 0em' }} vertical>
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item onClick={() => setSideBarOpen(true)}> <Icon name='sidebar' /> </Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted
                                            href={redirectionLinks.START_SHOPPING}
                                            onClick={() => handleNavigation(redirectionLinks.START_SHOPPING, "start-shopping")}
                                    >
                                        Get Started
                                    </Button>
                                </Menu.Item>
                            </Menu>
                        </Container>
                    </Segment>

                    {children}

                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Media>
    );
};

const AppHeaderContainer = ({ children }) => (
    <MediaContextProvider>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </MediaContextProvider>
)

export default AppHeaderContainer;