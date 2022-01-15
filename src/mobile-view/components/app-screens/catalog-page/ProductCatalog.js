import React, {useEffect} from 'react'
import {Empty, Button, Typography, Card, Image, Col, Row} from 'antd';
import {navigationLinks} from "../../../constants/NavigationLinks";
import {
    generateRandomDesignNumber, getCategoryNameFromProductCode,
    getDesignDetailsFromDesignNumberAndProductDetails,
    getDesignNamesFromProductCodeAndDesignNumber
} from "../../../util/CommonUtils";
import LazyLoad from "react-lazyload";

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

    return(
        <div>
            <a href={navigationLink} target="_blank">
                <Card>
                    <LazyLoad height={200} once >
                        <Image preview={false} width={"100%"} src={designDetails.imageLinks[0]}/>
                    </LazyLoad>
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

const ProductCatalog = (props) => {

    const productCards = [];

    for(let productCount = 0; productCount < props.productList.length; productCount++) {
        productCards.push(
            <Row style={{paddingLeft: '1em', paddingRight: '1em'}}>
                <Col span={12} style={{paddingRight: '0.3em'}}>
                    <ProductCard productDetails={props.productList[productCount]} productCatalogCode={props.productCatalogCode}/>
                </Col>
                {
                    (productCount+1 < props.productList.length) &&
                    <Col span={12} style={{paddingLeft: '0.3em'}}>
                        <ProductCard productDetails={props.productList[++productCount]} productCatalogCode={props.productCatalogCode}/>
                    </Col>
                }
            </Row>
        );
    }

    if(props.productList.length === 0) return (
        <div style={{paddingTop: '2em', paddingLeft: '1em', paddingRight: '1em'}}>
            <Empty description={"Uh oh! Seems that you've some unique requirement"}>
                <Button type={'primary'} shape={'round'} target='_blank' href={navigationLinks.WHATSAPP}> Tell us about your requirement </Button>
            </Empty>
        </div>
    );
    else return(
        <div> {productCards} </div>
    );
};
export default ProductCatalog;