import React  from 'react'
import {Header, Image, Card} from "semantic-ui-react";
import {homePageImageLinks} from "../../constants/ApplicationConstants";

const WhyRighter = () => {

    const secondReasonDescription = "The outfit that is designed only for you. We take pride in getting the perfection to " +
                                    "match your exact physique and not a model. Our process takes care of all the stages " +
                                    "so that you get an attire that is picture perfect.";

    const firstReasonDescription = "Ready-to-wear clothes are made for model-style bodies that often don't fit normal " +
                                    "unique body shapes. This time you’re shopping for that important occasion, don't let " +
                                    "them tell you a little bit of compromise in fitting is natural and is ok. Because it isn't.";

    return(
        <div className="WhyRighter">
            <Header as='h1' style={{fontSize: '3em', padding: '1em 0em 0.5em 0em'}}>Why Righter</Header>
            <Card.Group centered itemsPerRow={2} stackable>
                <Card>
                    <Image src={homePageImageLinks.REASON_ONE} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Ideal fit is no longer a myth</Card.Header>
                        <Card.Description>{firstReasonDescription}</Card.Description>
                    </Card.Content>
                </Card>

                <Card>
                    <Image src={homePageImageLinks.REASON_TWO} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>Wear clothes designed just for you</Card.Header>
                        <Card.Description>{secondReasonDescription}</Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
};

export default WhyRighter;