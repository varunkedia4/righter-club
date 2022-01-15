import React, {useEffect} from 'react'
import ReactGA from "react-ga4";
import {commonConstants} from "../../../constants/Common";
import {Row, Typography} from "antd";
import CustomDivider from "../../common/CustomDivider";
import WhyRighter from "../../common/WhyRighter";
import HowItWorks from "../../common/HowItWorks";

const AboutUsPage = () => {

    useEffect(() => { document.title = commonConstants.ABOUT_US }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Title, Text } = Typography;

    return (
        <div style={{paddingTop: '3.5em'}}>
            <div id='PageTitle' style={{backgroundColor: "#E8E8E8", paddingLeft: "1.5em", paddingTop: '1em', marginBottom: '1em'}}>
                <Row><Title level={4}>{commonConstants.ABOUT_US}</Title></Row>
            </div>

            {/*<div style={{paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1em'}}>*/}
            {/*    <div style={{paddingBottom: '1em'}}><Text strong> OUR MISSION </Text></div>*/}
            {/*    <div style={{paddingBottom: '1em'}}>*/}
            {/*        <Text strong>*/}
            {/*        </Text>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<CustomDivider />*/}

            <div style={{paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '1em'}}>
                <div style={{paddingBottom: '1em'}}><Text strong> HOW IT WORKS </Text></div>
                <HowItWorks />
            </div>

            <CustomDivider />

            <div style={{paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '2em', paddingBottom: '2em'}}>
                <div style={{paddingBottom: '1em'}}><Text strong> WHY RIGHTER </Text></div>
                <WhyRighter />
            </div>
        </div>
    );
};

export default AboutUsPage;