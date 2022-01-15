import React from 'react'
import {Card, Row, Col, Typography} from "antd";
import WhyRighter from "../../../common/WhyRighter";
import {StarOutlined} from '@ant-design/icons';

const CustomerReviewsSection = () => {

    const { Title, Text } = Typography;

    return(
        <div id='HearItFromCustomersSection' style={{paddingBottom: '2.5em', paddingTop: '0.5em'}}>
            <Title level={4} style={{textAlign: 'center', paddingBottom: '1em'}}> Why Righter </Title>
            <WhyRighter />
            <Title level={4} style={{textAlign: 'center', paddingBottom: '0.5em'}}> Unfiltered Reviews </Title>
            <div style={{overflow: "auto", whiteSpace: "nowrap", paddingLeft: '1em', paddingTop: '0.5em'}}>
                <div style={{display: "inline-block", paddingRight: "1em" }}>
                    <Card>
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
                    <Card>
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
                    <Card>
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
                    <Card>
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
        </div>
    );
};

export default CustomerReviewsSection;