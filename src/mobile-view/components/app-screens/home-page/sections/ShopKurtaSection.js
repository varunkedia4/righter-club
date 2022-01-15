import React from 'react'
import {Button, Image} from "antd";
import {homePageImages} from "../../../../constants/ImageLinks";
import {navigationLinks} from "../../../../constants/NavigationLinks";
import ProductCard from "../cards/ProductCard";
import {catalogCode, commonConstants} from "../../../../constants/Common";
import {useNavigate} from "react-router-dom";
import { ArrowRightOutlined } from '@ant-design/icons';
import {kurtaProductDetails} from "../../../../constants/product-details/KurtaProductDetails";
import {shuffleList} from "../../../../util/CommonUtils";

const ShopKurtaSection = () => {

    const navigate = useNavigate();
    const handleNavigation = (navigationLink) => {
        navigate(navigationLink);
    }

    const productDetails = shuffleList(kurtaProductDetails);

    return(
        <div id='CustomFitKurtaSection' style={{paddingTop: '1em'}}>
            <Image preview={false} src={homePageImages.SHOP_KURTA_BANNER} onClick={() => handleNavigation(navigationLinks.KURTA)}/>
            <div style={{overflow: "auto", whiteSpace: "nowrap", paddingLeft: '1em', paddingTop: '2em', display: "flex", alignItems: "center" }}>
                <ProductCard productDetails={productDetails[0]} productCatalogCode={catalogCode.KURTA}/>
                <ProductCard productDetails={productDetails[1]} productCatalogCode={catalogCode.KURTA}/>
                <ProductCard productDetails={productDetails[2]} productCatalogCode={catalogCode.KURTA}/>
                <ProductCard productDetails={productDetails[3]} productCatalogCode={catalogCode.KURTA}/>

                <Button size={'large'} style={{marginRight: '1em'}} shape="round" onClick={() => handleNavigation(navigationLinks.KURTA)}>
                    {commonConstants.VIEW_ALL} <ArrowRightOutlined />
                </Button>
            </div>
        </div>
    );
};

export default ShopKurtaSection;