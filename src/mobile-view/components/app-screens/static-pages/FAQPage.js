import React, {useEffect} from 'react'
import ReactGA from "react-ga4";
import {commonConstants} from "../../../constants/Common";
import {Row, Typography, Collapse, Alert} from "antd";
import {navigationLinks} from "../../../constants/NavigationLinks";
import {pageTitles} from "../../../constants/seo/PageTitles";

const FAQPage = () => {

    useEffect(() => { document.title = pageTitles.FAQS }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Title } = Typography;
    const { Panel } = Collapse;

    return (
        <div style={{paddingTop: '3.5em'}}>
            <div id='PageTitle' style={{backgroundColor: "#e9f1f9", paddingLeft: "1.5em", paddingTop: '1em', marginBottom: '1em'}}>
                <Row><Title level={4}>{commonConstants.FAQS}</Title></Row>
            </div>

            <div id='FAQS' style={{paddingLeft: '1.5em', paddingRight: '1.5em', paddingBottom: '1em'}}>
                <Collapse accordion bordered={true} style={{paddingLeft: '1em'}}>
                    <Panel showArrow={false} header="What is the ordering process of Righter?">
                        <p>The entire ordering process on Righter can be broadly divided into 4 steps:</p>
                        <ol>
                            <li>The customer selects the fabric & design from the catalogue on the website.</li>
                            <li>After selection, the customer chooses if they wants the outfit in the standard size or prefers to get the measurement done at their place.</li>
                            <li>The measurement is scheduled within 2-3 days unless otherwise requested by the customer.</li>
                            <li>Post the body measurement, the stitched outfit in the right size is delivered to the customer and the payment is taken.</li>
                        </ol>
                    </Panel>
                    <Panel showArrow={false} header="Can we make changes to the designs listed on the platform?">
                        <p>Unfortunately, we are operating with the limited designs as of now. In case you find it suitable for yourself, you can connect with our customer support, they will guide you further for the next steps.</p>
                    </Panel>
                    <Panel showArrow={false} header="What kind of outfits can we get on Righter?">
                        <p>As of now, Righter operates mostly in the occasion wear categories like <strong>Kurta, Sherwani, Jodhpuri, Nehru Jackets & Suits</strong> only for men.</p>
                    </Panel>
                    <Panel showArrow={false} header="Can I place a bulk order for my family?">
                        <p>Yes, you can contact our customer support for such a requirement. We do take bulk orders from families to make their events dress codified. Please visit our <a href={navigationLinks.CUSTOMER_SUPPORT}>Customer Support</a> who'll assist you for the same.</p>
                    </Panel>
                    <Panel showArrow={false} header="What is the typical delivery time for the outfits?">
                        <p>We promise to deliver the product <strong>within 15 days</strong> post order confirmation.</p>
                    </Panel>
                    <Panel showArrow={false} header="Who comes for the measurement at my home?">
                        <p>A tailor vetted and verified by Righter visits the house of the customer to take the body measurement.</p>
                    </Panel>
                    <Panel showArrow={false} header="What if the outfit does not fit me after stitching?">
                        <p>In more than 95% of the cases, this problem does not occur. However, in case the customer is not happy with the fitting of the outfit, we promise to <strong>resize the outfit without any additional cost within 15 days of the pickup of the delivered product</strong>.</p>
                    </Panel>
                    <Panel showArrow={false} header="What is the payment term?">
                        <p><strong>Full Payment</strong> for the outfit is taken at the time of final product delivery.</p>
                    </Panel>
                    <Panel showArrow={false} header="Can I pay in cash to Righter?">
                        <p>We avoid taking cash from our customers due to compliance reasons. However, you can use any other medium to transact with us like UPI, Debit card, credit card, Net banking, etc.</p>
                        <a href={navigationLinks.SECURE_PAYMENT}>Scan QR code to pay via UPI</a>
                    </Panel>
                    <Panel showArrow={false} header="What if I want to return/resize the product which I bought from Righter?">
                        <p>For any kind of return/resize related queries, please refer our <a href={navigationLinks.RESIZE_AND_RETURN_POLICY}>Return & Resize Policy</a></p>
                    </Panel>
                    <Panel showArrow={false} header="I have already given measurements in the past. Do I need to give measurements again to buy a product from Righter?">
                        <p>Preferably we would want to take the measurement once again just to reconfirm the changes if any. However, if the customer is confident about the old measurement, we will stitch the outfit using the same data.</p>
                    </Panel>
                    <Panel showArrow={false} header="Which all cities Righter is operational in?">
                        <p>Currently Righter is operational in two cities – <strong>Mumbai & Bangalore</strong>. In case you are from any other city in the country, we request you to get the measurement from any local tailor and we will stitch the outfit just for you referring to those measurements.</p>
                    </Panel>
                </Collapse>
            </div>

            <div style={{paddingLeft: '1.5em', paddingRight: '1.5em', paddingBottom: '1em'}}>
                <Alert
                    message="Didn't find what you're looking for?"
                    description= {<p>Visit our <a href={navigationLinks.CUSTOMER_SUPPORT}>customer support</a></p>}
                    type="warning"
                    showIcon
                />
            </div>
        </div>
    );
};

export default FAQPage;