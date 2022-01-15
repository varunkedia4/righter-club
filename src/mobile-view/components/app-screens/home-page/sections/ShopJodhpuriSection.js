import React from 'react'
import {Button, Image} from "antd";
import { ArrowRightOutlined } from '@ant-design/icons';
import {homePageImages} from "../../../../constants/ImageLinks";
import {navigationLinks} from "../../../../constants/NavigationLinks";
import ProductCard from "../cards/ProductCard";
import {catalogCode, commonConstants} from "../../../../constants/Common";
import {useNavigate} from "react-router-dom";
import {jodhpuriProductDetails} from "../../../../constants/product-details/JodhpuriProductDetails";
import {shuffleList} from "../../../../util/CommonUtils";

const ShopJodhpuriSection = () => {

    const navigate = useNavigate();
    const handleNavigation = (navigationLink) => {
        navigate(navigationLink);
    }

    const productDetails = shuffleList(jodhpuriProductDetails);

    return(
        <div id='CustomFitJodhpuriSection' style={{paddingTop: '2em', paddingBottom: '1em'}}>
            <Image preview={false} src={homePageImages.SHOP_JODHPURI_BANNER} onClick={() => handleNavigation(navigationLinks.JODHPURI)}/>
            <div style={{overflow: "auto", whiteSpace: "nowrap", paddingLeft: '1em', paddingTop: '2em', display: "flex", alignItems: "center" }}>
                <ProductCard productDetails={productDetails[0]} productCatalogCode={catalogCode.JODHPURI}/>
                <ProductCard productDetails={productDetails[1]} productCatalogCode={catalogCode.JODHPURI}/>
                <ProductCard productDetails={productDetails[2]} productCatalogCode={catalogCode.JODHPURI}/>
                <ProductCard productDetails={productDetails[3]} productCatalogCode={catalogCode.JODHPURI}/>

                <Button size={'large'} style={{marginRight: '1em'}} shape="round" onClick={() => handleNavigation(navigationLinks.JODHPURI)}>
                    {commonConstants.VIEW_ALL} <ArrowRightOutlined />
                </Button>
            </div>
        </div>
    );
};

export default ShopJodhpuriSection;