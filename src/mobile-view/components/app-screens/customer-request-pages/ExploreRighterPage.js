import React, {useEffect, useState} from 'react'
import {commonConstants, emailSubject} from "../../../constants/Common";
import ReactGA from "react-ga4";
import {Layout, Row, Col, Button, Input, Image, Typography} from "antd";
import {getConfirmationMessage} from "../../../util/CommonUtils";
import {submitRequest} from "../../../api/SubmitRequestAPI";
import ShopByOccasionSection from "../home-page/sections/ShopByOccasionSection";
import ShopByCategorySection from "../home-page/sections/ShopByCategorySection";
import {useNavigate} from "react-router-dom";
import {navigationLinks} from "../../../constants/NavigationLinks";
import {extraImages} from "../../../constants/ImageLinks";

const ExploreRighterPage = () => {

    useEffect(() => {document.title = commonConstants.EXPLORE_RIGHTER}, []);
    ReactGA.send({hitType: "pageview"});

    const { Header } = Layout;
    const navigate = useNavigate();
    const { Text } = Typography;

    const [phoneNumber, setPhoneNumber] = useState("");
    const [isWarningHidden, setWarningHidden] = useState(true);
    const [headerHeight, setHeaderHeight] = useState('7.5em')
    const handlePhoneNumberChange = (event) => { setPhoneNumber(event.target.value); }

    const handleScheduleCall = () => {
        if (phoneNumber === "") {
            setHeaderHeight('9em')
            setWarningHidden(false);
        } else {
            getConfirmationMessage('Scheduling your call...', 'Your call has been scheduled. We will reach out to you soon.', 1000, 4)
            submitRequest(emailSubject.CONTACT_US_ADS, phoneNumber, commonConstants.NONE, commonConstants.NONE)
        }
    }

    return (
        <div style={{paddingTop: '3.5em', paddingBottom: '2em'}}>
            <div>
                <Header style={{ paddingLeft: '1em', position: 'fixed', zIndex: 1, height: headerHeight, width: '100%', backgroundColor: '#e9f1f9'}}>
                    <div style={{paddingTop: '0.5em'}}>
                        <Row align={'middle'}>
                            <Col span={16}>
                                <Input placeholder="Phone Number" onChange={handlePhoneNumberChange} />
                            </Col>
                            <Col offset={1} span={6}><Button onClick={handleScheduleCall} type='primary' shape='round'> Schedule Call </Button></Col>
                        </Row>
                        <div style={{lineHeight: '14px'}}>
                            <Row>
                                <Text type={'secondary'}> We will reach out on your number shortly. </Text>
                            </Row>
                        </div>
                        <div style={{lineHeight: '15px', paddingTop: '1em'}} hidden={isWarningHidden}>
                            <Row>
                                <Text type={'danger'}> *Please enter your number to schedule a call </Text>
                            </Row>
                        </div>
                    </div>
                </Header>
            </div>
            <div style={{paddingTop: '3em'}}>
                <Image preview={false} onClick={() => navigate(navigationLinks.HOME)} src={extraImages.ADS_POSTER} />
            </div>
            <div>
                <ShopByOccasionSection />
                <ShopByCategorySection />
            </div>
            <div style={{paddingTop: '2em'}}>
                <Row justify={'center'}>
                    <Button onClick={() => navigate(navigationLinks.HOME)} type='primary' shape='round'> Explore Righter </Button>
                </Row>
            </div>
        </div>
    );
};
export default ExploreRighterPage;