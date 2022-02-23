import React from 'react';
import {Row, Typography, Col} from "antd";
import {navigationLinks} from "../../../constants/NavigationLinks";
import {useNavigate} from "react-router-dom";
import {commonConstants} from "../../../constants/Common";

const SEOTexts = () => {

    const { Text } = Typography;
    const navigate = useNavigate();

    return(
        <div>
            <Row style={{paddingTop: "0.5em"}}><Text> Popular Searches </Text></Row>
            <Row style={{paddingTop: "0.5em"}}>
                <Text type="secondary"> Kurta | Sherwani | Kurta Payjama | Jodhpuri | Jodhpuri Suit | Indo Western Suit | Suits |
                    Suits with Vest | Three Piece Suit | Nehru Jacket | Modi Jacket | Designer Sherwani |
                    Celebrity Look Sherwani | Made to Measure Outfits | Bespoke Outfits | Doorstep Measurements |
                    Stitch to Fit | Custom Fit | Perfect Fit | Free Delivery | Doorstep Delivery | Free Measurement |
                    Made to Measure Outfits at Home | Measurement at Home | Ethnic Wear | Traditional Wear | Indian Wear |
                    Outfits for Men | Measurement at Home | Occasion Wear | Wedding Outfits | Wedding | Engagement | Haldi |
                    Mehendi | Holi | Diwali | Wedding Dress | Groom Wear | Wedding Outfits for Groom
                </Text>
            </Row>

            <Row style={{paddingTop: "1.5em"}}><Text> Shopping occasion wear made easy at Righter </Text></Row>
            <Row style={{paddingTop: "0.5em"}}>
                <Text type="secondary"> Buying outfits online was never so easy before Righter came into existence especially occasion wear.
                    For Indian families, occasions like weddings, celebrations &amp; festivals are not only an event to meet,
                    greet and celebrate with each other but these are events where people get a chance to show off
                    their wealth, personality, taste, lifestyle, etc. No one wants to leave any stone unturned and that is
                    the reason they want to be doubly sure about their looks, outfits &amp; makeup before deciding one.
                    Offline stores become a go-to-choice for the users in this scenario while it comes with a lot of inertia,
                    dilemma &amp; compromise. Some of the problems faced by the consumers at that stage are
                    <ol>
                        <li>Discovery of stores</li>
                        <li>Visit to multiple stores</li>
                        <li>Additional cost of transaction in terms of travel cost &amp; time</li>
                        <li>Limitation on the variety &amp; designs</li>
                        <li>Uncertainty in terms of visualization</li>
                        <li>Risk of fitting/Trust deficit</li>
                    </ol>
                </Text>
            </Row>

            <Row style={{paddingTop: "0.5em"}}>
                <Text type="secondary">
                    Righter has made it easy for the people by solving all the above problems mentioned.
                    <ol>
                        <li>You don’t need to discover us offline in streets. You can find us conveniently by vising our
                            website from your mobile phone at <a href={navigationLinks.HOME}>www.righter.club</a></li>
                        <li>You don’t need to visit multiple online stores as we are the best in the category</li>
                        <li>There is no cost of transaction involved. You can discover as well as visit us sitting at the
                            comfort of your living room.</li>
                        <li>The trendiest designs and print patterns are always available on stores. In case you still find
                            difficulty in discovering what you are looking for, you can reach out to our customer support.</li>
                        <li>Our cataloguing process solves for the paralyzed state of consumers in the offline stores.
                            Our customers are able to see how the fabric in a particular design looks and not really force
                            themselves to get into the work of imagination.</li>
                        <li>There is no risk involved in the entire journey. Consumers have to make 100% of the
                            payment post the delivery of the stitched product.</li>
                    </ol>
                </Text>
            </Row>

            <Row style={{paddingTop: "1.5em"}}><Text> Affordable Made to measure outfits now at fingertips </Text></Row>
            <Row style={{paddingTop: "0.5em"}}>
                <Text type="secondary">Times are gone when made to measure outfits used to be accessible only for the select set of people
                    in the society. Righter has gone one step ahead to make to accessible and affordable for everyone.
                    <ol>
                        <li>Our fabric sourcing is centralized which helps us source the same fabric at cheaper cost.</li>
                        <li>The turnover rate of the fabrics at the boutique stores tied up with Righter is 10X better
                            than an independent boutique store, which allows them to operate at minimum margin.</li>
                        <li>The turnover rate also helps us minimize the risk of dead stock because of fashion trends.
                            The cost benefit on that account is also passed on to our consumers.</li>
                        <li>The occupancy rate of our tailors is optimized at a level of 90% capacity utilization which
                            further gives us cost benefit to pass on to our end consumers.</li>
                    </ol>
                    So, by improving the efficiency at every stage right from fabric sourcing to stitching, Righter has
                    been able to make Made to measure outfits within the reach of common man.
                </Text>
            </Row>

            <Row style={{paddingTop: "1.5em"}}><Text> Righter’s way of operations </Text></Row>
            <Row style={{paddingTop: "0.5em"}}>
                <Text type="secondary">
                    Righter has come into existence in the year 2021 and aspires to become go-to-choice for people for
                    the purchase of men’s occasion wear. Our operating ways are defined by following broad principles:
                    <ol>
                        <li>Value for customers</li>
                        <li>Transparency</li>
                    </ol>
                </Text>
            </Row>

            <Row style={{paddingTop: "1.5em"}}><Text> Search Engine Optimization </Text></Row>
            <Row style={{paddingTop: "0.5em"}}>
                <Col span={12}> <Text type="secondary" onClick={() => navigate(navigationLinks.SITEMAP)}>{commonConstants.SITEMAP}</Text> </Col>
                <Col span={12}> <Text type="secondary" onClick={() => navigate(navigationLinks.ROBOTS)}>{commonConstants.ROBOTS}</Text> </Col>
            </Row>
        </div>
    );
};
export default SEOTexts;