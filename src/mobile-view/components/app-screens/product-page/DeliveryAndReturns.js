import React, {useState} from 'react'
import {Typography, Row, Col, Drawer} from "antd";
import {CarOutlined, SwapOutlined, DollarOutlined, HistoryOutlined, InfoCircleOutlined} from '@ant-design/icons';
import ResizeAndReturnTerms from "../../common/ResizeAndReturnTerms";

const DeliveryAndReturns = (props) => {

    const { Link, Text } = Typography;
    const [isViewTermsDrawerOpen, setViewTermsDrawerOpen] = useState(false);

    return(
        <div style={{paddingLeft: '1.5em', paddingRight: '1em', paddingTop: '1em', paddingBottom: '1em'}}>
            <div style={{paddingBottom: '1em'}}>
                <Row>
                    <Col span={17}><Text strong> DELIVERY & RETURNS </Text></Col>
                    <Col span={7}>
                        <Link onClick={() => setViewTermsDrawerOpen(true)}> VIEW TERMS </Link>
                        <Drawer placement="bottom" height={450} onClose={() => setViewTermsDrawerOpen(false)} visible={isViewTermsDrawerOpen}>
                            <div><Row justify={'center'}><Text strong>Resize & Return Policy</Text></Row></div>
                            <ResizeAndReturnTerms/>
                        </Drawer>
                    </Col>
                </Row>
            </div>

            <div style={{paddingBottom: '0.6em'}}>
                <Text><CarOutlined style={{paddingRight: '1em'}} /></Text>
                <Text type={'secondary'}>Get it delivered within {props.productDetails.estimatedDelivery}</Text>
            </div>

            <div style={{paddingBottom: '0.6em'}}>
                <Text><HistoryOutlined style={{paddingRight: '1em'}} /> </Text>
                <Text type={'secondary'}>Easy 10 days resizing available</Text>
            </div>

            <div style={{paddingBottom: '0.6em'}}>
                <Text><SwapOutlined style={{paddingRight: '1em'}} /></Text>
                <Text type={'secondary'}>Returns available in specific cases</Text>
            </div>

            <div style={{paddingBottom: '0.6em'}}>
                <Text><DollarOutlined style={{paddingRight: '1em'}} /> </Text>
                <Text type={'secondary'}>Pay only after 100% satisfaction with the outfit</Text>
            </div>

            <div style={{paddingBottom: '0.6em'}}>
                <Text><InfoCircleOutlined style={{paddingRight: '1em'}} /></Text>
                <Text type={'secondary'}>Expect slight variation in color of product</Text>
            </div>
        </div>
    );
};
export default DeliveryAndReturns;