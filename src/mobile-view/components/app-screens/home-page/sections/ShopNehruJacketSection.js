import React from 'react'
import {Button, Image} from "antd";
import {homePageImages} from "../../../../constants/ImageLinks";
import {navigationLinks} from "../../../../constants/NavigationLinks";
import ProductCard from "../cards/ProductCard";
import {catalogCode, commonConstants} from "../../../../constants/Common";
import {useNavigate} from "react-router-dom";
import { ArrowRightOutlined } from '@ant-design/icons';
import {nehruJacketProductDetails} from "../../../../constants/product-details/NehruJacketProductDetails";
import {shuffleList} from "../../../../util/CommonUtils";

const ShopNehruJacketSection = () => {

    const navigate = useNavigate();
    const handleNavigation = (navigationLink) => {
        navigate(navigationLink);
    }

    const productDetails = shuffleList(nehruJacketProductDetails);

    return(
        <div id='CustomFitNehruJacketSection' style={{paddingTop: '2em'}}>
            <Image preview={false} src={homePageImages.SHOP_NEHRU_JACKET_BANNER} onClick={() => handleNavigation(navigationLinks.NEHRU_JACKET)}/>
            <div style={{overflow: "auto", whiteSpace: "nowrap", paddingLeft: '1em', paddingTop: '2em', display: "flex", alignItems: "center" }}>
                <ProductCard productDetails={productDetails[0]} productCatalogCode={catalogCode.NEHRU_JACKET}/>
                <ProductCard productDetails={productDetails[1]} productCatalogCode={catalogCode.NEHRU_JACKET}/>
                <ProductCard productDetails={productDetails[2]} productCatalogCode={catalogCode.NEHRU_JACKET}/>
                <ProductCard productDetails={productDetails[3]} productCatalogCode={catalogCode.NEHRU_JACKET}/>

                <Button size={'large'} style={{marginRight: '1em'}} shape="round" onClick={() => handleNavigation(navigationLinks.NEHRU_JACKET)}>
                    {commonConstants.VIEW_ALL} <ArrowRightOutlined />
                </Button>
            </div>
        </div>
    );
};

export default ShopNehruJacketSection;