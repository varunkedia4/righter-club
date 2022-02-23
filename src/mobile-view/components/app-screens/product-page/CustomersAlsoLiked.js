import React, {useEffect} from 'react'
import {Card, Col, Image, Row, Typography, Button} from "antd";
import {
    generateRandomDesignNumber,
    getCategoryNameFromProductCode,
    getDesignNamesFromProductCodeAndDesignNumber,
    getProductListFromCatalogCode, shuffleList
} from "../../../util/CommonUtils";
import {navigationLinks} from "../../../constants/NavigationLinks";
import {catalogCode} from "../../../constants/Common";

const ProductCard = (props) => {

    const { Text } = Typography;

    const designNumber = generateRandomDesignNumber(props.productDetails.code);
    const navigationLink = navigationLinks.PRODUCT + props.catalogCode + "." + props.productDetails.code + "." + designNumber;
    const designName = getDesignNamesFromProductCodeAndDesignNumber(props.productDetails.code, designNumber);
    const catalogName = getCategoryNameFromProductCode(props.productDetails.code);

    return(
        <div style={{paddingRight: '0.5em'}}>
            <a href={navigationLink}>
                <Card> <Image alt={catalogName} style={{width: '100%'}} preview={false} src={props.productDetails.designDetails[designNumber-1].imageLinks[0]}/> </Card>
                <Col style={{paddingTop: '0.5em', paddingLeft: '0.5em', paddingBottom: '1em'}}>
                    <Row>
                        <Text strong style={{fontSize: '0.8em', paddingRight: '1em'}}> ₹{props.productDetails.sellingPrice} </Text>
                        <Text type={'secondary'} delete style={{fontSize: '0.8em'}}> ₹{props.productDetails.actualPrice} </Text>
                    </Row>
                    <Row> <Text style={{fontSize: '0.8em'}} type={'secondary'}> {props.productDetails.fabricColor} {designName} {catalogName} </Text> </Row>
                </Col>
            </a>
        </div>
    );
};

const CustomersAlsoLiked = (props) => {

    const { Text } = Typography;
    const productList = shuffleList(getProductListFromCatalogCode(props.catalogCode));
    const getNavigationLinkForSeeMore = () => {
        if(props.catalogCode === catalogCode.KURTA || props.catalogCode === catalogCode.SHERWANI ||
            props.catalogCode === catalogCode.NEHRU_JACKET || props.catalogCode === catalogCode.JODHPURI ||
            props.catalogCode === catalogCode.TWO_PIECE_SUIT || props.catalogCode === catalogCode.THREE_PIECE_SUIT ||
            props.catalogCode === catalogCode.CASUAL_BLAZER || props.catalogCode === catalogCode.TUXEDO ||
            props.catalogCode === catalogCode.TROUSER || props.catalogCode === catalogCode.SHIRT) {
            return navigationLinks.CATEGORIES + props.catalogCode
        } else return navigationLinks.OCCASIONS + props.catalogCode;
    }

    useEffect(() => {
        let cardBody = document.querySelectorAll('.ant-card-body')
        cardBody.forEach(element => element.style = "padding : 7px");
    }, []);

    return(
        <div style={{paddingLeft: '1.5em', paddingRight: '1em', paddingTop: '1em'}}>
            <div style={{paddingBottom: '1em'}}><Text strong> CUSTOMERS ALSO LIKED </Text></div>
            <div>
                <Row>
                    <Col span={12}>
                        <ProductCard catalogCode={props.catalogCode} productDetails={productList[0]} />
                    </Col>
                    <Col span={12}>
                        <ProductCard catalogCode={props.catalogCode} productDetails={productList[1]} />
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col span={12}>
                        <ProductCard catalogCode={props.catalogCode} productDetails={productList[2]} />
                    </Col>
                    <Col span={12}>
                        <ProductCard catalogCode={props.catalogCode} productDetails={productList[3]} />
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col span={12}>
                        <ProductCard catalogCode={props.catalogCode} productDetails={productList[4]} />
                    </Col>
                    <Col span={12}>
                        <ProductCard catalogCode={props.catalogCode} productDetails={productList[5]} />
                    </Col>
                </Row>
            </div>
            <div style={{paddingTop: '1.5em', paddingLeft: '2em', paddingRight: '2em'}}>
                <Row justify={'center'}>
                    <Button block href={getNavigationLinkForSeeMore()} type={'primary'} shape={'round'}>
                        See More
                    </Button>
                </Row>
            </div>
        </div>
    );
};
export default CustomersAlsoLiked;