import React, {useEffect} from 'react'
import {commonConstants} from "../../../constants/Common";
import ReactGA from "react-ga4";
import {Row, Typography} from "antd";
import {useParams} from "react-router-dom";
import {
    getDesignDetailsFromDesignNumberAndProductDetails,
    getProductDetailsFromProductListAndCode,
    getProductListFromCatalogCode
} from "../../../util/CommonUtils";
import ProductDetails from "../order-confirmation-page/ProductDetails";
import CustomDivider from "../../common/CustomDivider";
import OrderDetails from "./OrderDetails";
import PaymentDetails from "./PaymentDetails";

const OrderConfirmationPage = () => {

    useEffect(() => { document.title = commonConstants.ORDER_CONFIRMATION }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Title } = Typography;

    const { id } = useParams();
    const catalogCode = id.split('.')[0];
    const productCode = id.split('.')[1];
    const designNumber = id.split('.')[2];
    const stitchOption = id.split('.')[3]; // 1 is for Stitch to fit. 2 is for Standard size
    const customerDetails = id.split('.')[4];
    const customerResponse = id.split('.')[5];
    const customerName = customerDetails.split('|')[0].trim();
    const customerNumber = customerDetails.split('|')[1].trim();
    const customerPreferredSizeOrDate = customerResponse.split('|')[0].trim();
    const productId = productCode + '00' + designNumber;

    const productDetails = getProductDetailsFromProductListAndCode(getProductListFromCatalogCode(catalogCode), productCode);
    const designDetails = getDesignDetailsFromDesignNumberAndProductDetails(designNumber, productDetails);

    return(
        <div style={{paddingTop: '3.5em'}}>
            <div id='PageTitle' style={{backgroundColor: "#E8E8E8", paddingLeft: "1.5em", paddingTop: '1em', marginBottom: '1em'}}>
                <Row><Title level={4}>{commonConstants.ORDER_CONFIRMATION}</Title></Row>
            </div>

            <OrderDetails
                stitchOption={stitchOption}
                customerName={customerName}
                customerNumber={customerNumber}
                customerPreferredSizeOrDate={customerPreferredSizeOrDate}
            />
            <CustomDivider />

            <ProductDetails
                productDetails={productDetails}
                catalogCode={catalogCode}
                productCode={productCode}
                designNumber={designNumber}
                designDetails={designDetails}
            />
            <CustomDivider />

            <PaymentDetails
                stitchOption={stitchOption}
                customerDetails={customerDetails}
                customerResponse={customerResponse}
                productId={productId}
            />
        </div>
    );
};
export default OrderConfirmationPage;