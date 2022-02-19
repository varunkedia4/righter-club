import React from 'react'
import {Col, Image, Row, Typography} from "antd";
import { CarOutlined, InfoCircleOutlined } from '@ant-design/icons';
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
        <div style={{paddingBottom: '1em'}}>
            <Row>
                <Col offset={1} span={5}>
                    <a href={navigationLink}><Image preview={false} src={props.designDetails.imageLinks[0]} /></a>
                </Col>

                <Col offset={1} span={17}>
                    <div style={{paddingBottom: '0.5em'}}>
                        {
                            (props.stitchOption === "1") &&
                            <Row style={{paddingBottom: '0.5em'}}><Text strong> Buying Option - Stitch to Fit </Text></Row>
                        }

                        {
                            (props.stitchOption === "2") &&
                            <Row style={{paddingBottom: '0.5em'}}><Text strong> Buying Option - Standard Size </Text></Row>
                        }

                        <Row><Text type={'secondary'}> {props.productDetails.fabricColor} {designName} {catalogName} </Text></Row>
                        <Row>
                            <Col span={6}> <Text strong> ₹{props.productDetails.sellingPrice} </Text> </Col>
                            <Col span={6}> <Text delete type={'secondary'}> ₹{props.productDetails.actualPrice} </Text> </Col>
                            <Col span={10}> <Text strong type={'warning'}> (50% OFF) </Text> </Col>
                        </Row>
                    </div>

                    <div>
                        <Row>
                            <Text><CarOutlined style={{paddingRight: '0.5em'}} /></Text>
                            <Text type={'secondary'}>Delivered in {props.productDetails.estimatedDelivery}</Text>
                        </Row>
                        <Row>
                            <Text><InfoCircleOutlined style={{paddingRight: '0.5em'}} /></Text>
                            <Text type={'secondary'}>Expect slight variation in color</Text>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    );
};
export default ProductDetails;