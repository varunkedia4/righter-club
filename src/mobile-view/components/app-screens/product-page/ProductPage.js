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

    return(
        <div style={{paddingTop: '3.5em', paddingBottom: '2em'}}>

            <Alert banner type={'info'}
                message={
                    <Marquee pauseOnHover gradient={false}>
                        Get Flat ₹500 Off On Your First Order
                    </Marquee>
                }
            />

            <ProductImages designDetails={designDetails}/>
            <NameAndPrice productDetails={productDetails} designNumber={designNumber} catalogCode={catalogCode}/><CustomDivider />
            {
                (designCount > 1) &&
                <div>
                    <MoreDesigns productDetails={productDetails} catalogCode={catalogCode} closeDrawer={() => {}}/><CustomDivider />
                </div>
            }
            <BuyingOptions productId={id}/><CustomDivider />
            <DeliveryAndReturns productDetails={productDetails}/><CustomDivider />
            <FabricDetails productDetails={productDetails}/><CustomDivider />
            <LazyLoad height={200} once >
                <CustomersAlsoLiked catalogCode={catalogCode}/>
            </LazyLoad>
        </div>
    );
};

export default ProductPage;