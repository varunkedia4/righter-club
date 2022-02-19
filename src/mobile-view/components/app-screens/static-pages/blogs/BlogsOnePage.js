import React, {useEffect} from 'react'
import ReactGA from "react-ga4";
import {Typography} from "antd";
import {blogsTitle, blogsReadTime, blogsWriter} from "../../../../constants/Blogs";
import {navigationLinks} from "../../../../constants/NavigationLinks";

const BlogsOnePage = () => {

    useEffect(() => { document.title = blogsTitle.ONE }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Title, Text } = Typography;

    return (
        <div style={{paddingTop: '3.5em'}}>
            <div id='BlogTitle' style={{backgroundColor: "#e9f1f9", paddingTop: '1.5em', marginBottom: '1em', textAlign: 'center', paddingBottom: '1em'}}>
                <Title level={5}>{blogsTitle.ONE}</Title>
                <Text>{blogsWriter.ONE + " | " + blogsReadTime.ONE}</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>For a consumer, shopping not only solves for functional need, but it also makes up for their emotional needs. Broadly, shopping reflects only the product element of itself. However, there is a lot of service element involved in the entire shopping journey. For the consumers, online & offline way of shopping is just a medium. The end goal which they want to achieve, is the same in both the cases. Every person chooses the medium basis the variation in weightages to the various elements of the shopping journey.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Even if we keep the service element aside, the current offering which the online shopping platform gives, mostly solves for the functional needs of making a purchase. The additional value add for that particular medium is that the consumer does not have to step out of its house. However, as compared to the offline medium, there is a lot of deficiency too due to which there is a mass which is still waiting for a revolutionary product solving for their need.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>In today’s time too, the customer is forced to make a decision without an accurate information about the product. As far as cloth as a category is concerned, design, color, fitting & fabric are the four most important decision making parameters when it comes to shopping. The online purchase converts into return order as soon as any of the above mentioned elements is not as per the consumer need. The customer does not directly pay for returning those products. However, the cost of reverse logistics (depending upon the return %age on a particular platform) is already included in the product price which indirectly the consumer itself is paying.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>The current form of online shopping mostly solves for the design and color. However, there is a major gap in terms of fitting & fabric quality which the consumer is not able to evaluate at the time of purchase. Most of the times, the product evaluation on these parameters happens post purchase which leads to a lot of wastage.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Righter is an e-commerce platform revolutionizing the online cloth purchase segment by solving the need gap of fitting & fabric quality. On this particular platform, one can request for the fabric sample. Also, all the products on this platform are manufactured on made to measure basis. Righter’s representative visits the home for the body measurement once the order is placed.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '2em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>To explore more, visit at <a href={navigationLinks.HOME}>www.righter.club</a></Text>
            </div>
        </div>
    );
};
export default BlogsOnePage;