import React from 'react'
import ProductCard from "../cards/ProductCard";
import {Typography} from "antd";
import {catalogCode} from "../../../../constants/Common";
import {sherwaniProductDetails} from "../../../../constants/product-details/SherwaniProductDetails";
import {kurtaProductDetails} from "../../../../constants/product-details/KurtaProductDetails";
import {nehruJacketProductDetails} from "../../../../constants/product-details/NehruJacketProductDetails";
import {suitWithVestProductDetails} from "../../../../constants/product-details/SuitWithVestProductDetails";
import {jodhpuriProductDetails} from "../../../../constants/product-details/JodhpuriProductDetails";

const NewArrivalsSection = () => {

    const { Title } = Typography;

    return(
        <div id='NewArrivalsSection'>
            <Title level={4} style={{textAlign: 'center', paddingBottom: "0.5em"}}> New Arrivals </Title>

            <div style={{overflow: "auto", whiteSpace: "nowrap", paddingLeft: '1em', paddingTop: '0.5em'}}>
                <ProductCard productDetails={kurtaProductDetails[10]} productCatalogCode={catalogCode.KURTA}/>
                <ProductCard productDetails={sherwaniProductDetails[10]} productCatalogCode={catalogCode.SHERWANI}/>
                <ProductCard productDetails={kurtaProductDetails[12]} productCatalogCode={catalogCode.KURTA}/>
                <ProductCard productDetails={nehruJacketProductDetails[10]} productCatalogCode={catalogCode.NEHRU_JACKET}/>
                <ProductCard productDetails={kurtaProductDetails[14]} productCatalogCode={catalogCode.KURTA}/>
                <ProductCard productDetails={suitWithVestProductDetails[1]} productCatalogCode={catalogCode.SUIT_WITH_VEST}/>
                <ProductCard productDetails={kurtaProductDetails[16]} productCatalogCode={catalogCode.KURTA}/>
                <ProductCard productDetails={jodhpuriProductDetails[10]} productCatalogCode={catalogCode.JODHPURI}/>
            </div>
        </div>
    );
};

export default NewArrivalsSection;