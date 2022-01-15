import React from 'react'
import {Typography, Row, Radio, Button, message} from "antd";
import {useNavigate} from "react-router-dom";
import {navigationLinks} from "../../../constants/NavigationLinks";
import {submitRequest} from "../../../api/SubmitRequestAPI";
import {emailSubject} from "../../../constants/Common";

const PaymentDetails = (props) => {

    const { Text } = Typography;
    const navigate = useNavigate();

    const getEmailSubject = () => {
        if(props.stitchOption === "1") return emailSubject.STITCH_TO_FIT;
        else return emailSubject.STANDARD_SIZE;
    }

    const handleBuyNowClick = () => {
        message.loading({content: 'Placing your order...', style: { marginTop: '12vh'}}, 2);
        setTimeout(() => {navigate(navigationLinks.THANK_YOU)}, 2000);
        submitRequest(getEmailSubject(), props.customerDetails, props.productId, props.customerResponse)
    }

    return(
        <div style={{ paddingLeft: "1.5em", paddingTop: '0.7em', paddingBottom: '2em' }}>
            <Row>
                <Text strong> Payment Option </Text>
            </Row>
            <div style={{paddingTop: '0.5em'}}>
                <Radio checked>Cash on Delivery</Radio>
            </div>
            <div style={{paddingTop: '0.3em', paddingLeft: '1.8em'}}>
                <Text type={'secondary'}> Pay after 100% satisfaction </Text>
            </div>
            <div style={{marginLeft: '4em', marginRight: '4em', paddingTop: '2em'}}>
                <Button onClick={handleBuyNowClick} type={'primary'} shape={'round'} block> Buy Now </Button>
            </div>
        </div>
    );
};
export default PaymentDetails;