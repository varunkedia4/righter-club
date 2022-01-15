import React from 'react'
import {Button, Image} from "antd";
import {homePageImages} from "../../../../constants/ImageLinks";
import {navigationLinks} from "../../../../constants/NavigationLinks";
import ProductCard from "../cards/ProductCard";
import {catalogCode, commonConstants} from "../../../../constants/Common";
import {useNavigate} from "react-router-dom";
import { ArrowRightOutlined } from '@ant-design/icons';
import {sherwaniProductDetails} from "../../../../constants/product-details/SherwaniProductDetails";
import {shuffleList} from "../../../../util/CommonUtils";

const ShopSherwaniSection = () => {

    const navigate = useNavigate();
    const handleNavigation = (navigationLink) => {
        navigate(navigationLink);
    }

    const productDetails = shuffleList(sherwaniProductDetails);

    return(
        <div id='CustomFitSherwaniSection' style={{paddingTop: '2em'}}>
            <Image preview={false} src={homePageImages.SHOP_SHERWANI_BANNER} onClick={() => handleNavigation(navigationLinks.SHERWANI)}/>
            <div style={{overflow: "auto", whiteSpace: "nowrap", paddingLeft: '1em', paddingTop: '2em', display: "flex", alignItems: "center" }}>
                <ProductCard productDetails={productDetails[0]} productCatalogCode={catalogCode.SHERWANI}/>
                <ProductCard productDetails={productDetails[1]} productCatalogCode={catalogCode.SHERWANI}/>
                <ProductCard productDetails={productDetails[2]} productCatalogCode={catalogCode.SHERWANI}/>
                <ProductCard productDetails={productDetails[3]} productCatalogCode={catalogCode.SHERWANI}/>

                <Button size={'large'} style={{marginRight: '1em'}} shape="round" onClick={() => handleNavigation(navigationLinks.SHERWANI)}>
                    {commonConstants.VIEW_ALL} <ArrowRightOutlined />
                </Button>
            </div>
        </div>
    );
};

export default ShopSherwaniSection;