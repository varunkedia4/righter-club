import React from 'react';
import {Container, Grid, Header, List, Segment, Icon} from "semantic-ui-react";
import {useNavigate} from "react-router-dom";
import {redirectionLinks} from "../../constants/ApplicationConstants";
import {sendClickEvent} from "../../util/CommonUtils";

const AppFooter = () => {

    const navigate = useNavigate();

    const handleNavigation = (navigationLink, navigationPage) => {
        navigate(navigationLink);
        sendClickEvent("footer-link", "Footer Link", navigationPage);
    }

    return(
        <Segment vertical style={{ padding: '5em 0em', background: '#000000' }} >
            <Container>
                <Grid divided stackable>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            <Header inverted as='h4' content='Online Shopping' />
                            <List link inverted>
                                <List.Item as='a' href={redirectionLinks.UPLOAD_YOUR_OWN_DESIGN_GFORM} target="_blank">Send us your own design</List.Item>
                                <List.Item as='a' href={redirectionLinks.KURTA} onClick={() => handleNavigation(redirectionLinks.KURTA, "catalog-kurta")}>Browse our collection</List.Item>
                            </List>
                        </Grid.Column>

                        <Grid.Column width={4}>
                            <Header inverted as='h4' content='Righter  Collection' />
                            <List link inverted>
                                <List.Item as='a' href={redirectionLinks.KURTA} onClick={() => handleNavigation(redirectionLinks.KURTA, "catalog-kurta")}>Kurta & Kurta Sets</List.Item>
                                <List.Item as='a' href={redirectionLinks.SHERWANI} onClick={() => handleNavigation(redirectionLinks.SHERWANI, "catalog-sherwani")}>Sherwani</List.Item>
                                <List.Item as='a' href={redirectionLinks.INDO_WESTERN} onClick={() => handleNavigation(redirectionLinks.INDO_WESTERN, "catalog-indoWestern")}>Indo-western</List.Item>
                                <List.Item as='a' href={redirectionLinks.NEHRU_JACKETS} onClick={() => handleNavigation(redirectionLinks.NEHRU_JACKETS, "catalog-nehruJackets")}>Nehru Jackets</List.Item>
                            </List>
                        </Grid.Column>

                        <Grid.Column width={4}>
                            <Header inverted as='h4' content='Useful Links' />
                            <List inverted link>
                                <List.Item as='a' href={redirectionLinks.FAQ} onClick={() => handleNavigation(redirectionLinks.FAQ, "faq")}>FAQs</List.Item>
                                <List.Item as='a' href={redirectionLinks.BLOGS} onClick={() => handleNavigation(redirectionLinks.BLOGS, "blogs")}>Blogs</List.Item>
                                <List.Item as='a' href={redirectionLinks.FEEDBACK} onClick={() => handleNavigation(redirectionLinks.FEEDBACK, "feedback")}>Feedback</List.Item>
                                <List.Item as='a' href={redirectionLinks.OUR_STORY} onClick={() => handleNavigation(redirectionLinks.OUR_STORY, "our-story")}>Our Story</List.Item>
                                <List.Item as='a' href={redirectionLinks.HOW_IT_WORKS} onClick={() => handleNavigation(redirectionLinks.HOW_IT_WORKS, "how-it-works")}>How it works</List.Item>
                                <List.Item as='a' href={redirectionLinks.WHY_RIGHTER} onClick={() => handleNavigation(redirectionLinks.WHY_RIGHTER, "why-righter")}>Why Righter</List.Item>
                                <List.Item as='a' href={redirectionLinks.PRIVACY_POLICY} onClick={() => handleNavigation(redirectionLinks.PRIVACY_POLICY, "privacy-policy")}>Privacy Policy</List.Item>
                                <List.Item as='a' href={redirectionLinks.TERMS_AND_CONDITIONS} onClick={() => handleNavigation(redirectionLinks.TERMS_AND_CONDITIONS, "terms-and-conditions")}>Terms & Conditions</List.Item>
                            </List>
                        </Grid.Column>

                        <Grid.Column width={4}>
                            <Header inverted as='h4' content='Keep in touch' />
                            <List inverted link>
                                <List.Item as='a' > <Icon name='whatsapp'/> 8809171314</List.Item>
                                <List.Item as='a' href={redirectionLinks.CONTACT_US} onClick={() => handleNavigation(redirectionLinks.CONTACT_US, "contact-us")}> <Icon name='call'/> Schedule a call</List.Item>
                                <List.Item as='a' href="https://www.facebook.com/righter.club/" target="_blank"> <Icon name='facebook f'/> Connect on facebook</List.Item>
                                <List.Item as='a' href="https://www.instagram.com/righter.club/" target="_blank"> <Icon name='instagram'/> Connect on instagram</List.Item>
                                <List.Item as='a' href="https://www.linkedin.com/company/righter/" target="_blank"> <Icon name='linkedin'/> Connect on linkedIn</List.Item>
                                <List.Item as='a'> <Icon name='mail outline'/> contact@righter.club</List.Item>
                            </List>
                        </Grid.Column>

                    </Grid.Row>

                    <Grid.Row>
                        <Header inverted as='h5'>© 2021 www.righter.club. All rights reserved.</Header>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    );
};

export default AppFooter;
