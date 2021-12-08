import React, {useEffect} from 'react'
import {Container} from "semantic-ui-react";
import WhyRighter from "../../common/WhyRighter";
import {useMediaQuery} from "react-responsive";
import ReactGA from "react-ga4";

const WhyRighterPage = () => {

    useEffect(() => { document.title = "Why Righter" }, []);
    ReactGA.send({ hitType: "pageview"});

    const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return(
        <div>
            {isMobile &&
                <Container textAlign={'center'} style={{padding: '0em 0em 4em 0em'}}>
                    <WhyRighter />
                </Container>
            }

            {isDesktop &&
                <Container textAlign={'left'} style={{padding: '4em 0em 4em 0em'}}>
                    <WhyRighter />
                </Container>
            }
        </div>
    );
};

export default WhyRighterPage;