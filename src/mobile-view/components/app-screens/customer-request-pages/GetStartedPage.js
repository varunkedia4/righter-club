import React, {useEffect, useState} from 'react'
import ReactGA from "react-ga4";
import {catalogName, commonConstants, emailSubject} from "../../../constants/Common";
import {Row, Col, Typography, Button, Image, DatePicker, Radio, Input, Modal} from "antd";
import {priceRangeFilters} from "../../../constants/Filters";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {homePageImages} from "../../../constants/ImageLinks";
import Text from "antd/es/typography/Text";
import {UserOutlined} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";
import {getCategoryNameFromCategoryCode, getNavigationLinkFromCategoryCode} from "../../../util/CommonUtils";
import {submitRequest} from "../../../api/SubmitRequestAPI";
import {pageTitles} from "../../../constants/seo/PageTitles";

const ThankYouModal = (props) => {

    useEffect(() => {
        let cardBody = document.querySelectorAll('.ant-modal-footer')
        cardBody.forEach(element => element.style = "padding : 0px");
    }, [props.isModalVisible]);

    const navigate = useNavigate();

    return(
        <div>
            <Modal footer={<div style={{padding: '0', margin: '0'}}></div>} centered visible={props.isModalVisible} onCancel={props.closeModal}>
                <Row justify={'center'}><UserOutlined style={{fontSize: '2em'}}/></Row>
                <div style={{paddingTop: '1em', paddingBottom: '1.5em'}}>
                    <div style={{paddingBottom: '0.5em'}}>
                        <Row justify={'center'}><Text strong>Thank you for reaching out</Text></Row>
                    </div>
                    <Row justify={'center'}><Text>We'll be in touch with you shortly</Text></Row>
                </div>
                <div>
                    <Row justify={'center'}>
                        <Button type='primary' shape={'round'} onClick={() => navigate(props.navigationLink)} href={props.navigationLink}>Start Exploring</Button>
                    </Row>
                    <div style={{paddingTop: '1em'}}>
                        <Row justify={'center'}><Text type={'secondary'}>Click the button to explore our latest collections</Text></Row>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

const GetStartedPage = () => {

    useEffect(() => {document.title = pageTitles.GET_STARTED}, []);
    ReactGA.send({hitType: "pageview"});

    const {Title, Text} = Typography;

    const [outfitType, setOutfitType] = useState('');
    const [priceRange, setPriceRange] = useState('');
    const [deliveryTimeLine, setDeliveryTimeLine] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [isErrorMessageHidden, setErrorMessageHidden] = useState(true);

    const handleSubmitClick = () => {
        if(outfitType === '' || priceRange === '' || deliveryTimeLine === '' || phoneNumber === '') {
            setErrorMessageHidden(false);
        } else {
            setErrorMessageHidden(true);
            setModalVisible(true);
            const customerDetails = phoneNumber
            const customerResponse = getCategoryNameFromCategoryCode(outfitType) + " | " + priceRange + " | " + deliveryTimeLine
            submitRequest(emailSubject.CUSTOMER_SUPPORT_WEBSITE_LEAD_PAGE, customerDetails, commonConstants.NONE, customerResponse)
        }
    }

    return (
        <div style={{paddingTop: '3.5em'}}>
            <div id='PageTitle'
                 style={{backgroundColor: "#e9f1f9", paddingLeft: "1.5em", paddingTop: '1em', marginBottom: '1em'}}>
                <Row><Title level={4}>{commonConstants.GET_STARTED}</Title></Row>
            </div>

            <div id='outfitType' style={{paddingLeft: '1.5em', paddingRight: '1.5em'}}>
                <Title level={5}>What kind of outfit are you looking for?</Title>
                <Row justify="space-around" align="middle">
                    <Col span={10}>
                        <AnchorLink offset={() => 50} href='#priceRange'>
                            <Image onClick={() => setOutfitType('05')} preview={false} src={homePageImages.SHOP_BY_CATEGORY.TWO_PIECE_SUIT} />
                            <Row justify="space-around" align="middle"><Text>{catalogName.TWO_PIECE_SUIT}</Text></Row>
                        </AnchorLink>
                    </Col>
                    <Col span={10}>
                        <AnchorLink offset={() => 50} href='#priceRange'>
                            <Image onClick={() => setOutfitType('06')} preview={false} src={homePageImages.SHOP_BY_CATEGORY.THREE_PIECE_SUIT} />
                            <Row justify="space-around" align="middle"><Text>{catalogName.THREE_PIECE_SUIT}</Text></Row>
                        </AnchorLink>
                    </Col>
                </Row>

                <Row style={{paddingTop: '1em'}} justify="space-around" align="middle">
                    <Col span={10}>
                        <AnchorLink offset={() => 50} href='#priceRange'>
                            <Image onClick={() => setOutfitType('07')} preview={false} src={homePageImages.SHOP_BY_CATEGORY.CASUAL_BLAZER} />
                            <Row justify="space-around" align="middle"><Text>{catalogName.CASUAL_BLAZER}</Text></Row>
                        </AnchorLink>
                    </Col>
                    <Col span={10}>
                        <AnchorLink offset={() => 50} href='#priceRange'>
                            <Image onClick={() => setOutfitType('08')} preview={false} src={homePageImages.SHOP_BY_CATEGORY.TUXEDO} />
                            <Row justify="space-around" align="middle"><Text>{catalogName.TUXEDO}</Text></Row>
                        </AnchorLink>
                    </Col>
                </Row>

                <Row style={{paddingTop: '1em'}} justify="space-around" align="middle">
                    <Col span={10}>
                        <AnchorLink offset={() => 50} href='#priceRange'>
                            <Image onClick={() => setOutfitType('01')} preview={false} src={homePageImages.SHOP_BY_CATEGORY.SHERWANI} />
                            <Row justify="space-around" align="middle"><Text>{catalogName.SHERWANI}</Text></Row>
                        </AnchorLink>
                    </Col>
                    <Col span={10}>
                        <AnchorLink offset={() => 50} href='#priceRange'>
                            <Image onClick={() => setOutfitType('02')} preview={false} src={homePageImages.SHOP_BY_CATEGORY.JODHPURI} />
                            <Row justify="space-around" align="middle"><Text>{catalogName.JODHPURI}</Text></Row>
                        </AnchorLink>
                    </Col>
                </Row>

                <Row style={{paddingTop: '1em'}} justify="space-around" align="middle">
                    <Col span={10}>
                        <AnchorLink offset={() => 50} href='#priceRange'>
                            <Image onClick={() => setOutfitType('03')} preview={false} src={homePageImages.SHOP_BY_CATEGORY.NEHRU_JACKET} />
                            <Row justify="space-around" align="middle"><Text>{catalogName.NEHRU_JACKET}</Text></Row>
                        </AnchorLink>
                    </Col>
                    <Col span={10}>
                        <AnchorLink offset={() => 50} href='#priceRange'>
                            <Image onClick={() => setOutfitType('04')} preview={false} src={homePageImages.SHOP_BY_CATEGORY.KURTA} />
                            <Row justify="space-around" align="middle"><Text>{catalogName.KURTA}</Text></Row>
                        </AnchorLink>
                    </Col>
                </Row>

                <Row style={{paddingTop: '1em'}} justify="space-around" align="middle">
                    <Col span={10}>
                        <AnchorLink offset={() => 50} href='#priceRange'>
                            <Image onClick={() => setOutfitType('09')} preview={false} src={homePageImages.SHOP_BY_CATEGORY.TROUSER} />
                            <Row justify="space-around" align="middle"><Text>{catalogName.TROUSER}</Text></Row>
                        </AnchorLink>
                    </Col>
                    <Col span={10}>
                        <AnchorLink offset={() => 50} href='#priceRange'>
                            <Image onClick={() => setOutfitType('10')} preview={false} src={homePageImages.SHOP_BY_CATEGORY.SHIRT} />
                            <Row justify="space-around" align="middle"><Text>{catalogName.SHIRT}</Text></Row>
                        </AnchorLink>
                    </Col>
                </Row>
            </div>

            <div id='priceRange' style={{paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '2em'}}>
                <Title level={5}>What is your preferred price range?</Title>
                <Radio.Group onChange={(e) => setPriceRange(e.target.value)} value={priceRange}>
                    <Radio value={priceRangeFilters.LESS_THAN_1500}>{priceRangeFilters.LESS_THAN_1500}</Radio>
                    <Radio value={priceRangeFilters.BETWEEN_1500_TO_2999}>{priceRangeFilters.BETWEEN_1500_TO_2999}</Radio>
                    <Radio value={priceRangeFilters.BETWEEN_3000_TO_4999}>{priceRangeFilters.BETWEEN_3000_TO_4999}</Radio>
                    <Radio value={priceRangeFilters.MORE_THAN_4999}>{priceRangeFilters.MORE_THAN_4999}</Radio>
                    <Radio value={priceRangeFilters.ALL}>Show all</Radio>
                </Radio.Group>
            </div>

            <div id='deliveryTime' style={{paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '2em'}}>
                <Title level={5}>What is the delivery timeline you're expecting?</Title>
                <DatePicker onChange={(dateString) => setDeliveryTimeLine(dateString._d)} />
            </div>

            <div id='personalAssistance' style={{paddingLeft: '1.5em', paddingRight: '1.5em', paddingTop: '2em'}}>
                <Title level={5}>How can we reach out to you?</Title>
                <Input placeholder="Phone Number" onChange={(event) => setPhoneNumber(event.target.value)} />
            </div>

            <div style={{paddingLeft: '2em', paddingRight: '2em', paddingTop: '2em', paddingBottom: '2em'}}>
                <Row justify="space-around" align="middle">
                    <Col span={24}><Button onClick={handleSubmitClick} type='primary' shape='round' block> Submit </Button></Col>
                </Row>
                <div hidden={isErrorMessageHidden} style={{paddingTop: '1em', paddingLeft: '0.5em'}}>
                    <Text type={'danger'}> Please fill out all the details to submit the form </Text>
                </div>
            </div>

            <ThankYouModal closeModal={() => setModalVisible(false)} isModalVisible={isModalVisible} navigationLink={getNavigationLinkFromCategoryCode(outfitType)} />
        </div>
    );
};
export default GetStartedPage;