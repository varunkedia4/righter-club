import React, {useState} from 'react'
import {Col, Divider, Drawer, Image, Row, Typography} from "antd";
import {homePageImages} from "../../../../constants/ImageLinks";
import {navigationLinks} from "../../../../constants/NavigationLinks";
import {commonConstants} from "../../../../constants/Common";
import {useNavigate} from "react-router-dom";
import HowItWorks from "../../../common/HowItWorks";
import WhyRighter from "../../../common/WhyRighter";

const LandingPageBannerSection = () => {

    const { Text } = Typography;

    const navigate = useNavigate();
    const handleNavigation = (navigationLink) => {
        navigate(navigationLink);
    }

    const [isLearnMoreDrawerOpen, setLearnMoreDrawerOpen] = useState(false);

    return(
        <div id='LandingBannerSection' style={{paddingTop: '3em'}}>
            <Image preview={false} src={homePageImages.LANDING_BANNER} onClick={() => handleNavigation(navigationLinks.KURTA)} />
            <div style={{paddingLeft: '1em', paddingTop: '1em'}}>
                <Row>
                    <Col span={18}> <Text> Shop for outfits made just for you</Text> </Col>
                    <Col span={6}> <Text type={'secondary'} onClick={() => setLearnMoreDrawerOpen(true)}> {commonConstants.LEARN_MORE} </Text> </Col>
                    <Drawer placement="bottom" height={650} onClose={() => setLearnMoreDrawerOpen(false)} visible={isLearnMoreDrawerOpen}>
                        <div style={{paddingBottom: '1.5em'}}><Row justify={'center'}><Text strong> HOW IT WORKS </Text></Row></div>
                        <HowItWorks/>
                        <div style={{paddingBottom: '1.5em'}}><Row justify={'center'}><Text strong> WHY RIGHTER </Text></Row></div>
                        <WhyRighter/>
                    </Drawer>
                </Row>
            </div>
            <Divider />
        </div>
    );
};

export default LandingPageBannerSection;