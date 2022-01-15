import React from "react";
import {Collapse} from "antd";

const ResizeAndReturnTerms = () => {

    const { Panel } = Collapse;

    return(
        <div id='ReturnOrResizePolicy' style={{paddingLeft: '1.5em', paddingRight: '1.5em', paddingBottom: '1em'}}>
            <Collapse accordion bordered={true} style={{marginTop: '1em'}}>
                <Panel header="What is eligible for resize/return?">
                    <p><ol>
                        <li>We are on a mission to give the perfect fit without compromising on variety to our customers and we take it very seriously. If there is any issue about the fit, the outfit is eligible for resize. We resize it to your measurement and send it back without any additional cost. There is no return eligible for such orders.</li>
                        <li>Any outfit reached to the customer’s address other than what is there in the catalogue image is eligible for return unless the points related to that are explicitly mentioned in our return policy.</li>
                        <li>The product is eligible for resize/return within the next 10 days of the delivery of the product.</li>
                    </ol></p>
                </Panel>
                <Panel header="What is not eligible for resize/return?">
                    <p><ol>
                        <li>Outfits stitched on made to measure without any issue/concern are not eligible for resize/return.</li>
                        <li>Once the order is placed & confirmed, the cancellation of the order post is not allowed. The order is confirmed only post the measurement is taken.</li>
                        <li>There will be some mismatch in the colour between the one seen on digital catalogue & the actual one. On that basis, the product is not eligible for resize/return.</li>
                        <li>The buttons, pocket square, broch on the catalogue pictures are just for reference. On that basis, the product is not eligible for resize/return. Post placement of order, the customer can get in touch with the customer support to get any customization with respect to the accessory.</li>
                        <li>The product is not eligible for resize/return beyond 10 days of the delivery of the product.</li>
                    </ol></p>
                </Panel>
                <Panel header="How does the resize process work?">
                    <p><ol>
                        <li>Once the order is approved for return, our logistics partner will pick up the delivered item from the customer’s address.</li>
                        <li>The outfit is remade or resized as per the customer’s request and delivered back to the customer within the next 15 days of pickup of the outfit.</li>
                        <li>All the logistics cost will be borne by the company. The customer is not required to pay anything.</li>
                    </ol></p>
                </Panel>
                <Panel header="How does the return process work?">
                    <p><ol>
                        <li>Once the order is approved for return, our logistics partner will pick up the delivered item from the customer’s address.</li>
                        <li>The refund for the amount paid is issued in next 7-10 days once the outfit is picked up from the customer’s place.</li>
                        <li>All the logistics cost will be borne by the company. The customer is not required to pay anything.</li>
                    </ol></p>
                </Panel>
            </Collapse>
        </div>
    );
};
export default ResizeAndReturnTerms;