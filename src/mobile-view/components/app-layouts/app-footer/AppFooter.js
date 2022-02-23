import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {navigationLinks} from "../../../constants/NavigationLinks";
import {Typography, Row, Col, Image, Collapse} from "antd";
import {FacebookOutlined, LinkedinOutlined, InstagramOutlined, WhatsAppOutlined, CopyrightOutlined} from '@ant-design/icons';
import {commonConstants, catalogName} from "../../../constants/Common";
import SEOTexts from "./SEOTexts";
import {homePageImages} from "../../../constants/ImageLinks";

const AppFooter = () => {

    const navigate = useNavigate();
    const { Text, Link } = Typography;
    const { Panel } = Collapse;

    const handleNavigation = (navigationLink) => {
        navigate(navigationLink);
    }

    useEffect(() => {
        let cardBody = document.querySelectorAll('.ant-collapse-header')
        cardBody.forEach(element => element.style = "padding-left : 0px");
    }, []);

    const whatsAppNavigationLink = navigationLinks.WHATSAPP + "/?text=" +
        "Hi Righter! I'm looking for tailor made men's wear. Help me get started.";

    return(
        <div style={{backgroundColor: "#e9f1f9", paddingTop: '2em', paddingLeft: '1em', paddingRight: '1em', paddingBottom: '2em'}}>
            <Row><Text> Shop by Category </Text></Row>
            <Row style={{paddingTop: "0.5em"}}>
                <Col span={10}>
                    <Row><Text type="secondary" onClick={() => handleNavigation(navigationLinks.TUXEDO)}>{catalogName.TUXEDO}</Text></Row>
                    <Row><Text type="secondary" onClick={() => handleNavigation(navigationLinks.CASUAL_BLAZER)}>{catalogName.CASUAL_BLAZER}</Text></Row>
                    <Row><Text type="secondary" onClick={() => handleNavigation(navigationLinks.TWO_PIECE_SUIT)}>{catalogName.TWO_PIECE_SUIT}</Text></Row>
                    <Row><Text type="secondary" onClick={() => handleNavigation(navigationLinks.THREE_PIECE_SUIT)}>{catalogName.THREE_PIECE_SUIT}</Text></Row>
                </Col>
                <Col span={8}>
                    <Row><Text type="secondary" onClick={() => handleNavigation(navigationLinks.KURTA)}>{catalogName.KURTA}</Text></Row>
                    <Row><Text type="secondary" onClick={() => handleNavigation(navigationLinks.SHERWANI)}>{catalogName.SHERWANI}</Text></Row>
                    <Row><Text type="secondary" onClick={() => handleNavigation(navigationLinks.JODHPURI)}>{catalogName.JODHPURI}</Text></Row>
                    <Row><Text type="secondary" onClick={() => handleNavigation(navigationLinks.NEHRU_JACKET)}>{catalogName.NEHRU_JACKET}</Text></Row>
                </Col>
                <Col span={6}>
                    <Row><Text type="secondary" onClick={() => handleNavigation(navigationLinks.SHIRT)}>{catalogName.SHIRT}</Text></Row>
                    <Row><Text type="secondary" onClick={() => handleNavigation(navigationLinks.TROUSER)}>{catalogName.TROUSER}</Text></Row>
                </Col>
            </Row>

            <Row style={{paddingTop: "1.5em"}}><Text> Shop by Occasion </Text></Row>
            <Row style={{paddingTop: "0.5em"}}>
                <Col span={7}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.FESTIVES)}>{catalogName.FESTIVES}</Text></Col>
                <Col span={9}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.REGULAR)}>{catalogName.REGULAR}</Text></Col>
                <Col span={6}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.HALDI)}>{catalogName.HALDI}</Text></Col>
                <Col span={7}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.MEHENDI)}>{catalogName.MEHENDI}</Text></Col>
                <Col span={9}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.ENGAGEMENT)}>{catalogName.ENGAGEMENT}</Text></Col>
                <Col span={6}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.WEDDING)}>{catalogName.WEDDING}</Text></Col>
            </Row>


            <Row style={{paddingTop: "1.5em"}}><Text> Useful Links </Text></Row>
            <Row style={{paddingTop: "0.5em"}}>
                <Col span={13}>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.FAQS)}> {commonConstants.FAQS} </Text> </Row>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.BLOGS)}> {commonConstants.BLOGS} </Text> </Row>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.ABOUT_US)}> {commonConstants.ABOUT_US} </Text> </Row>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.SEND_US_YOUR_FEEDBACK)}> {commonConstants.SEND_US_YOUR_FEEDBACK} </Text> </Row>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.SMART_BODY_MEASUREMENT)}> {commonConstants.SMART_BODY_MEASUREMENT} </Text> </Row>
                </Col>
                <Col span={11}>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.SHIPPING_POLICY)}> {commonConstants.SHIPPING_POLICY} </Text> </Row>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.PAYMENT_POLICY)}> {commonConstants.PAYMENT_POLICY} </Text> </Row>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.PRIVACY_POLICY)}> {commonConstants.PRIVACY_POLICY} </Text> </Row>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.TERMS_AND_CONDITIONS)}> {commonConstants.TERMS_AND_CONDITIONS} </Text> </Row>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.RESIZE_AND_RETURN_POLICY)}> {commonConstants.RESIZE_AND_RETURN_POLICY} </Text> </Row>
                </Col>
            </Row>

            <Row style={{paddingTop: "1.5em"}}><Text> 100% Secure Payments </Text></Row>
            <Row style={{paddingTop: "0.5em"}}>
                <Col span={5}><Image alt={'UPI LOGO'} preview={false} width={50} onClick={() => handleNavigation(navigationLinks.SECURE_PAYMENT)} src={homePageImages.UPI_LOGO} /></Col>
                <Col span={19}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.SECURE_PAYMENT)}> Scan QR Code to Pay via UPI </Text></Col>
            </Row>

            <Row style={{paddingTop: "1.5em"}}><Text> Keep in touch </Text></Row>
            <Row style={{paddingTop: "0.5em"}}>
                <Col span={6}> <Link style={{color: "#3b5998", fontSize: '1.7em'}} href={navigationLinks.FACEBOOK} target="_blank"> <FacebookOutlined /></Link> </Col>
                <Col span={6}> <Link style={{color: "#8a3ab9", fontSize: '1.7em'}} href={navigationLinks.INSTAGRAM} target="_blank"> <InstagramOutlined /> </Link> </Col>
                <Col span={6}> <Link style={{color: "#0077b5", fontSize: '1.7em'}} href={navigationLinks.LINKED_IN} target="_blank"> <LinkedinOutlined /> </Link> </Col>
                <Col span={6}> <Link style={{color: "#25D366", fontSize: '1.7em'}} href={whatsAppNavigationLink} target="_blank"> <WhatsAppOutlined /> </Link> </Col>
            </Row>

            <Row style={{paddingTop: "1.5em"}}><Text> Customer Support </Text></Row>
            <Row style={{paddingTop: "0.5em"}}>
                <Text type="secondary" onClick={() => handleNavigation(navigationLinks.CUSTOMER_SUPPORT)}> Talk to our experts </Text>
            </Row>
            <Row>
                <Text type="secondary"> Write us at {commonConstants.RIGHTER_EMAIL} </Text>
            </Row>

            <Collapse ghost style={{paddingTop: '0.5em'}}>
                <Panel header="Tap to learn more about us" showArrow={false}>
                    <SEOTexts />
                </Panel>
            </Collapse>

            <Row style={{paddingTop: '0.5em'}}><Text strong><CopyrightOutlined /> 2022 www.righter.club. All rights reserved. </Text></Row>
        </div>
    );
};
export default AppFooter;