import React from 'react'
import {Col, Image, Row, Typography, Button} from "antd";
import {homePageImages} from "../../../../constants/ImageLinks";
import {commonConstants} from "../../../../constants/Common";
// import HowItWorks from "../../../common/HowItWorks";
// import WhyRighter from "../../../common/WhyRighter";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {useNavigate} from "react-router-dom";
import {navigationLinks} from "../../../../constants/NavigationLinks";

const LandingPageBannerSection = () => {

    const { Text } = Typography;
    const navigate = useNavigate();
    // const [isLearnMoreDrawerOpen, setLearnMoreDrawerOpen] = useState(false);

    return(
        <div id='LandingBannerSection' style={{paddingTop: '2em', paddingBottom: '1em'}}>
            <AnchorLink offset={() => 45} href='#ShopByCategorySection'>
                <Image preview={false} src={homePageImages.LANDING_BANNER}/>
            </AnchorLink>
            <div style={{paddingLeft: '1em', paddingTop: '1em'}}>
                <Row justify="space-around" align="middle">
                    <Col span={16}> <Text> Wear outfits made just for you</Text> </Col>
                    <Col span={8}>
                        <Button type={'primary'} shape={'round'} href={navigationLinks.GET_STARTED} onClick={() => navigate(navigationLinks.GET_STARTED)}>
                            {commonConstants.GET_STARTED}
                        </Button>
                    </Col>
                    {/*<Drawer placement="bottom" height={650} onClose={() => setLearnMoreDrawerOpen(false)} visible={isLearnMoreDrawerOpen}>*/}
                    {/*    <div style={{paddingBottom: '1.5em'}}><Row justify={'center'}><Text strong> HOW IT WORKS </Text></Row></div>*/}
                    {/*    <HowItWorks/>*/}
                    {/*    <div style={{paddingBottom: '1.5em'}}><Row justify={'center'}><Text strong> WHY RIGHTER </Text></Row></div>*/}
                    {/*    <WhyRighter/>*/}
                    {/*</Drawer>*/}
                </Row>
            </div>
        </div>
    );
};

export default LandingPageBannerSection;