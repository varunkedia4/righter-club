import React, {useEffect} from 'react'
import {commonConstants} from "../../../constants/Common";
import ReactGA from "react-ga4";
import {Image, Row, Typography} from "antd";
import {extraImages} from "../../../constants/ImageLinks";

const SecurePaymentPage = () => {

    useEffect(() => { document.title = commonConstants.SECURE_PAYMENT }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Title, Text } = Typography;

    return(
        <div style={{paddingTop: '3.5em', paddingBottom: '2em'}}>
            <div id='PageTitle' style={{backgroundColor: "#e9f1f9", paddingLeft: "1.5em", paddingTop: '1em', marginBottom: '1em'}}>
                <Row><Title level={4}>{commonConstants.SECURE_PAYMENT}</Title></Row>
            </div>

            <div style={{paddingTop: '1em', paddingLeft: '1.5em'}}>
                <Text strong> PAY USING ANY UPI APP </Text>
            </div>

            <div style={{paddingTop: '1em', paddingLeft: '1.5em', paddingRight: '1.5em'}}>
                <Row justify={'center'}> <Image alt={"QR Code"} width={"70%"} src={extraImages.QR_CODE} /> </Row>
            </div>

            {/*<div style={{paddingTop: '1em'}}>*/}
            {/*    <Row justify={'center'}> <Text strong> UPI ID </Text> </Row>*/}
            {/*    <Row justify={'center'}> <Text type={'secondary'}> rpy.qrkidxlpriva95323625@icici </Text> </Row>*/}
            {/*</div>*/}

            <div style={{paddingTop: '1em'}}>
                <Row justify={'center'}> <Text strong> Righter </Text> </Row>
                <Row justify={'center'}> <Text type={'secondary'}> powered by KidXL Private Limited </Text> </Row>
            </div>
        </div>
    );
};
export default SecurePaymentPage;