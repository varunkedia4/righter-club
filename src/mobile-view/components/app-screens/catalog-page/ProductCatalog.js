import React, {useEffect} from 'react'
import {Empty, Button, Typography, Card, Image, Col, Row} from 'antd';
import {navigationLinks} from "../../../constants/NavigationLinks";
import {
    generateRandomDesignNumber, getCategoryNameFromProductCode,
    getDesignDetailsFromDesignNumberAndProductDetails, getDesignNamesFromProductCodeAndDesignNumber
} from "../../../util/CommonUtils";
import LazyLoad from "react-lazyload";
import PropositionBanner from "./PropostionBanner";
import CTABanner from "./CTABanner";

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
            <a href={navigationLink}>
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

const PartialProductCatalog = (props) => {

    const productCards = [];

    for(let productCount = props.startIndex; productCount < props.productList.length && productCount < props.endIndex; productCount++) {
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

    return(<div> {productCards} </div>);
};

const ProductCatalog = (props) => {

    const whatsAppNavigationLink = navigationLinks.WHATSAPP + "/?text=" +
                            "Hi Righter! I'm not able to find something as per my requirement. Help me get started."

    if(props.productList.length === 0) return (
        <div style={{paddingTop: '2em', paddingLeft: '1em', paddingRight: '1em'}}>
            <Empty description={"Uh oh! Seems that you've some unique requirement"}>
                <Button type={'primary'} shape={'round'} target='_blank' href={whatsAppNavigationLink}> Tell us about your requirement </Button>
            </Empty>
        </div>
    );
    else return(
        <div>
            <PartialProductCatalog
                productCatalogCode={props.productCatalogCode}
                productList={props.productList}
                startIndex={0} endIndex={4}
            />
            <PropositionBanner
                heading={'Shopping Made Easy'}
                description={'Get outfits stitched to fit at comfort of your home'}
            />

            {
                (props.productList.length > 4) &&
                <div>
                    <PartialProductCatalog
                        productCatalogCode={props.productCatalogCode}
                        productList={props.productList}
                        startIndex={4} endIndex={8}
                    />
                    <PropositionBanner
                        heading={'100% Guaranteed Fit'}
                        description={'If it\'s not perfect fit, we will resize it for free'}
                    />
                </div>
            }

            {
                (props.productList.length > 8) &&
                <div>
                    <PartialProductCatalog
                        productCatalogCode={props.productCatalogCode}
                        productList={props.productList}
                        startIndex={8} endIndex={14}
                    />
                    <CTABanner
                        heading={'Want to see fabric sample?'}
                        ctaText={'Chat with us'}
                        whatsAppText={'Hi Righter! I want to see fabric samples. Help me get started.'}
                    />
                </div>
            }

            {
                (props.productList.length > 14) &&
                <div>
                    <PartialProductCatalog
                        productCatalogCode={props.productCatalogCode}
                        productList={props.productList}
                        startIndex={14} endIndex={20}
                    />
                    <CTABanner
                        heading={'Not able to find something?'}
                        ctaText={'Tell us your requirements'}
                        whatsAppText={"Hi Righter! I'm not able to find something as per my requirements. Help me get started."}
                    />
                </div>
            }

            {
                (props.productList.length > 20) &&
                <div>
                    <PartialProductCatalog
                        productCatalogCode={props.productCatalogCode}
                        productList={props.productList}
                        startIndex={20} endIndex={26}
                    />
                    <CTABanner
                        heading={'Need any design customization?'}
                        ctaText={'Tell us your requirements'}
                        whatsAppText={"Hi Righter! I'm looking for design customization. Help me get started."}
                    />
                </div>
            }

            {
                (props.productList.length > 26) &&
                <div>
                    <PartialProductCatalog
                        productCatalogCode={props.productCatalogCode}
                        productList={props.productList}
                        startIndex={26} endIndex={32}
                    />
                    <CTABanner
                        heading={'Looking for personal assistance?'}
                        ctaText={'Chat with us'}
                        whatsAppText={"Hi Righter! I'm looking for personal assistance. Help me get started."}
                    />
                </div>
            }

            {
                (props.productList.length > 32) &&
                <div>
                    <PartialProductCatalog
                        productCatalogCode={props.productCatalogCode}
                        productList={props.productList}
                        startIndex={32} endIndex={props.productList.length}
                    />
                    <CTABanner
                        heading={'Your feedback is important to us'}
                        ctaText={'Send feedback'}
                        whatsAppText={"Hi Righter! I've some feedback for you."}
                    />
                </div>
            }
        </div>
    );
};
export default ProductCatalog;