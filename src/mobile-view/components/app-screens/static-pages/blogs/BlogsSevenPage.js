import React, {useEffect} from 'react'
import ReactGA from "react-ga4";
import {Typography, Image} from "antd";
import {blogsTitle, blogsReadTime, blogsWriter} from "../../../../constants/Blogs";
import {navigationLinks} from "../../../../constants/NavigationLinks";
import {extraImages} from "../../../../constants/ImageLinks";

const BlogsSevenPage = () => {

    useEffect(() => { document.title = blogsTitle.SEVEN }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Title, Text } = Typography;

    return (
        <div style={{paddingTop: '3.5em'}}>
            <div id='BlogTitle' style={{backgroundColor: "#e9f1f9", paddingTop: '1.5em', marginBottom: '1em', textAlign: 'center', paddingBottom: '1em'}}>
                <Title level={5}>{blogsTitle.SEVEN}</Title>
                <Text>{blogsWriter.SEVEN + " | " + blogsReadTime.SEVEN}</Text>
            </div>

            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>
                    Any perfect outfit is a combination of fabric pattern/color and the stitching style selected. Also, an outfit is perfect or not, is generally defined by the occasion/place in/at which you are wearing it.
                </Text>
            </div>

            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>
                    While in suit as a category, there is not much doubts, people have in terms of fabric pattern/color. Fabric quality is defined by the budget range an individual is having. However, we are very much confused about the stitching style we should choose. We have tried to solve that puzzle for ourselves so that we are having enough information to make a decision when we are visiting next to a tailor/designer.
                </Text>
            </div>

            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>
                    In a suit, there are three main components:
                    <ol>
                        <li>Blazer</li>
                        <li>Waistcoat</li>
                        <li>Pant</li>
                    </ol>
                </Text>
            </div>

            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>
                    Depending upon the person preference, people either go with all 3 (Blazer, waistcoat & pant) or 2 (Blazer & pant).
                </Text>
            </div>

            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text strong> Blazer Pockets </Text> <br/>
                <Text>
                    Broadly there are 3 types of blazer pockets which are used flap pocket taking the maximum share and patch pocket taking the least. Besom Pocket is also known as jetted pocket.
                </Text>
                <Image alt={'Blazer Pocket Styles'} style={{paddingTop: '0.5em'}} preview={false} src={extraImages.BLAZER_POCKET_STYLES} />
            </div>

            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text strong> Blazer Lapel </Text> <br/>
                <Text>
                    Broadly there are 3 types of blazer lapel which are used notch lapel taking the maximum share and peak lapel taking the least.
                </Text>
                <Image alt={'Blazer Lapel Styles'} style={{paddingTop: '0.5em'}} preview={false} src={extraImages.BLAZER_LAPEL_STYLES} />
            </div>

            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text strong> Blazer Buttons </Text> <br/>
                <Text>
                    Double button blazers takes the maximum share in the market in today’s time when people go for formal usage while in case of occasional purpose, people prefer single button blazers too.
                </Text>
                <Image alt={'Blazer Buttons'} style={{paddingTop: '0.5em'}} preview={false} src={extraImages.BLAZER_BUTTONS} />
            </div>

            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text strong> Blazer Buttons </Text> <br/>
                <Text>
                    Single breasted suit is evergreen which you can use as a multi-purpose outfit while double breasted suit comes handy only for the specific events/occasions.
                </Text>
                <Image alt={'Blazer Breasting'} style={{paddingTop: '0.5em'}} preview={false} src={extraImages.BLAZER_BREASTING} />
            </div>

            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text strong> Blazer Buttons </Text> <br/>
                <Text>
                    Double vent blazers are in trend in today’s time.
                </Text>
                <Image alt={'Blazer Vent'} style={{paddingTop: '0.5em'}} preview={false} src={extraImages.BLAZER_VENT} />
            </div>

            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text strong> Waistcoat Breasting </Text> <br/>
                <Text>
                    Similar to blazers, single-breasted waistcoat is evergreen.
                </Text>
                <Image alt={'Waistcoat Breasting'} style={{paddingTop: '0.5em'}} preview={false} src={extraImages.WAISTCOAT_BREASTING} />
            </div>

            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text strong> Waistcoat Neck </Text> <br/>
                <Text>
                    For the formal purpose, people do prefer V-shaped neck while for the occasional purpose, people go for U-shaped neck.
                </Text>
                <Image alt={'Waistcoat Neck'} style={{paddingTop: '0.5em'}} preview={false} src={extraImages.WAISTCOAT_NECK} />
            </div>

            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text strong> Pant </Text> <br/>
                <Text>
                    Depending upon the personal preference & comfort, people do choose the stitching style for Pant.
                </Text>
                <Image alt={'Pant'} style={{paddingTop: '0.5em'}} preview={false} src={extraImages.PANT} />
            </div>

            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>
                    More than 500 combinations can be made using the variations described above.
                </Text>
            </div>

            <div style={{ textAlign: 'left',  paddingBottom: '2em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>To explore more, visit at <a href={navigationLinks.HOME}>www.righter.club</a></Text>
            </div>
        </div>
    );
};
export default BlogsSevenPage;