import React, {useEffect} from 'react'
import {Container, Header, Label, Image} from "semantic-ui-react";
import ReactGA from "react-ga4";

const ApparelOyo = () => {

    useEffect(() => { document.title = "OYO of Apparel Industry" }, []);
    ReactGA.send({hitType: "pageview"});

    return (
        <div>
            <Container textAlign={'left'} style={{minHeight: '37em', paddingBottom:'3em', paddingLeft: '4em', paddingRight: '2em'}}>
                <Header textAlign='left' as='h1' style={{fontSize: '2.5em', padding: '2.5em 0em 0.5em 0em'}}>
                    OYO of Apparel Industry
                </Header>

                <Label circular size={"large"}>
                    <Image avatar spaced='right' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                    Tarun Kedia
                </Label>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '1em 0em 0.5em 0em', color:"#484848"}}>
                    What has OYO actually solved for?
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    Predictability at an affordable price, isn’t it ?
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    Do you remember an era where a person used to book hotel rooms only post having a look at the room and the facilities over there. The unpredictability in the mid to low budget hotels was huge. The entire industry was unorganized. What OYO did by bringing all of them under a single umbrella, is standardization of the facilities, the look & feel in the mid to low budget hotel segment. Ultimately it led to the change in consumer behavior where people started booking the budget hotel rooms too without physically looking at it. Before this, this only used to happen with the high-end hotel rooms like The Taj, Oberoi, Hilton, etc.
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    What OYO executed beautifully is the disintegration of luxury elements from the elements related to predictability. OYO is not known for luxury hotels but it has certain standards which solves for the functional need of a person looking for a budget hotel. This is what has led to the change in consumer behavior.
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    Similarly, bespoke manufacturing in apparel industry is not a new concept. It has been there since ages. However, the access to bespoke manufacturing is limited to very few mostly the upper strata of our society. Companies like Righter are making the bespoke manufacturing affordable by using the new-age technologies to improve the supply chain inefficiencies. Technology has also made it possible to eliminate the need of multiple visits to the customer’s place. It would be interesting to see how Righter will be able to revolutionize the online apparel purchase segment where consumers are still struggling to get the right fit & fabric quality. In a way, post purchase evaluation on these two parameters in today’s time is analogous to the physical verification of hotel rooms.
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    To explore more, visit at www.righter.club
                </p>
            </Container>
        </div>
    )
}

export default ApparelOyo;