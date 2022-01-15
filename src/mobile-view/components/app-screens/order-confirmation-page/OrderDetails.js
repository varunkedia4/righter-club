import React from 'react'
import {Typography, Row} from "antd";

const OrderDetails = (props) => {

    const { Text } = Typography;

    const getHeadingText = () => {
        if(props.stitchOption === "1") return "Stitch to Fit";
        else return "Standard Size"
    }

    return(
        <div style={{ paddingLeft: "1.5em", paddingBottom: '1em'}}>
            <Row> <Text strong> {getHeadingText()} </Text> </Row>
            <div style={{paddingTop: '0.3em'}}>
                <Row> <Text type={'secondary'}> {props.customerName} | {props.customerNumber} </Text> </Row>
                {
                    (props.stitchOption === "1") &&
                    <Row> <Text type={'secondary'}> Measurement Date : {props.customerPreferredSizeOrDate} </Text> </Row>
                }
                {
                    (props.stitchOption === "2") &&
                    <Row> <Text type={'secondary'}> Preferred Size : {props.customerPreferredSizeOrDate} </Text> </Row>
                }
            </div>
        </div>
    );
};
export default OrderDetails;