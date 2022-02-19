import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import Marquee from 'react-fast-marquee';
import {
    getCatalogNameFromCatalogCode,
    getDesignDetailsFromDesignNumberAndProductDetails,
    getProductDetailsFromProductListAndCode,
    getProductListFromCatalogCode
} from "../../../util/CommonUtils";
import ReactGA from "react-ga4";
import ProductImages from "./ProductImages";
import FabricDetails from "./FabricDetails";
import NameAndPrice from "./NameAndPrice";
import DeliveryAndReturns from "./DeliveryAndReturns";
import CustomersAlsoLiked from "./CustomersAlsoLiked";
import MoreDesigns from "./MoreDesigns";
import BuyingOptions from "./BuyingOptions";
import CustomDivider from "../../common/CustomDivider";
import LazyLoad from "react-lazyload";
import { Alert } from 'antd';
import NeedAssistanceBanner from "./NeedAssistanceBanner";
import {navigationLinks} from "../../../constants/NavigationLinks";

const ProductPage = () => {

    const { id } = useParams();
    const catalogCode = id.split('.')[0];
    const productCode = id.split('.')[1];
    const designNumber = id.split('.')[2];

    useEffect(() => { document.title = "Shop " + getCatalogNameFromCatalogCode(catalogCode) + " Outfits" }, [catalogCode]);
    ReactGA.send({ hitType: "pageview"});

    const productDetails = getProductDetailsFromProductListAndCode(getProductListFromCatalogCode(catalogCode), productCode);
    const designDetails = getDesignDetailsFromDesignNumberAndProductDetails(designNumber, productDetails);
    const designCount = productDetails.designDetails.length;

    const whatsAppNavigationLink = navigationLinks.WHATSAPP + "/?text=Hi Righter! I want to see fabric samples. Help me get started."

    return(
        <div style={{paddingTop: '3.5em', paddingBottom: '2em'}}>

            <Alert banner type={'info'}
                message={
                    <Marquee pauseOnHover gradient={false}>
                        <a style={{paddingRight: '0.4em'}} href={whatsAppNavigationLink}>Chat with us</a> to see the fabric sample
                    </Marquee>
                }
            />

            <ProductImages designDetails={designDetails}/>
            <NameAndPrice productDetails={productDetails} designNumber={designNumber} catalogCode={catalogCode}/>
            <BuyingOptions productId={id}/><CustomDivider />
            {
                (designCount > 1) &&
                <div>
                    <MoreDesigns productDetails={productDetails} catalogCode={catalogCode} closeDrawer={() => {}}/><CustomDivider />
                </div>
            }
            <DeliveryAndReturns productDetails={productDetails}/><CustomDivider />
            <FabricDetails productDetails={productDetails}/><CustomDivider />
            <NeedAssistanceBanner /><CustomDivider />
            <LazyLoad height={200} once >
                <CustomersAlsoLiked catalogCode={catalogCode}/>
            </LazyLoad>
        </div>
    );
};

export default ProductPage;