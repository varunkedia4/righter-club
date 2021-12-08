import React, {useEffect, useState} from 'react'
import {Container, Header, Accordion, Icon} from "semantic-ui-react";
import ReactGA from "react-ga4";

const FAQPage = () => {

    useEffect(() => { document.title = "FAQs" }, []);
    ReactGA.send({ hitType: "pageview"});

    const [activeIndex, setActiveIndex] = useState(0);

    return(
        <Container textAlign={'left'} style={{minHeight: '37em', paddingBottom:'3em'}}>
            <Header textAlign='left' as='h1' style={{fontSize: '3em', padding: '2.5em 0em 0.5em 0em'}}>
                FAQs
            </Header>

            <Accordion fluid styled>
                <Accordion.Title active={activeIndex === 0} onClick={() => setActiveIndex(0)}>
                    <Icon name='dropdown' /> What is the ordering process of Righter?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                    <p>
                        The entire ordering process on Righter can be broadly divided into 5 steps:
                        <ul>
                            <li>Customer can either upload a design of his choice on the platform or choose one from Righter’s catalogue</li>
                            <li>Once the design is finalized, the customer schedules an expert’s visit for measurements.</li>
                            <li>Customers need to pay 50% of the estimated cost for the outfit confirming the order.</li>
                            <li>Within 15 days, the stitched outfit in the right size is delivered to the customer.</li>
                            <li>Balance of 50% of the cost is to be paid at the time of delivery.</li>
                        </ul>
                    </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 1} onClick={() => setActiveIndex(1)}>
                    <Icon name='dropdown' /> Can we make changes to the designs listed on the platform?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 1}>
                    <p>
                        We have an option on our website where customers can upload the design of their choice
                        and we will try to get the product stitched for them. However, for designs chosen from
                        Righter’s catalogue, resizing can be done.
                    </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 2} onClick={() => setActiveIndex(2)}>
                    <Icon name='dropdown' /> What kind of outfits can we get on Righter?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 2}>
                    <p>
                        As of now, Righter operates mostly in the
                        occasion wear categories like Kurta, Sherwani, Indo-western & Nehru Jackets only for men.
                    </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 3} onClick={() => setActiveIndex(3)}>
                    <Icon name='dropdown' /> What is the typical delivery time for the outfits?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 3}>
                    <p>
                        We promise to deliver the product within 15 days once the 50% confirmation token is made.
                    </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 4} onClick={() => setActiveIndex(4)}>
                    <Icon name='dropdown' /> Who comes for the measurement at my home?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 4}>
                    <p>
                        A tailor vetted and verified by Righter visits the house of the customer to take the body measurement.
                    </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 5} onClick={() => setActiveIndex(5)}>
                    <Icon name='dropdown' /> What if the outfit does not fit me after stitching?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 5}>
                    <p>
                        Righter gets fit accurately 95% of the time. However, in case the customer is not happy
                        with the fitting of the outfit, we promise to remake/resize the outfit without any
                        additional cost within 2 years of the delivery of the product. No questions asked.
                    </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 6} onClick={() => setActiveIndex(6)}>
                    <Icon name='dropdown' /> What is the payment term?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 6}>
                    <p>
                        We take 50%  payment in advance at the time of order placement
                        once the design is finalized and the remaining at the time of delivery.
                        The measurement is scheduled post the 50% payment is made.
                    </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 7} onClick={() => setActiveIndex(7)}>
                    <Icon name='dropdown' /> What if I want a refund for the product which I bought from Righter?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 7}>
                    <p>
                        For the made to measure products, it is difficult to process the refund. However,
                        we promise to remake/resize the outfit without any additional cost within 2 years
                        of the delivery of the product.
                    </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 8} onClick={() => setActiveIndex(8)}>
                    <Icon name='dropdown' /> I have already given measurements in the past. Do I need to give measurements again to buy a product from Righter?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 8}>
                    <p>
                        Preferably we would want to take the measurement once again just to reconfirm the changes if any.
                        However, if the customer is confident about the earlier measurement, we will stitch the outfit using the same data.
                    </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 9} onClick={() => setActiveIndex(9)}>
                    <Icon name='dropdown' /> How can I send the product back for resizing in the future?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 9}>
                    <p>
                        We do understand that the body measurement keeps changing on a regular basis.
                        Righter provides an additional promise of resizing the outfits without any cost
                        in future for 2 years. The customer only needs to mail us at contact@righter.club with all the details.
                    </p>
                </Accordion.Content>

                <Accordion.Title active={activeIndex === 10} onClick={() => setActiveIndex(10)}>
                    <Icon name='dropdown' /> Which all cities Righter is operational in?
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 10}>
                    <p>
                        Currently Righter is operational in two cities – Mumbai & Bangalore.
                    </p>
                </Accordion.Content>
            </Accordion>
        </Container>
    );
};
export default FAQPage;