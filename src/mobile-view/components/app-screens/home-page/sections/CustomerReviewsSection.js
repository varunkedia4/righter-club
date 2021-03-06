import React from 'react'
import {Card, Row, Col, Typography, Button} from "antd";
import WhyRighter from "../../../common/WhyRighter";
import {StarOutlined} from '@ant-design/icons';
import CustomDivider from "../../../common/CustomDivider";
import {useNavigate} from "react-router-dom";
import {navigationLinks} from "../../../../constants/NavigationLinks";

const CustomerReviewsSection = () => {

    const { Title, Text } = Typography;
    const navigate = useNavigate();

    return(
        <div id='HearItFromCustomersSection' style={{paddingBottom: '2.5em', paddingTop: '1.5em'}}>
            <Title level={4} style={{textAlign: 'center'}}> Why Righter </Title>
            <WhyRighter />
            <CustomDivider />
            <Title level={4} style={{textAlign: 'center', paddingTop: '1em', paddingBottom: '0.5em'}}> Unfiltered Reviews </Title>
            <div style={{overflow: "auto", whiteSpace: "nowrap", paddingLeft: '1em', paddingTop: '0.5em'}}>
                <div style={{display: "inline-block", paddingRight: "1em" }}>
                    <Card style={{padding: '1em'}}>
                        <div style={{paddingBottom: '1em'}}>
                            <Row>
                                <Col span={21}><Text type={'secondary'}>Likhita, Mumbai</Text></Col>
                                <Col span={3}><Text type={'warning'}> 5 <StarOutlined /> </Text></Col>
                            </Row>
                        </div>
                        <div style={{}}>
                            <Text>
                                Finally found a solution online after <br/>
                                searching relentlessly in the market to <br/>
                                gift a custom-made sherwani for my <br/>
                                brother.
                            </Text>
                        </div>
                    </Card>
                </div>

                <div style={{display: "inline-block", paddingRight: "1em" }}>
                    <Card style={{padding: '1em'}}>
                        <div style={{paddingBottom: '1em'}}>
                            <Row>
                                <Col span={21}><Text type={'secondary'}>Vivek, Bangalore</Text></Col>
                                <Col span={3}><Text type={'warning'}> 4 <StarOutlined /> </Text></Col>
                            </Row>
                        </div>
                        <div style={{}}>
                            <Text>
                                Ordered all dresses for my wedding <br/>
                                with this platform and i must say <br/>
                                i am not disappointed brother.<br/>
                                Made my day!!!

                            </Text>
                        </div>
                    </Card>
                </div>

                <div style={{display: "inline-block", paddingRight: "1em" }}>
                    <Card style={{padding: '1em'}}>
                        <div style={{paddingBottom: '1em'}}>
                            <Row>
                                <Col span={21}><Text type={'secondary'}>Rajarshi, Bangalore</Text></Col>
                                <Col span={3}><Text type={'warning'}> 4 <StarOutlined /> </Text></Col>
                            </Row>
                        </div>
                        <div style={{}}>
                            <Text>
                                I had a very specific requirement of a Chikankari <br/>
                                with mirror work kurta and right from the first <br/>
                                discussion, the team was cognizant of my requirement.<br/>
                                The overall experience was amazing.

                            </Text>
                        </div>
                    </Card>
                </div>

                <div style={{display: "inline-block", paddingRight: "1em" }}>
                    <Card style={{padding: '1em'}}>
                        <div style={{paddingBottom: '1em'}}>
                            <Row>
                                <Col span={21}><Text type={'secondary'}>Ashish, Pune</Text></Col>
                                <Col span={3}><Text type={'warning'}> 4 <StarOutlined /> </Text></Col>
                            </Row>
                        </div>
                        <div style={{}}>
                            <Text>
                                Ah..! Finally..! Someone has realised that <br/>
                                One SIZE doesn't fit ALL indeed!<br/>
                                The best custom tailoring one stop solution<br/>
                                out there for men! Thanks a lot :)

                            </Text>
                        </div>
                    </Card>
                </div>
            </div>
            <div style={{paddingTop: '2.5em', paddingLeft: '2em', paddingRight: '2em'}}>
                {/*<AnchorLink offset={() => 45} href='#ShopByCategorySection'>*/}
                    <Button type={'primary'} shape={'round'} block href={navigationLinks.GET_STARTED} onClick={() => navigate(navigationLinks.GET_STARTED)}> Start Shopping </Button>
                {/*</AnchorLink>*/}
            </div>
        </div>
    );
};

export default CustomerReviewsSection;