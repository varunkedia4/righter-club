import React, {useEffect} from 'react'
import ReactGA from "react-ga4";
import {commonConstants} from "../../../constants/Common";
import {Alert, Row, Typography} from "antd";
import {navigationLinks} from "../../../constants/NavigationLinks";
import ResizeAndReturnTerms from "../../common/ResizeAndReturnTerms";

const ResizeAndReturnPolicyPage = () => {

    useEffect(() => { document.title = commonConstants.RESIZE_AND_RETURN_POLICY }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Title } = Typography;

    return (
        <div style={{paddingTop: '3.5em'}}>
            <div id='PageTitle' style={{backgroundColor: "#e9f1f9", paddingLeft: "1.5em", paddingTop: '1em', marginBottom: '1em'}}>
                <Row><Title level={4}>{commonConstants.RESIZE_AND_RETURN_POLICY}</Title></Row>
            </div>

            <ResizeAndReturnTerms />

            <div style={{paddingLeft: '1.5em', paddingRight: '1.5em', paddingBottom: '1em'}}>
                <Alert
                    message="Request return or resize"
                    description= {<p>Visit our <a href={navigationLinks.CUSTOMER_SUPPORT}>customer support</a> for hassle free return or resize.</p>}
                    type="warning"
                    showIcon
                />
            </div>
        </div>
    );
};

export default ResizeAndReturnPolicyPage;