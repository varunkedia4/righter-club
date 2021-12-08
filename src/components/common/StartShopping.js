import React from 'react'
import {Card, Header, Icon} from "semantic-ui-react";
import {redirectionLinks} from "../../constants/ApplicationConstants";

const StartShopping = () => {

    return(
        <div className="StartShopping">
            <Header as='h1' style={{fontSize: '3em', padding: '1.5em 0em 0.5em 0em'}}>Start Shopping</Header>
            <Card.Group centered itemsPerRow={2} stackable>
                <Card link target="_blank" href={redirectionLinks.UPLOAD_YOUR_OWN_DESIGN_GFORM} style={{backgroundColor:'#F0F0F0'}}>
                    <Card.Content>
                        <Card.Header textAlign={'center'} style={{fontSize: '2em', paddingTop:'0.5em'}}>
                            <Icon name='upload' /> Send us your design
                        </Card.Header>
                        <Card.Description textAlign={'center'}>
                            Send the design of your choice and we promise to get that custom made only for you
                        </Card.Description>
                    </Card.Content>
                </Card>

                <Card link href={redirectionLinks.KURTA} style={{backgroundColor:'#F0F0F0'}}>
                    <Card.Content>
                        <Card.Header textAlign={'center'} style={{fontSize: '2em', paddingTop:'0.5em'}}>
                            <Icon name='search' /> Browse our collection
                        </Card.Header>
                        <Card.Description textAlign={'center'}>
                            Explore the tastefully selected Righter's design for your outfits & get that custom made only for you
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
};
export default StartShopping;