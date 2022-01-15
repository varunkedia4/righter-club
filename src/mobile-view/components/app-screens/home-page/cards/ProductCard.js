import {Card, Col, Image, Row, Typography} from "antd";
import React, {useEffect} from "react";
import {
    generateRandomDesignNumber, getCategoryNameFromProductCode,
    getDesignDetailsFromDesignNumberAndProductDetails,
    getDesignNamesFromProductCodeAndDesignNumber
} from "../../../../util/CommonUtils";
import {navigationLinks} from "../../../../constants/NavigationLinks";

const ProductCard = (props) => {

    useEffect(() => {
        let cardBody = document.querySelectorAll('.ant-card-body')
        cardBody.forEach(element => element.style = "padding : 7px");
    }, []);

    const { Text } = Typography;
    const productDetails = props.productDetails;
    const designNumber = generateRandomDesignNumber(productDetails.code);
    const designDetails = getDesignDetailsFromDesignNumberAndProductDetails(designNumber, productDetails);
    const navigationLink = navigationLinks.PRODUCT + props.productCatalogCode + "." + productDetails.code + "." + designNumber;

    const designName = getDesignNamesFromProductCodeAndDesignNumber(productDetails.code, designNumber);
    const catalogName = getCategoryNameFromProductCode(productDetails.code);

    return (
        <div style={{display: "inline-block", paddingRight: "1em" }}>
            <a href={navigationLink} target="_blank">
                <Card style={{width: 200}}>
                    <Image preview={false} width={"100%"} src={designDetails.imageLinks[0]}/>
                </Card>
                <Col style={{paddingTop: '0.5em', paddingLeft: '0.5em', paddingBottom: '1em'}}>
                    <Row>
                        <Text strong style={{fontSize: '0.8em', paddingRight: '1em'}}> ₹{productDetails.sellingPrice} </Text>
                        <Text type={'secondary'} delete style={{fontSize: '0.8em'}}> ₹{productDetails.actualPrice} </Text>
                    </Row>
                    <Row> <Text style={{fontSize: '0.8em'}} type={'secondary'}> {productDetails.fabricColor} {designName} {catalogName} </Text> </Row>
                </Col>
            </a>
        </div>
    );
};

export default ProductCard;