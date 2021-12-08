import React, {useEffect} from 'react'
import {Container, Header} from "semantic-ui-react";
import ReactGA from "react-ga4";

const UploadYourOwnDesignPage = () => {

    useEffect(() => { document.title = "Send us your own design" }, []);
    ReactGA.send({ hitType: "pageview"});

    return(
        <Container textAlign={'left'} style={{minHeight: '37em'}}>
            <Header textAlign='left' as='h1' style={{fontSize: '3em', padding: '2.5em 0em 0.5em 0em'}}>
                Send Us Your Own Design
            </Header>
        </Container>
    );
};
export default UploadYourOwnDesignPage;