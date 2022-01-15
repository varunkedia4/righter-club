import React, {useEffect} from 'react'
import ReactGA from "react-ga4";
import {commonConstants} from "../../../constants/Common";
import {Row, Typography} from "antd";
import {useParams} from "react-router-dom";
import {getDesignDetailsFromDesignNumberAndProductDetails, getProductDetailsFromProductListAndCode, getProductListFromCatalogCode} from "../../../util/CommonUtils";
import ProductDetails from "./ProductDetails";
import StitchToFit from "./StitchToFit";
import StandardSize from "./StandardSize";
import CustomDivider from "../../common/CustomDivider";

const ProceedToBuyPage = () => {

    useEffect(() => { document.title = commonConstants.PROCEED_TO_BUY }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Title } = Typography;

    const { id } = useParams();
    const catalogCode = id.split('.')[0];
    const productCode = id.split('.')[1];
    const designNumber = id.split('.')[2];
    const stitchOption = id.split('.')[3];

    const productDetails = getProductDetailsFromProductListAndCode(getProductListFromCatalogCode(catalogCode), productCode);
    const designDetails = getDesignDetailsFromDesignNumberAndProductDetails(designNumber, productDetails);

    return (
        <div style={{paddingTop: '3.5em'}}>
            <div id='PageTitle' style={{backgroundColor: "#E8E8E8", paddingLeft: "1.5em", paddingTop: '1em', marginBottom: '1em'}}>
                <Row><Title level={4}>{commonConstants.PROCEED_TO_BUY}</Title></Row>
            </div>

            <ProductDetails
                productDetails={productDetails}
                catalogCode={catalogCode}
                productCode={productCode}
                designNumber={designNumber}
                designDetails={designDetails}
            />
            <CustomDivider />

            {
                (stitchOption === "1") &&
                    <StitchToFit
                        catalogCode={catalogCode}
                        productCode={productCode}
                        designNumber={designNumber}
                    />
            }

            {
                (stitchOption === "2") &&
                    <StandardSize
                        catalogCode={catalogCode}
                        productCode={productCode}
                        designNumber={designNumber}
                    />
            }
        </div>
    );
};

export default ProceedToBuyPage;