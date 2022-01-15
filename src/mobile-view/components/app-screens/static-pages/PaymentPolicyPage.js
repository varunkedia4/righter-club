import React, {useEffect} from 'react';
import {Collapse, Row, Typography} from "antd";
import {commonConstants} from "../../../constants/Common";
import ReactGA from "react-ga4";

const PaymentPolicyPage = () => {

    useEffect(() => { document.title = commonConstants.PAYMENT_POLICY }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Title } = Typography;
    const { Panel } = Collapse;

    return(
        <div style={{paddingTop: '3.5em'}}>
            <div id='PageTitle' style={{backgroundColor: "#E8E8E8", paddingLeft: "1.5em", paddingTop: '1em', marginBottom: '1em'}}>
                <Row><Title level={4}>{commonConstants.PAYMENT_POLICY}</Title></Row>
            </div>
            <Collapse accordion bordered={true} style={{marginTop: '1.5em', marginLeft: '1.5em', marginRight: '1.5em', marginBottom: '1.5em'}}>
                <Panel header="How can I pay on Righter?">
                    <p>
                        Righter supports following payment options:
                        <ol>
                            <li>Cash on Delivery (COD)</li>
                            <li>Via UPI</li>
                        </ol>
                    </p>
                </Panel>
                <Panel header="How does COD (Cash on Delivery) Payment option work?">
                    <p>Righter provides an option to its users to <strong>pay after 100% satisfaction</strong> with the product at the time of
                        delivery for all the orders. The user needs to select COD as an option on the checkout page.</p>
                </Panel>
                <Panel header="Is there a limit on the amount while using COD as a payment option?">
                    <p>There is no limit on the amount while using COD as a payment option.</p>
                </Panel>
            </Collapse>
        </div>
    );
};
export default PaymentPolicyPage;