import React, {useEffect, useState} from 'react'
import {Typography, Row, Button, Card, Drawer, Badge, Divider} from "antd";
import {navigationLinks} from "../../../constants/NavigationLinks";
import {useNavigate} from "react-router-dom";

const BuyingOptions = (props) => {

    const navigate = useNavigate();
    const { Text } = Typography;
    const [isBuyingOptionDrawerOpen, setBuyingOptionDrawerOpen] = useState(false);

    useEffect(() => {
        let cardBody = document.querySelectorAll('.ant-card-body')
        cardBody.forEach(element => element.style = "padding : 20px");
    }, [isBuyingOptionDrawerOpen]);

    const handleProceedToBuyAction = (buyingOption) => {
        navigate(navigationLinks.PLACE_YOUR_ORDER + props.productId + "." + buyingOption);
    }

    const whatsAppNavigationLink = navigationLinks.WHATSAPP + "/?text=" +
                                    "Hi Righter! I need help with the product link: " + window.location;

    return(
        <div>
            <div style={{paddingLeft: '2.5em', paddingRight: '2.5em', paddingTop: '0.5em', paddingBottom: '1.5em'}}>
                <Button block shape="round" type={'primary'} onClick={() => setBuyingOptionDrawerOpen(true)}>
                    Proceed to Buy
                </Button>
            </div>

            <div>
                <Drawer height={450} title={"Buying Options"} placement={'bottom'} closable
                        onClose={() => setBuyingOptionDrawerOpen(false)} visible={isBuyingOptionDrawerOpen}>
                    <div>
                        <Badge.Ribbon text="Recommended">
                            <Card style={{backgroundColor: '#e9f1f9'}} onClick={() => handleProceedToBuyAction(1)}>
                                <Row><Text strong>Stitched to Fit</Text></Row>
                                <Row><Text type={'secondary'}>Tap to schedule measurement session</Text></Row>
                            </Card>
                        </Badge.Ribbon>
                    </div>
                    <div style={{paddingTop: '1em'}}>
                        <Card onClick={() => handleProceedToBuyAction(2)}>
                            <Row><Text strong>Standard Size</Text></Row>
                            <Row><Text type={'secondary'}>Tap to select your preferred size</Text></Row>
                        </Card>
                    </div>

                    <Divider>Or</Divider>

                    <div>
                        <a target='_blank' href={whatsAppNavigationLink}>
                            <Badge.Ribbon text="WhatsApp" color="green">
                                <Card style={{backgroundColor: '#e5f3ea'}}>
                                    <Row><Text strong>Buy on Chat</Text></Row>
                                    <Row><Text type={'secondary'}>Tap to chat with our experts</Text></Row>
                                </Card>
                            </Badge.Ribbon>
                        </a>
                    </div>
                </Drawer>
            </div>
        </div>
    );
};
export default BuyingOptions;