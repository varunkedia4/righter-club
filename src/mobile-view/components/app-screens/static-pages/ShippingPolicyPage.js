import React, {useEffect} from 'react'
import {Row, Typography, Collapse} from "antd";
import {commonConstants} from "../../../constants/Common";
import ReactGA from "react-ga4";
import {navigationLinks} from "../../../constants/NavigationLinks";
import {pageTitles} from "../../../constants/seo/PageTitles";

const ShippingPolicyPage = () => {

    useEffect(() => { document.title = pageTitles.SHIPPING_POLICY }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Title } = Typography;
    const { Panel } = Collapse;

    return(
        <div style={{paddingTop: '3.5em'}}>
            <div id='PageTitle' style={{backgroundColor: "#e9f1f9", paddingLeft: "1.5em", paddingTop: '1em', marginBottom: '1em'}}>
                <Row><Title level={4}>{commonConstants.SHIPPING_POLICY}</Title></Row>
            </div>
            <Collapse accordion bordered={true} style={{marginTop: '1.5em', marginLeft: '1.5em', marginRight: '1.5em', marginBottom: '1.5em', paddingLeft: '1em'}}>
                <Panel showArrow={false} header="How do I check the status of my order?">
                    <p>Please contact <a href={navigationLinks.CUSTOMER_SUPPORT}>customer support</a> for the status of the order. The customer support is reachable via
                        mail, call, or WhatsApp.</p>
                </Panel>
                <Panel showArrow={false} header="How can I check if Righter delivers to my PIN Code?">
                    <p>Righter delivers at all the PIN Codes of Mumbai &amp; Bangalore.</p>
                </Panel>
                <Panel showArrow={false} header="How are orders placed on Righter delivered to me?">
                    <p>All orders placed on Righter are dispatched through third party courier partners such as Blue Dart,
                        Delhivery, etc.</p>
                </Panel>
                <Panel showArrow={false} header="Does Righter deliver products outside India?">
                    <p>No. At this point, Righter delivers products only within India.</p>
                </Panel>
                <Panel showArrow={false} header="How can I get my order delivered faster?">
                    <p>Sorry, currently we do not have any service available to expedite the order delivery. In future, if we
                        are offering such service and your area PIN Code is serviceable, you will receive a communication
                        from our end.</p>
                </Panel>
            </Collapse>
        </div>
    );
};
export default ShippingPolicyPage;