import React from 'react';
import {useNavigate} from "react-router-dom";
import {navigationLinks} from "../../../constants/NavigationLinks";
import {Typography, Row, Col, Image} from "antd";
import {
    FacebookOutlined, LinkedinOutlined, InstagramOutlined,
    WhatsAppOutlined, MailOutlined, UserOutlined, CopyrightOutlined
} from '@ant-design/icons';
import {commonConstants, catalogName} from "../../../constants/Common";
import SEOTexts from "./SEOTexts";
import {homePageImages} from "../../../constants/ImageLinks";

const AppFooter = () => {

    const navigate = useNavigate();
    const { Text, Link } = Typography;

    const handleNavigation = (navigationLink) => {
        navigate(navigationLink);
    }

    return(
        <div style={{backgroundColor: "#E8E8E8", paddingTop: '2em', paddingLeft: '1em', paddingRight: '1em', paddingBottom: '2em'}}>
            <Row><Text> Shop by Occasion </Text></Row>
            <Row style={{paddingTop: "0.5em"}}>
                <Col span={7}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.MEHENDI)}>{catalogName.MEHENDI}</Text></Col>
                <Col span={6}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.HALDI)}>{catalogName.HALDI}</Text></Col>
                <Col span={6}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.ENGAGEMENT)}>{catalogName.ENGAGEMENT}</Text></Col>
                <Col span={7}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.WEDDING)}>{catalogName.WEDDING}</Text></Col>
                <Col span={6}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.DIWALI)}>{catalogName.DIWALI}</Text></Col>
                <Col span={6}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.HOLI)}>{catalogName.HOLI}</Text></Col>
            </Row>

            <Row style={{paddingTop: "1.5em"}}><Text> Shop by Category </Text></Row>
            <Row style={{paddingTop: "0.5em"}}>
                <Col span={7}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.KURTA)}>{catalogName.KURTA}</Text></Col>
                <Col span={6}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.SHERWANI)}>{catalogName.SHERWANI}</Text></Col>
                <Col span={6}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.NEHRU_JACKET)}>{catalogName.NEHRU_JACKET}</Text></Col>
                <Col span={7}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.JODHPURI)}>{catalogName.JODHPURI}</Text></Col>
                <Col span={6}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.SUIT)}>{catalogName.SUIT}</Text></Col>
                <Col span={6}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.SUIT_WITH_VEST)}>{catalogName.SUIT_WITH_VEST}</Text></Col>
            </Row>

            <Row style={{paddingTop: "1.5em"}}><Text> Useful Links </Text></Row>
            <Row style={{paddingTop: "0.5em"}}>
                <Col span={12}>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.FAQS)}> {commonConstants.FAQS} </Text> </Row>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.BLOGS)}> {commonConstants.BLOGS} </Text> </Row>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.ABOUT_US)}> {commonConstants.ABOUT_US} </Text> </Row>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.EXPLORE_RIGHTER)}> {commonConstants.EXPLORE_RIGHTER} </Text> </Row>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.TERMS_AND_CONDITIONS)}> {commonConstants.TERMS_AND_CONDITIONS} </Text> </Row>
                </Col>
                <Col span={12}>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.SHIPPING_POLICY)}> {commonConstants.SHIPPING_POLICY} </Text> </Row>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.PAYMENT_POLICY)}> {commonConstants.PAYMENT_POLICY} </Text> </Row>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.PRIVACY_POLICY)}> {commonConstants.PRIVACY_POLICY} </Text> </Row>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.RESIZE_AND_RETURN_POLICY)}> {commonConstants.RESIZE_AND_RETURN_POLICY} </Text> </Row>
                </Col>
            </Row>

            <Row style={{paddingTop: "1.5em"}}><Text> 100% Secure Payments </Text></Row>
            <Row style={{paddingTop: "0.5em"}}>
                <Col span={5}><Image preview={false} width={60} onClick={() => handleNavigation(navigationLinks.SECURE_PAYMENT)} src={homePageImages.UPI_LOGO} /></Col>
                <Col span={19}><Text type="secondary" onClick={() => handleNavigation(navigationLinks.SECURE_PAYMENT)}> Scan QR Code to Pay via UPI </Text></Col>
            </Row>

            <Row style={{paddingTop: "1.5em"}}><Text> Keep in touch </Text></Row>
            <Row style={{paddingTop: "0.5em"}}>
                <Col span={12}>
                    <Row> <Link style={{color: "#808080"}} href={navigationLinks.FACEBOOK} target="_blank"> <FacebookOutlined /> {commonConstants.FACEBOOK} </Link> </Row>
                    <Row> <Link style={{color: "#808080"}} href={navigationLinks.INSTAGRAM} target="_blank"> <InstagramOutlined /> {commonConstants.INSTAGRAM} </Link> </Row>
                    <Row> <Link style={{color: "#808080"}} href={navigationLinks.LINKED_IN} target="_blank"> <LinkedinOutlined /> {commonConstants.LINKED_IN} </Link> </Row>
                </Col>
                <Col span={12}>
                    <Row> <Link style={{color: "#808080"}} href={navigationLinks.WHATSAPP} target="_blank"> <WhatsAppOutlined /> {commonConstants.WHATSAPP_NUMBER} </Link> </Row>
                    <Row> <Text type="secondary"> <MailOutlined /> {commonConstants.RIGHTER_EMAIL} </Text> </Row>
                    <Row> <Text type="secondary" onClick={() => handleNavigation(navigationLinks.CUSTOMER_SUPPORT)}> <UserOutlined /> {commonConstants.CUSTOMER_SUPPORT} </Text> </Row>
                </Col>
            </Row>

            <Row style={{paddingTop: "1.5em"}}><Text> Your feedback is important to us </Text></Row>
            <Row style={{paddingTop: "0.5em"}}>
                <Text type="secondary" onClick={() => handleNavigation(navigationLinks.SEND_US_YOUR_FEEDBACK)}> {commonConstants.SEND_US_YOUR_FEEDBACK} </Text>
            </Row>

            <Row style={{paddingTop: "1.5em"}}><Text> Popular Searches </Text></Row>
            <Row style={{paddingTop: "0.5em"}}>
                <Text type="secondary"> Kurta | Sherwani | Kurta Payjama | Jodhpuri | Jodhpuri Suit | Indo Western Suit | Suits |
                                        Suits with Vest | Three Piece Suit | Nehru Jacket | Modi Jacket | Designer Sherwani |
                                        Celebrity Look Sherwani | Made to Measure Outfits | Bespoke Outfits | Doorstep Measurements |
                                        Stitch to Fit | Custom Fit | Perfect Fit | Free Delivery | Doorstep Delivery | Free Measurement |
                                        Made to Measure Outfits at Home | Measurement at Home | Ethnic Wear | Traditional Wear | Indian Wear |
                                        Outfits for Men | Measurement at Home | Occasion Wear | Wedding Outfits | Wedding | Engagement | Haldi |
                                        Mehendi | Holi | Diwali | Wedding Dress | Groom Wear | Wedding Outfits for Groom
                </Text>
            </Row>

            <SEOTexts />

            <Row style={{paddingTop: "1.5em"}}><Text><CopyrightOutlined /> 2021 www.righter.club. All rights reserved. </Text></Row>
        </div>
    );
};
export default AppFooter;