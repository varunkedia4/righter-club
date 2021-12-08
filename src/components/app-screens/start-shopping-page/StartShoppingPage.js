import React, {useEffect} from 'react'
import {Container} from "semantic-ui-react";
import ReactGA from "react-ga4";
import {useMediaQuery} from "react-responsive";
import StartShopping from "../../common/StartShopping";

const StartShoppingPage = () => {

    useEffect(() => { document.title = "Start Shopping" }, []);
    ReactGA.send({ hitType: "pageview"});

    const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return(
        <div>
            {isMobile &&
                <Container textAlign={"center"} style={{minHeight: '37em', padding: '0em 0em 4em 0em'}}>
                    <StartShopping />
                </Container>
            }

            {isDesktop &&
                <Container textAlign={"left"} style={{minHeight: '37em', padding: '2.5em 0em 4em 0em'}}>
                    <StartShopping />
                </Container>
            }
        </div>
    );
};
export default StartShoppingPage;