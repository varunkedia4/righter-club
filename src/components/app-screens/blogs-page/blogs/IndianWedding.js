import React, {useEffect} from 'react'
import {Container, Header, Label, Image} from "semantic-ui-react";
import ReactGA from "react-ga4";

const IndianWedding = () => {

    useEffect(() => { document.title = "Is the big Indian wedding market rip enough for a big shift?" }, []);
    ReactGA.send({hitType: "pageview"});

    return (
        <div>
            <Container textAlign={'left'} style={{minHeight: '37em', paddingBottom:'3em', paddingLeft: '4em', paddingRight: '2em'}}>
                <Header textAlign='left' as='h1' style={{fontSize: '2.5em', padding: '2.5em 0em 0.5em 0em'}}>
                    Is the big Indian wedding market rip enough for a big shift?
                </Header>

                <Label circular size={"large"}>
                    <Image avatar spaced='right' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                    Tarun Kedia
                </Label>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '1em 0em 0.5em 0em', color:"#484848"}}>
                    In this month alone (Dec’21), India is going to have approximately 2.5M weddings with a total spend of ~$40Bn. Having such a big market opportunity attracting a handful of online players across categories is something which is counter-intuitive in itself. The industry is mostly operating in a fragmented way and mostly championed by the local players.
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    What could be reason for the same?
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    Why the organized players are not able to capture the major share of the market?
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    Why customers are still dependent on unorganized players?
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    India being a multi-cultural nation, not only the taste of water changes every 30 kms, the language, the accent, the dressing style, almost the entire way of living used to change in the era where people used to meet less, talk less, exchange emotions less frequently. In the era of Facebook & WhatsApp, people are talking more frequently and becoming more open towards the acceptance of norms in various other regions.
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    Wedding is not aloof of this transition. At one point in time, the wedding rituals, events, dresses used to be drastically different from one another. However, with the desire to have Instagram wedding, people have started following similar traditions across various regions.
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    In the era where the traditions were localized, there was a reason for the existence of unorganized players in the wedding market. They used to add value in the consumer’s life with the localized knowledge and norms. At the same time, it was quite difficult for the organized players to standardize anything.
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    Today’s multi-cultural generation are now realizing a void for the existence of organized players across categories who can help them make their big day a memorable one. They are forced to be dependent on the unorganized players and compromise a lot in the overall journey in terms of variety and visualization. Apart from that, trust deficit between the two parties, non-fulfillment of the promises made at the time of purchase are the most common challenges consumers are facing.
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    There are few players like Righter who have started operating in this space and wanting to organize the wedding outfits market in India. They cover a huge range of outfits for men including Kurtas, Sherwanis, Nehru Jackets, Jodhpuri Suits, etc. on their platform and provide a wide variety of designs on their platform with no constraint on availability of the fabric. Also, they are building technology to make the visualization simpler than ever. Further, they stitch the outfits on made to measure basis so that you can reflect the best form of yourself.
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    To explore more, visit at www.righter.club
                </p>
            </Container>
        </div>
    )
}

export default IndianWedding;