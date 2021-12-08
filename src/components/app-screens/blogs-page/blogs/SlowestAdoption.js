import React, {useEffect} from 'react'
import {Container, Header, Label, Image} from "semantic-ui-react";
import ReactGA from "react-ga4";

const SlowestAdoption = () => {

    useEffect(() => { document.title = "Why online cloth purchasing has the slowest adoption across the categories?" }, []);
    ReactGA.send({hitType: "pageview"});

    return (
        <div>
            <Container textAlign={'left'} style={{minHeight: '37em', paddingBottom:'3em', paddingLeft: '4em', paddingRight: '2em'}}>
                <Header textAlign='left' as='h1' style={{fontSize: '2.5em', padding: '2.5em 0em 0.5em 0em'}}>
                    Why online cloth purchasing has the slowest adoption across the categories?
                </Header>

                <Label circular size={"large"}>
                    <Image avatar spaced='right' src='https://react.semantic-ui.com/images/avatar/large/steve.jpg' />
                    Tarun Kedia
                </Label>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '1em 0em 0.5em 0em', color:"#484848"}}>
                    For a consumer, shopping not only solves for functional need, but it also makes up for their emotional needs. Broadly, shopping reflects only the product element of itself. However, there is a lot of service element involved in the entire shopping journey. For the consumers, online & offline way of shopping is just a medium. The end goal which they want to achieve, is the same in both the cases. Every person chooses the medium basis the variation in weightages to the various elements of the shopping journey.
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    Even if we keep the service element aside, the current offering which the online shopping platform gives, mostly solves for the functional needs of making a purchase. The additional value add for that particular medium is that the consumer does not have to step out of its house. However, as compared to the offline medium, there is a lot of deficiency too due to which there is a mass which is still waiting for a revolutionary product solving for their need.
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    In today’s time too, the customer is forced to make a decision without an accurate information about the product. As far as cloth as a category is concerned, design, color, fitting & fabric are the four most important decision making parameters when it comes to shopping. The online purchase converts into return order as soon as any of the above mentioned elements is not as per the consumer need. The customer does not directly pay for returning those products. However, the cost of reverse logistics (depending upon the return %age on a particular platform) is already included in the product price which indirectly the consumer itself is paying.
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    The current form of online shopping mostly solves for the design and color. However, there is a major gap in terms of fitting & fabric quality which the consumer is not able to evaluate at the time of purchase. Most of the times, the product evaluation on these parameters happens post purchase which leads to a lot of wastage.
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    Righter is an e-commerce platform revolutionizing the online cloth purchase segment by solving the need gap of fitting & fabric quality. On this particular platform, one can request for the fabric sample. Also, all the products on this platform are manufactured on made to measure basis. Righter’s representative visits the home for the body measurement once the order is placed.
                </p>

                <p textAlign='left' style={{fontSize: '1.5em', padding: '0em 0em 0.5em 0em', color:"#484848"}}>
                    To explore more, visit at www.righter.club
                </p>
            </Container>
        </div>
    )
}

export default SlowestAdoption;