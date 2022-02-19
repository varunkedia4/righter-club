import React from 'react'
import {Typography, Row, Radio} from "antd";

const PaymentDetails = () => {

    const { Text } = Typography;

    return(
        <div style={{ paddingLeft: "1.5em", paddingTop: '0.7em', paddingBottom: '1em' }}>
            <Row><Text strong> Payment Option </Text></Row>
            <div style={{paddingTop: '0.5em'}}><Radio checked>Cash on Delivery</Radio></div>
            <div style={{paddingTop: '0.3em', paddingLeft: '1.8em'}}>
                <Text type={'secondary'}> Pay after 100% satisfaction </Text>
            </div>
        </div>
    );
};
export default PaymentDetails;