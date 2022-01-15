import React from 'react'
import {Col, Image, Row, Typography} from "antd";
import { CarOutlined, DollarOutlined, InfoCircleOutlined } from '@ant-design/icons';
import {navigationLinks} from "../../../constants/NavigationLinks";
import {
    getCategoryNameFromProductCode,
    getDesignNamesFromProductCodeAndDesignNumber
} from "../../../util/CommonUtils";

const ProductDetails = (props) => {

    const { Text } = Typography;
    const navigationLink = navigationLinks.PRODUCT + props.catalogCode + "." + props.productCode + "." + props.designNumber;
    const designName = getDesignNamesFromProductCodeAndDesignNumber(props.productCode, props.designNumber);
    const catalogName = getCategoryNameFromProductCode(props.productDetails.code);

    return(
        <div>
            <Row>
                <Col offset={1} span={5}>
                    <a href={navigationLink}><Image preview={false} src={props.designDetails.imageLinks[0]} /></a>
                </Col>

                <Col offset={1} span={17}>
                    <div style={{paddingBottom: '0.5em'}}>
                        <Row><Text type={'secondary'}> {props.productDetails.fabricColor} {designName} {catalogName} </Text></Row>
                        <Row>
                            <Col span={6}> <Text strong> ₹{props.productDetails.sellingPrice} </Text> </Col>
                            <Col span={6}> <Text delete type={'secondary'}> ₹{props.productDetails.actualPrice} </Text> </Col>
                            <Col span={10}> <Text strong type={'warning'}> (50% OFF) </Text> </Col>
                        </Row>
                        <Row><Text type="success" strong> inclusive of all taxes </Text></Row>
                    </div>

                    <div tyle={{paddingTop: '0.5em'}}>
                        <Row><Text type={'secondary'}><CarOutlined style={{paddingRight: '0.5em'}} /> Get it delivered within {props.productDetails.estimatedDelivery}</Text></Row>
                        <Row><Text type={'secondary'}><DollarOutlined style={{paddingRight: '0.5em'}} /> Pay after 100% satisfaction</Text></Row>
                        <Row><Text type={'secondary'}><InfoCircleOutlined style={{paddingRight: '0.5em'}} /> Expect slight variation in color</Text></Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};
export default ProductDetails;