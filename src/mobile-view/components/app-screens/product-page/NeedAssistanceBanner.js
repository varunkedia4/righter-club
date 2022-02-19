import React from "react";
import {Button, Card, Row, Typography} from "antd";
import {navigationLinks} from "../../../constants/NavigationLinks";

const NeedAssistanceBanner = () => {

    const { Title } = Typography;

    const whatsAppNavigationLink = navigationLinks.WHATSAPP + "/?text=" +
        "Hi Righter! I need help with the product link: " + window.location;

    return(
        <Card style={{padding: '1em', background: "linear-gradient(to right, #badaf1, #6cafe0)" }}>
            <Row justify={'center'}> <Title level={4}>Need any assistance?</Title> </Row>
             <div style={{paddingTop: '1em'}}>
                <Row justify={'center'}>
                    <Button href={whatsAppNavigationLink} target='_blank' shape={'round'}>Chat with us</Button>
                </Row>
            </div>
        </Card>
    );
};
export default NeedAssistanceBanner;