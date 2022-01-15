import React, {useEffect} from 'react'
import ReactGA from "react-ga4";
import {Typography} from "antd";
import {blogsTitle, blogsReadTime, blogsWriter} from "../../../../constants/Blogs";
import {navigationLinks} from "../../../../constants/NavigationLinks";

const BlogsTwoPage = () => {

    useEffect(() => { document.title = blogsTitle.TWO }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Text, Title } = Typography;

    return (
        <div style={{paddingTop: '3.5em'}}>
            <div id='BlogTitle' style={{backgroundColor: "#E8E8E8", paddingTop: '1.5em', marginBottom: '1em', textAlign: 'center', paddingBottom: '1em'}}>
                <Title level={5}>{blogsTitle.TWO}</Title>
                <Text>{blogsWriter.TWO + " | " + blogsReadTime.TWO}</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>What has OYO actually solved for?</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Predictability at an affordable price, isn’t it?</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Do you remember an era where a person used to book hotel rooms only post having a look at the room and the facilities over there. The unpredictability in the mid to low budget hotels was huge. The entire industry was unorganized. What OYO did by bringing all of them under a single umbrella, is standardization of the facilities, the look & feel in the mid to low budget hotel segment. Ultimately it led to the change in consumer behavior where people started booking the budget hotel rooms too without physically looking at it. Before this, this only used to happen with the high-end hotel rooms like The Taj, Oberoi, Hilton, etc.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>What OYO executed beautifully is the disintegration of luxury elements from the elements related to predictability. OYO is not known for luxury hotels but it has certain standards which solves for the functional need of a person looking for a budget hotel. This is what has led to the change in consumer behavior.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Similarly, bespoke manufacturing in apparel industry is not a new concept. It has been there since ages. However, the access to bespoke manufacturing is limited to very few mostly the upper strata of our society. Companies like Righter are making the bespoke manufacturing affordable by using the new-age technologies to improve the supply chain inefficiencies. Technology has also made it possible to eliminate the need of multiple visits to the customer’s place. It would be interesting to see how Righter will be able to revolutionize the online apparel purchase segment where consumers are still struggling to get the right fit & fabric quality. In a way, post purchase evaluation on these two parameters in today’s time is analogous to the physical verification of hotel rooms.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '2em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>To explore more, visit at <a href={navigationLinks.HOME}>www.righter.club</a></Text>
            </div>
        </div>
    );
};
export default BlogsTwoPage;