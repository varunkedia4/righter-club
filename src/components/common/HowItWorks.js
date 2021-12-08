import React  from 'react'
import {Header, Icon, Step} from "semantic-ui-react";

const HowItWorks = () => {

    return(
        <div className="HowItWorks">
            <Header as='h1' style={{fontSize: '3em', padding: '1em 0em 0.5em 0em'}}>How it works</Header>
            <Step.Group>
                <Step>
                    <Icon name='mobile alternate' />
                    <Step.Content>
                        <Step.Title>Design</Step.Title>
                        <Step.Description style={{color: '#616161'}}>Send us your own design or</Step.Description>
                        <Step.Description style={{color: '#616161'}}>browse our collections</Step.Description>
                    </Step.Content>
                </Step>
                <Step>
                    <Icon name='building outline' />
                    <Step.Content>
                        <Step.Title>Measurement</Step.Title>
                        <Step.Description style={{color: '#616161'}}>Get your measurements done</Step.Description>
                        <Step.Description style={{color: '#616161'}}>at home</Step.Description>
                    </Step.Content>
                </Step>
                <Step>
                    <Icon name='truck' />
                    <Step.Content>
                        <Step.Title>Delivery</Step.Title>
                        <Step.Description style={{color: '#616161'}}>Get your orders delivered</Step.Description>
                        <Step.Description style={{color: '#616161'}}>on time</Step.Description>
                    </Step.Content>
                </Step>
                <Step>
                    <Icon name='redo' />
                    <Step.Content>
                        <Step.Title>Resize</Step.Title>
                        <Step.Description style={{color: '#616161'}}>Get them resized for 2 years,</Step.Description>
                        <Step.Description style={{color: '#616161'}}>no questions asked</Step.Description>
                    </Step.Content>
                </Step>
            </Step.Group>
        </div>
    );
};

export default HowItWorks;