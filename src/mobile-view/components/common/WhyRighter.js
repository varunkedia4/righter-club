import React from "react";
import {Col, Row, Typography} from "antd";
import { SmileOutlined,  StarOutlined,  CarOutlined } from '@ant-design/icons';

const WhyRighter = () => {

    const { Text } = Typography;

    return(
        <div style={{paddingLeft: '2.5em', paddingRight: '1.5em', paddingTop: '1em', marginBottom: '2em'}}>
            <div style={{paddingBottom: '1em'}}>
                <Row justify={'center'} align="middle">
                    <Col span={4}> <StarOutlined style={{fontSize: '2em'}} /> </Col>
                    <Col span={20}>
                        <Row> <Text type={'secondary'} strong> Convenient Shopping </Text></Row>
                        <Row> <Text type={'secondary'}> Get outfit stitched to fit at comfort of your home </Text> </Row>
                    </Col>
                </Row>
            </div>

            <div style={{paddingBottom: '1em'}}>
                <Row justify={'center'} align="middle">
                    <Col span={4}> <SmileOutlined style={{fontSize: '2em'}} /> </Col>
                    <Col span={20}>
                        <Row> <Text type={'secondary'} strong> Guaranteed Fit </Text></Row>
                        <Row>
                            <Text type={'secondary'}>If it's not a perfect fit, we'll resize it for free</Text>
                        </Row>
                    </Col>
                </Row>
            </div>

            <div>
                <Row justify={'center'} align="middle">
                    <Col span={4}> <CarOutlined style={{fontSize: '2em'}} /> </Col>
                    <Col span={20}>
                        <Row> <Text type={'secondary'} strong> Fast Delivery </Text></Row>
                        <Row> <Text type={'secondary'}> For tailor-made outfits, it doesn't get much faster than this</Text> </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
export default WhyRighter;