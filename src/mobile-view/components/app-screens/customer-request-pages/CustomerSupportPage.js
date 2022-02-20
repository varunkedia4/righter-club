import React, {useEffect, useState} from 'react'
import ReactGA from "react-ga4";
import {commonConstants, emailSubject} from "../../../constants/Common";
import {Card, Row, Typography, Input, Button} from "antd";
import {navigationLinks} from "../../../constants/NavigationLinks";
import {
    MessageOutlined, CustomerServiceOutlined,
    QuestionCircleOutlined, WhatsAppOutlined, MailOutlined, PushpinOutlined
} from '@ant-design/icons';
import {submitRequest} from "../../../api/SubmitRequestAPI";
import {getConfirmationMessage} from "../../../util/CommonUtils";
import {pageTitles} from "../../../constants/seo/PageTitles";

const CustomerSupportPage = () => {

    useEffect(() => { document.title = pageTitles.CUSTOMER_SUPPORT }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Text, Title, Link } = Typography;

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const handleNameChange = (event) => { setName(event.target.value); }
    const handlePhoneNumberChange = (event) => { setPhoneNumber(event.target.value); }

    const handleScheduleCallSubmit = () => {
        getConfirmationMessage('Scheduling...', 'Your call has been scheduled. We will reach out to you soon.', 1000, 4)
        const customerDetails = name + " | " + phoneNumber
        submitRequest(emailSubject.CUSTOMER_SUPPORT, customerDetails, commonConstants.NONE, commonConstants.NONE)
    }

    const whatsAppNavigationLink = navigationLinks.WHATSAPP + "/?text=" +
        "Hi Righter! I'm looking for tailor made men's wear. Help me get started";

    return (
        <div style={{paddingTop: '3.5em'}}>
            <div id='PageTitle' style={{backgroundColor: "#e9f1f9", paddingLeft: "1.5em", paddingTop: '1em', marginBottom: '1em'}}>
                <Row><Title level={4}>{commonConstants.CUSTOMER_SUPPORT}</Title></Row>
            </div>

            <div style={{paddingLeft: '1.5em', paddingRight: '1.5em'}}>
                <Card style={{ marginBottom: '1em' }}>
                    <Title level={5}> <QuestionCircleOutlined style={{paddingRight: '0.5em'}} /> Product & Order Queries </Title>
                    <Text type={'secondary'}> We are available for all queries pertaining to products & orders.</Text><br/><br/>
                    <Link style={{color: "#000000"}} href={whatsAppNavigationLink}><WhatsAppOutlined style={{paddingRight: '0.5em'}} /> {commonConstants.WHATSAPP_NUMBER} </Link> <br/>
                    <Text><MailOutlined style={{paddingRight: '0.5em'}} /> {commonConstants.RIGHTER_EMAIL} </Text>
                </Card>

                <Card style={{ marginBottom: '1em' }}>
                    <Title level={5}> <MessageOutlined style={{paddingRight: '0.5em'}} /> Chat with an Expert</Title>
                    <Text type={'secondary'}> A really quick chat perhaps to get you started on what's happening at Righter from Deals to Sales. Get to know more by using the <a style={{color: '#25D366'}} href={whatsAppNavigationLink} target='_blank'> WhatsApp </a> button on the top right side of your screen.</Text>
                </Card>

                <Card style={{ marginBottom: '1em' }}>
                    <Title level={5}> <CustomerServiceOutlined style={{paddingRight: '0.5em'}} /> Schedule a Call </Title>
                    <Text type={'secondary'}>We will reach out on phone to assist you with your queries.</Text> <br/><br/>
                    <Input placeholder="Your Name" onChange={handleNameChange} /><br/><br/>
                    <Input placeholder="Phone Number" onChange={handlePhoneNumberChange} /><br/><br/>
                    <div id='SubmitButton' style={{paddingLeft: "4em", paddingRight: '4em'}}>
                        <Row><Button type='primary' shape="round" block onClick={handleScheduleCallSubmit} >Submit</Button></Row>
                    </div>
                </Card>

                <Card style={{ marginBottom: '1em' }}>
                    <Title level={5}> <PushpinOutlined style={{paddingRight: '0.5em'}} /> Registered Address</Title>
                    <Row><Text type={'secondary'}> 1-4-127/A, Kummari Basthi, </Text></Row>
                    <Row><Text type={'secondary'}> Loyola College Road, Old Alwal, </Text></Row>
                    <Row><Text type={'secondary'}> Hyderabad, Telangana, India, 500010 </Text></Row>
                </Card>
            </div>
        </div>
    );
};

export default CustomerSupportPage;