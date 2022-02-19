import React from "react";
import {Card, Row, Typography, Button} from "antd";
import {navigationLinks} from "../../../constants/NavigationLinks";

const CTABanner = (props) => {

    const { Title } = Typography;

    const whatsAppNavigationLink = navigationLinks.WHATSAPP + "/?text=" + props.whatsAppText;

    return(
        <Card style={{paddingRight: '1em', paddingLeft: '1em', paddingBottom: '1.5em', paddingTop: '1.5em', marginBottom: '1em', backgroundColor: '#e9f1f9' }}>
            <Row justify={'center'}> <Title level={4}>{props.heading}</Title> </Row>
            <div style={{paddingTop: '1em'}}>
                <Row justify={'center'}>
                    <Button type={'primary'} href={whatsAppNavigationLink} target='_blank' shape={'round'}>{props.ctaText}</Button>
                </Row>
            </div>
        </Card>
    );
};
export default CTABanner;