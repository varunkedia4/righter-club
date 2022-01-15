import React, {useState} from 'react'
import {Typography, Col, Row, Button, Drawer} from 'antd';
import MoreDesigns from "./MoreDesigns";
import {
    getCategoryNameFromProductCode, getConfirmationMessage,
    getDesignNamesFromProductCodeAndDesignNumber
} from "../../../util/CommonUtils";
import { ShareAltOutlined } from '@ant-design/icons';

const NameAndPrice = (props) => {

    const { Text } = Typography;

    const designCount = props.productDetails.designDetails.length;
    const designName = getDesignNamesFromProductCodeAndDesignNumber(props.productDetails.code, props.designNumber);
    const catalogName = getCategoryNameFromProductCode(props.productDetails.code);

    const [isDesignsDrawerVisible, setDesignsDrawerVisible] = useState(false);

    const productSharableLink = "https://righter.club/product/" + props.catalogCode + "." + props.productDetails.code + "." + props.designNumber;

    const handleShareButtonClick = () => {
        navigator.clipboard.writeText(productSharableLink);
        getConfirmationMessage("Copying", "Product Link Copied. Share now.", 5, 1)
    }

    return(
        <div style={{paddingLeft: "1.5em", paddingTop: '0.5em', paddingBottom: '1em'}}>
            <Row>
                <Col span={16}>
                    <Row><Text type={'secondary'}> {props.productDetails.fabricColor} {designName} {catalogName}</Text></Row>
                    <Row>
                        <Col span={6}><Text strong> ₹{props.productDetails.sellingPrice}</Text></Col>
                        <Col span={6}><Text delete type={'secondary'}> ₹{props.productDetails.actualPrice}</Text></Col>
                        <Col span={10}><Text strong type={'success'}> (50% OFF) </Text> </Col>
                    </Row>
                    <Row><Text type={'secondary'} strong> inclusive of all taxes </Text></Row>
                </Col>

                {
                    (designCount > 1) &&
                    <Col span={4}>
                        <div style={{paddingTop: '0.5em'}}>
                            <Row justify="center">
                                <Button onClick={() => setDesignsDrawerVisible(true)} style={{backgroundColor: '#FF0000', color: '#FFFFFF'}} shape="circle">
                                    +{props.productDetails.designDetails.length-1}
                                </Button>
                            </Row>
                            <Row justify="center"> <Text type={'danger'} strong> Designs </Text> </Row>
                            <Drawer placement={'bottom'} closable={true} height={300}
                                    onClose={() => setDesignsDrawerVisible(false)} visible={isDesignsDrawerVisible}>
                                <MoreDesigns
                                    productDetails={props.productDetails}
                                    catalogCode={props.catalogCode}
                                    closeDrawer={() => setDesignsDrawerVisible(false)}
                                />
                            </Drawer>
                        </div>
                    </Col>
                }
                {
                    <Col span={4}>
                        <div style={{paddingTop: '0.5em'}}>
                            <Row justify="center">
                                <Button  shape="circle" onClick={handleShareButtonClick}>
                                    <ShareAltOutlined />
                                </Button>
                            </Row>
                            <Row justify="center"> <Text> Share </Text> </Row>
                        </div>
                    </Col>
                }
            </Row>
        </div>
    );
}
export default NameAndPrice;