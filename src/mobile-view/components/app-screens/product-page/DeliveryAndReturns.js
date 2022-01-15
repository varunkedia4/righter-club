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
                    <Col span={18}><Text strong> DELIVERY & RETURNS </Text></Col>
                    <Col span={6}>
                        <Link onClick={() => setViewTermsDrawerOpen(true)}> View Terms </Link>
                        <Drawer placement="bottom" height={450} onClose={() => setViewTermsDrawerOpen(false)} visible={isViewTermsDrawerOpen}>
                            <div><Row justify={'center'}><Text strong>Resize & Return Policy</Text></Row></div>
                            <ResizeAndReturnTerms/>
                        </Drawer>
                    </Col>
                </Row>
            </div>

            <div style={{paddingBottom: '0.6em'}}>
                <Text type={'secondary'}><CarOutlined style={{paddingRight: '1em'}} /> Get it delivered within {props.productDetails.estimatedDelivery}</Text>
            </div>

            <div style={{paddingBottom: '0.6em'}}>
                <Text type={'secondary'}><HistoryOutlined style={{paddingRight: '1em'}} /> Easy 10 days resizing available</Text>
            </div>

            <div style={{paddingBottom: '0.6em'}}>
                <Text type={'secondary'}><SwapOutlined style={{paddingRight: '1em'}} /> Returns available in specific cases</Text>
            </div>

            <div style={{paddingBottom: '0.6em'}}>
                <Text type={'secondary'}><DollarOutlined style={{paddingRight: '1em'}} /> Pay only after 100% satisfaction with the outfit</Text>
            </div>

            <div style={{paddingBottom: '0.6em'}}>
                <Text type={'secondary'}><InfoCircleOutlined style={{paddingRight: '1em'}} /> Expect slight variation in color of product</Text>
            </div>
        </div>
    );
};
export default DeliveryAndReturns;