import React, {useEffect, useState} from 'react'
import {Carousel, Drawer} from 'antd';
import {Container, Button, Icon, Image, Header} from 'semantic-ui-react'
import HowItWorks from "../../common/HowItWorks";
import AllCategories from "../../common/AllCategories";
import WhyRighter from "../../common/WhyRighter";
import AllTestimonials from "../../common/AllTestimonials";
import {homePageImageLinks, redirectionLinks} from "../../../constants/ApplicationConstants";
import {useNavigate} from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import ReactGA from "react-ga4";
import {sendClickEvent} from "../../../util/CommonUtils";
import StartShopping from "../../common/StartShopping";

const GetStartedButton = (props) => {
    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(redirectionLinks.START_SHOPPING);
        sendClickEvent("home", "Get Started Button", "start-shopping");
    }

    return (
        <Button animated secondary size={props.size} href={redirectionLinks.START_SHOPPING} onClick={handleNavigation}>
            <Button.Content visible>Get Started</Button.Content>
            <Button.Content hidden><Icon name='arrow right' /></Button.Content>
        </Button>
    );
};

const MobileCarouselImage = () => {
    return(
        <Carousel autoplay autoplaySpeed={3500} pauseOnHover={false} style={{padding: '0em 0em 2em 0em'}}>
            <Image src={homePageImageLinks.WELCOME[0]} />
            <Image src={homePageImageLinks.WELCOME[1]} />
            <Image src={homePageImageLinks.WELCOME[2]} />
            <Image src={homePageImageLinks.WELCOME[3]} />
            <Image src={homePageImageLinks.WELCOME[4]} />
            <Image src={homePageImageLinks.WELCOME[5]} />
        </Carousel>
    );
};

const DesktopCarouselImage = () => {
    return(
        <Carousel autoplay autoplaySpeed={3500} pauseOnHover={false} style={{padding: '0em 0em 2em 0em', maxHeight:'700px'}}>
            <Image src={homePageImageLinks.WELCOME[0]} />
            <Image src={homePageImageLinks.WELCOME[1]} />
            <Image src={homePageImageLinks.WELCOME[2]} />
            <Image src={homePageImageLinks.WELCOME[3]} />
            <Image src={homePageImageLinks.WELCOME[4]} />
            <Image src={homePageImageLinks.WELCOME[5]} />
        </Carousel>
    );
};

const AssistanceSlider = () => {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = () => {
        setVisible(false);
        navigate(redirectionLinks.CONTACT_US);
        sendClickEvent("assistance-slider", "Schedule a call Button", "contact-us")
    }

    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    return(
        <Drawer title="Looking for assistance?" placement={'bottom'} width={500} onClose={() => setVisible(false)} visible={visible}>
            <Header> <Icon name='whatsapp' /> 8809171314 </Header>
            <Header> <Icon name='mail outline' /> contact@righter.club </Header>
            <Header>
                <Button href={redirectionLinks.CONTACT_US} onClick={() => handleNavigation()} size={'large'} secondary> <Icon name='phone' /> Schedule a call </Button>
            </Header>
        </Drawer>
    );
}

const HomepageLayout = () => {

    useEffect(() => { document.title = "Welcome to Righter!" }, []);
    ReactGA.send({ hitType: "pageview"});

    const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div>
            {isMobile && <MobileCarouselImage />}
            {isDesktop && <DesktopCarouselImage />}

            {isMobile && <Container textAlign='center'> <GetStartedButton size={'big'} /> </Container>}
            {isDesktop && <Container textAlign='center'> <GetStartedButton size={'massive'} /> </Container>}

            {isMobile && <Container textAlign='center'> <HowItWorks /> </Container>}
            {isDesktop && <Container style={{padding: '4em 0em 0em 0em'}} textAlign='left'> <HowItWorks /> </Container>}

            {isMobile && <Container textAlign='center'> <StartShopping /> </Container>}
            {isDesktop && <Container textAlign='left'> <StartShopping /> </Container>}

            {isMobile && <Container textAlign='center'> <AllCategories /> </Container>}
            {isDesktop && <Container textAlign='left'> <AllCategories /> </Container>}

            {isMobile && <Container textAlign='center'> <WhyRighter /> </Container>}
            {isDesktop && <Container textAlign='left'> <WhyRighter /> </Container>}

            {isMobile && <Container textAlign='center'> <AllTestimonials /> </Container>}
            {isDesktop && <Container textAlign='left'> <AllTestimonials /> </Container>}

            {isMobile && <Container textAlign='center' style={{ padding: '3em 0em' }}> <GetStartedButton size={'big'} /> </Container>}
            {isDesktop && <Container textAlign='center' style={{ padding: '3em 0em' }}> <GetStartedButton size={'massive'} /> </Container>}

            <AssistanceSlider/>
        </div>
    );
};

export default HomepageLayout;