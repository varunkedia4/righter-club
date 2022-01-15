import React, {useEffect} from 'react'
import ReactGA from "react-ga4";
import {Typography} from "antd";
import {blogsTitle, blogsReadTime, blogsWriter} from "../../../../constants/Blogs";
import {navigationLinks} from "../../../../constants/NavigationLinks";

const BlogsFivePage = () => {

    useEffect(() => { document.title = blogsTitle.FIVE }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Text, Title } = Typography;

    return (
        <div style={{paddingTop: '3.5em'}}>
            <div id='BlogTitle' style={{backgroundColor: "#E8E8E8", paddingTop: '1.5em', marginBottom: '1em', textAlign: 'center', paddingBottom: '1em'}}>
                <Title level={5}>{blogsTitle.FIVE}</Title>
                <Text>{blogsWriter.FIVE + " | " + blogsReadTime.FIVE}</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Usually I have seen the anxiety before the marriage happening with the bride and groom. Why is it happening with me while I am not even getting married? Am I thinking too much? Is it happening ONLY with me?</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Last week I got a call from one of my school friends that he is getting married. In my group in the school, he was the first one to get married. No wonder he has to be since he belongs to a small town conservative family where marriage at the age of 25 is considered to be a delayed one. While for the first time in the history, we (a group of 3 friends) were able to come to a common ground and book the final ticket within a week. Goa Plan is still under discussion :(</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Initially we were thinking that booking the flight ticket is the end goal. However, the next discussion immediately started after the ticket booking about the outfit.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>How many events are there?</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>What is the dress code (If there is one)?</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Who will wear what?</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Are we going to coordinate with each other?</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>All these questions swamped our head and now, the excitement to attend the marriage was turning into frustration to find the right outfit for every event. Till date, I was told that boys don’t have much options to choose from. However, for me, within the limited options, finding the right one was becoming a taxing job.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>After some primary & secondary research, we boiled down to the following factors which influence our shopping: </Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Number of events is generally equal to number of outfits.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>The theme of the event decides the type of outfit: Indian, Western or Indo-western</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>The timing of the event decides the color & fabric type: Generally light bright color outfit goes with events in the day & dark color outfit goes with events in the night</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Design Styling, print pattern & budget depends on individual choices</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Now, I had to choose where to buy from? I went to few offline stores and explored the variety but the limited number of designs in those stores turned me off. Post that, I decided to order one from the online shopping platform. I thought now it’s done. When the product got delivered at my place, my head blew away. None of the outfits were “perfectly fit” as per my body measurement. Returning the outfit was not an option with me because i was running out of time. I ended up visiting the local tailoring shop and got it resized to my fit which again was a compromise with respect to what is called a perfect fit.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Have you also gone through a similar experience?</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>NOT ANYMORE!</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '2em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Now, we have an e-commerce player who gives the best of both worlds — offline & online stores. Righter offers a huge variety of occasion wear which get stitched on made to measure basis. You can explore more by visiting our website at <a href={navigationLinks.HOME}>www.righter.club</a></Text>
            </div>
        </div>
    );
};
export default BlogsFivePage;