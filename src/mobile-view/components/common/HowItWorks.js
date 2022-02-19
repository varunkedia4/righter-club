import React from "react";
import { Row, Col, Typography } from "antd";
import {AppstoreAddOutlined, CalculatorOutlined, ScissorOutlined, SmileOutlined} from '@ant-design/icons';

const HowItWorks = () => {

    const { Text } = Typography;

    return(
        <div style={{paddingLeft: '2.5em', paddingRight: '1.5em', paddingTop: '1em', marginBottom: '2em'}}>
            <div style={{paddingBottom: '1em'}}>
                <Row justify={'center'} align="middle">
                    <Col span={4}> <AppstoreAddOutlined style={{fontSize: '2em'}} /> </Col>
                    <Col span={20}>
                        <Row> <Text type={'secondary'}strong> Select Fabric & Design </Text></Row>
                        <Row> <Text type={'secondary'}> from our hand picked collections </Text> </Row>
                    </Col>
                </Row>
            </div>

            <div style={{paddingBottom: '1em'}}>
                <Row justify={'center'} align="middle">
                    <Col span={4}> <CalculatorOutlined style={{fontSize: '2em'}} /> </Col>
                    <Col span={20}>
                        <Row> <Text type={'secondary'} strong> Schedule Measurement </Text></Row>
                        <Row>
                            <Text type={'secondary'}> at place of your convenience</Text>
                        </Row>
                    </Col>
                </Row>
            </div>

            <div style={{paddingBottom: '1em'}}>
                <Row justify={'center'} align="middle">
                    <Col span={4}> <ScissorOutlined style={{fontSize: '2em'}} /> </Col>
                    <Col span={20}>
                        <Row> <Text type={'secondary'} strong> Sit back & relax </Text></Row>
                        <Row> <Text type={'secondary'}> while our experts stitch outfit to your fit </Text> </Row>
                    </Col>
                </Row>
            </div>

            <div>
                <Row justify={'center'} align="middle">
                    <Col span={4}> <SmileOutlined style={{fontSize: '2em'}} /> </Col>
                    <Col span={20}>
                        <Row> <Text type={'secondary'} strong> Make Payment </Text></Row>
                        <Row> <Text type={'secondary'}> only after 100% satisfaction</Text> </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};
export default HowItWorks;