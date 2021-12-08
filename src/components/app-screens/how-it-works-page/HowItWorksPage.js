import React, {useEffect} from 'react'
import {Container} from "semantic-ui-react";
import HowItWorks from "../../common/HowItWorks";
import {useMediaQuery} from "react-responsive";
import ReactGA from "react-ga4";

const HowItWorksPage = () => {

    useEffect(() => { document.title = "How it works" }, []);
    ReactGA.send({ hitType: "pageview"});

    const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return(
        <div>
            {isMobile &&
                <Container textAlign={"center"} style={{minHeight: '37em', padding: '0em 0em 4em 0em'}}>
                    <HowItWorks />
                </Container>
            }

            {isDesktop &&
                <Container textAlign={"left"} style={{minHeight: '37em', padding: '4em 0em 4em 0em'}}>
                    <HowItWorks />
                </Container>
            }
        </div>
    );
};

export default HowItWorksPage;