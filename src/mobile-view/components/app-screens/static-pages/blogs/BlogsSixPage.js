import React, {useEffect} from 'react'
import ReactGA from "react-ga4";
import {Typography} from "antd";
import {blogsTitle, blogsReadTime, blogsWriter} from "../../../../constants/Blogs";
import {navigationLinks} from "../../../../constants/NavigationLinks";

const BlogsSixPage = () => {

    useEffect(() => {document.title = blogsTitle.SIX}, []);
    ReactGA.send({hitType: "pageview"});

    const {Text, Title} = Typography;

    return (
        <div style={{paddingTop: '3.5em'}}>
            <div id='BlogTitle' style={{backgroundColor: "#e9f1f9", paddingTop: '1.5em', marginBottom: '1em', textAlign: 'center', paddingBottom: '1em'}}>
                <Title level={5}>{blogsTitle.SIX}</Title>
                <Text>{blogsWriter.SIX + " | " + blogsReadTime.SIX}</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>
                    When it comes to wedding whether it is yours, your relatives or your friends, you would want to put your best feet forward and why not? Also, the theme wedding has almost made it mandatory to shop specific outfit for every event in the wedding be it Haldi, Mehendi or Engagement. I will explain you my journey to buy outfits for my friend’s wedding.
                </Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>
                    Different than other boys in my group, I love to dress up and for that love, I do put a lot of effort to finalize a perfect one for myself. My shopping journey started with online shopping platforms like Myntra, Nykaa, Ajio, etc. Obviously, exploring the designs on those platforms is very easy. Also, I found the pricing lucrative. I ordered 3–4 outfits, one for every event. Once I received the order, it was a complete disaster for me. Generally, the size which suited me well, was either small or large. In a nutshell, I had to return all the outfits.
                </Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>
                    After this, I turned to nearby malls and went to branded stores like Manyawar & Fab India. It was fairly huge store but the collections were too limited. I was not able to find the perfect one for myself. Whatever limited designs I liked, they were not available in my size. This experience forced me to explore options where I can get the outfits stitched to my size.
                </Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>
                    I spoke to few people in my network and discovered the following local markets for wedding shopping in Bangalore:
                    <ol>
                        <li>Commercial Street (<strong>20 Kms</strong> from whitefield)</li>
                        <li>Ramachandrapuram (<strong>28 Kms</strong> from whitefield)</li>
                        <li>Chikpet (<strong>20 Kms</strong> from whitefield)</li>
                        <li>Jayanagar (<strong>23 Kms</strong> from whitefield)</li>
                    </ol>
                </Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>
                    Visiting these markets itself was tiring and expensive. However, the kind of feedback which I had heard from people in my network, forced me take one day out from my weekend and visit to these places. When I reached these markets for the first time, I was delighted to see the number of stores. At the same time, I was super confused to decide which store to visit. Finding one for the menswear specifically was not an easy task at all. After walking for few Kms, I discovered handful of stores in the market operating in the menswear category.
                </Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>
                    Getting the outfits stitched on made to measure basis was a first time experience for me. When I went to the stores, they first showed me a physical catalog where they asked me to select a design. Then after they put few fabric samples out and asked me select one. That was quite unusual to me. I was not able to visualize the fabric in the selected design. After spending 3–4 hours and visiting 8–10 stores, I learnt that it is a norm how made to measure market operates. I finally decided to come back without any purchase.
                </Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>
                    While coming back home, I thought that I will place the order from the online shopping platforms only and get the alteration done at the local tailors. While browsing the internet on the way back home, I landed up on an advertisement of online shopping platform “Righter” which was quite different from others in the market.
                </Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>
                    They had a unique proposition of getting made to measure stitched at the comfort of our home. To explore and select the designs, I will not have to plan one specific day in the week. I can explore wide variety of designs on my mobile screen without visiting multiple stores in the market. Also, I was able to see the actual outfit catalog on the screen rather than making a decision just by looking at the fabric. More than that, they guarantee perfect fit and give an option pay only after 100% satisfaction.
                </Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>
                    Obviously, I wasted one entire day in the market on that particular day. However, finding a platform just right for my requirement made my day.
                </Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '2em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>To explore more, visit at <a href={navigationLinks.HOME}>www.righter.club</a></Text>
            </div>
        </div>
    );
}
export default BlogsSixPage;