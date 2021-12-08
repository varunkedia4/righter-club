import React, {useEffect} from 'react'
import {Container, Header} from "semantic-ui-react";
import ReactGA from "react-ga4";

const OurStoryPage = () => {

    useEffect(() => { document.title = "Our Story" }, []);
    ReactGA.send({ hitType: "pageview"});

    return(
        <Container textAlign={'left'}>
            <Header textAlign='left' as='h1' style={{fontSize: '3em', padding: '2.5em 0em 0.5em 0em'}}>
                Our Story
            </Header>
            <p style={{fontSize: '1.2em', padding: '0em 0em 0.5em 0em', margin: '0em', color: '#484848'}}>
                First impression is a lasting impression and we at righter.club believe that every individual deserves to give out a great first impression by way of dressing well.
            </p>

            <p style={{fontSize: '1.2em', padding: '0em 0em 0.5em 0em', margin: '0em', color: '#484848'}}>
                Dressing well, therefore, must be easy, accessible and should be an everyday affair. Yet it is not. Traditional brands have simplified dressing by modelling clothes around toned muscular bodies. These rarely reflect one’s original body types and hence never landing a perfect fit for you.
            </p>

            <p style={{fontSize: '1.2em', padding: '0em 0em 0.5em 0em', margin: '0em', color: '#484848'}}>
                At righter.club, our experienced design professionals make a perfect fit accessible for you so that you don’t have to wear clothes that are designed for someone else. Every customer on righter is unique, a model is himself and hence gets an outfit exclusively tailored for him.
            </p>

            <p style={{fontSize: '1.2em', padding: '0em 0em 0.5em 0em', margin: '0em', color: '#484848'}}>
                Our process :
                <ul>
                    <li>Customer chooses among the many designs available on our website</li>
                    <li>Customer selects the fabric and gives his measurements from the comfort of his home</li>
                    <li>Customer gets a made to measure outfit delivered to his within the timeframe</li>
                </ul>

            </p>

            <p style={{fontSize: '1.2em', padding: '0em 0em 0.5em 0em', margin: '0em', color: '#484848'}}>
                Our collection of designs reflect the latest trends in the Indian men’s ethnic wear category and they’re periodically updating. Our wide range of available fabrics makes it possible for customers to mix and match design patterns and material should they choose to. Once a design is finalised our tailoring team swings to action with a 98% first time precision to deliver the right sized attire.
            </p>

            <p style={{fontSize: '1.2em', padding: '0em 0em 0.5em 0em', margin: '0em', color: '#484848'}}>
                Righter assures of a 100% resizing should there be a gap between the perfect fit desired and delivered, at no additional cost. Our customers always wear perfect fitting clothes, 100% of the time.
            </p>

            <p style={{fontSize: '1.2em', padding: '0em 0em 0.5em 0em', margin: '0em', color: '#484848'}}>
                Our unique full stack technology enabled marketplace model keeps artisans at the centre of the value generating ecosystem. Each artisan on the platform is carefully selected based on the skill and ability to consistently deliver top quality stitch with minimum need to resize.
            </p>

            <p style={{fontSize: '1.2em', padding: '0em 0em 3.5em 0em', margin: '0em', color: '#484848'}}>
                We welcome customer feedback at contact@righter.club
            </p>

        </Container>
    );
};

export default OurStoryPage;
