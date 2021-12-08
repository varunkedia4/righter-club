import React  from 'react'
import {Card, Header, Icon, Image} from "semantic-ui-react";

const Testimonial = (props) => {
    return(
        <Card>
            <Card.Content>
                <Image circular floated='right' size='mini' src={"https://react.semantic-ui.com/images/avatar/large/steve.jpg"}/>
                <Card.Header textAlign='left'> {props.name} </Card.Header>
                <Card.Meta textAlign='left'> <Icon name='map marker alternate' /> {props.location} </Card.Meta>
                <Card.Description>{props.description}</Card.Description>
            </Card.Content>
        </Card>
    );
};

const AllTestimonials = () => {

    const firstDescription = "Just like how you would get your traditional wear stitched at your local tailor, " +
                        "minus all the headaches of running around and chasing.";
    const secondDescription = "I got a design that I really liked and got the dress delivered within 15 days. " +
                               "Righter helped in making altering to make sure it fits me right. Amazing service!";
    const thirdDescription = "Even though I was a little doubtful, I got a sherwani stiched for my brother’s wedding. " +
                            "The Sherwani fits my really perfect and I’m superrrr impressed.";
    const fourthDescription = "4.3 out of 5. Definitely will be my go place for traditional wear!!!";


    return(
        <div className="Testimonials">
            <Header as='h1' style={{fontSize: '3em', padding: '1.5em 0em 0.5em 0em'}}>
                What our customers think of us
            </Header>
            <Card.Group itemsPerRow={4} stackable>
                <Testimonial name="Anurag Gupta" location="Mumbai" description={firstDescription}/>
                <Testimonial name="Rohan Dutta" location="Hyderabad" description={fourthDescription}/>
                <Testimonial name="Ajay Poddar" location="Lucknow" description={secondDescription}/>
                <Testimonial name="Jay Verma" location="Gurgaon" description={thirdDescription}/>
            </Card.Group>
        </div>
    );
};

export default AllTestimonials;