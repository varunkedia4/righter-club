import React, {useEffect} from 'react'
import ReactGA from "react-ga4";
import {Typography} from "antd";
import {blogsTitle, blogsReadTime, blogsWriter} from "../../../../constants/Blogs";
import {navigationLinks} from "../../../../constants/NavigationLinks";

const BlogsThreePage = () => {

    useEffect(() => { document.title = blogsTitle.THREE }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Text, Title } = Typography;

    return (
        <div style={{paddingTop: '3.5em'}}>
            <div id='BlogTitle' style={{backgroundColor: "#E8E8E8", paddingTop: '1.5em', marginBottom: '1em', textAlign: 'center', paddingBottom: '1em'}}>
                <Title level={5}>{blogsTitle.THREE}</Title>
                <Text>{blogsWriter.THREE + " | " + blogsReadTime.THREE}</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>In this month alone (Dec’21), India is going to have approximately 2.5M weddings with a total spend of ~$40Bn. Having such a big market opportunity attracting a handful of online players across categories is something which is counter-intuitive in itself. The industry is mostly operating in a fragmented way and mostly championed by the local players.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>What could be reason for the same?</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Why the organized players are not able to capture the major share of the market?</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Why customers are still dependent on unorganized players?</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>India being a multi-cultural nation, not only the taste of water changes every 30 kms, the language, the accent, the dressing style, almost the entire way of living used to change in the era where people used to meet less, talk less, exchange emotions less frequently. In the era of Facebook & WhatsApp, people are talking more frequently and becoming more open towards the acceptance of norms in various other regions.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Wedding is not aloof of this transition. At one point in time, the wedding rituals, events, dresses used to be drastically different from one another. However, with the desire to have Instagram wedding, people have started following similar traditions across various regions.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>In the era where the traditions were localized, there was a reason for the existence of unorganized players in the wedding market. They used to add value in the consumer’s life with the localized knowledge and norms. At the same time, it was quite difficult for the organized players to standardize anything.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Today’s multi-cultural generation are now realizing a void for the existence of organized players across categories who can help them make their big day a memorable one. They are forced to be dependent on the unorganized players and compromise a lot in the overall journey in terms of variety and visualization. Apart from that, trust deficit between the two parties, non-fulfillment of the promises made at the time of purchase are the most common challenges consumers are facing.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>There are few players like Righter who have started operating in this space and wanting to organize the wedding outfits market in India. They cover a huge range of outfits for men including Kurtas, Sherwanis, Nehru Jackets, Jodhpuri Suits, etc. on their platform and provide a wide variety of designs on their platform with no constraint on availability of the fabric. Also, they are building technology to make the visualization simpler than ever. Further, they stitch the outfits on made to measure basis so that you can reflect the best form of yourself.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '2em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>To explore more, visit at <a href={navigationLinks.HOME}>www.righter.club</a></Text>
            </div>
        </div>
    );
};
export default BlogsThreePage;