import React, {useEffect} from 'react'
import {commonConstants} from "../../../constants/Common";
import ReactGA from "react-ga4";
import {Row, Typography, Result, Button} from "antd";
import {navigationLinks} from "../../../constants/NavigationLinks";

const ThankYouPage = () => {

    useEffect(() => { document.title = commonConstants.THANK_YOU }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Title } = Typography;

    return(
        <div style={{paddingTop: '3.5em'}}>
            <div id='PageTitle' style={{backgroundColor: "#e9f1f9", paddingLeft: "1.5em", paddingTop: '1em', marginBottom: '1em'}}>
                <Row><Title level={4}>{commonConstants.THANK_YOU}</Title></Row>
            </div>

            <div>
                <Result
                    status="success"
                    title="Thank you for Shopping with Righter!"
                    subTitle={<div>We will share order details on your contact number shortly.</div>}
                    extra={[
                        <Button type="primary" shape={'round'} href={navigationLinks.HOME}>
                            See More Outfits
                        </Button>,
                        <div style={{paddingTop: '1em'}}><Button shape={'round'} href={navigationLinks.SEND_US_YOUR_FEEDBACK}>Tell us about your experience</Button></div>
                    ]}
                />
            </div>
        </div>
    );
};
export default ThankYouPage;