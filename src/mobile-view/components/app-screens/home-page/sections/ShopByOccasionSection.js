import React from 'react'
import {Typography} from "antd";
import {homePageImages} from "../../../../constants/ImageLinks";
import {navigationLinks} from "../../../../constants/NavigationLinks";
import CatalogCard from "../cards/CatalogCard";
import {catalogName} from "../../../../constants/Common";

const ShopByOccasionSection = () => {

    const { Title } = Typography;

    return(
        <div id='ShopByOccasionSection' style={{paddingTop: '2em'}}>
            <Title level={4} style={{textAlign: 'center', paddingBottom: "0.5em"}}> Shop by Occasion </Title>

            <div style={{overflow: "auto", whiteSpace: "nowrap", paddingLeft: '1em', paddingTop: '0.5em'}}>
                <CatalogCard
                    cardName={catalogName.MEHENDI}
                    navigationLink={navigationLinks.MEHENDI}
                    imageLink={homePageImages.SHOP_BY_OCCASION.MEHENDI}
                />
                <CatalogCard
                    cardName={catalogName.HALDI}
                    navigationLink={navigationLinks.HALDI}
                    imageLink={homePageImages.SHOP_BY_OCCASION.HALDI}
                />
                <CatalogCard
                    cardName={catalogName.ENGAGEMENT}
                    navigationLink={navigationLinks.ENGAGEMENT}
                    imageLink={homePageImages.SHOP_BY_OCCASION.ENGAGEMENT}
                />
                <CatalogCard
                    cardName={catalogName.WEDDING}
                    navigationLink={navigationLinks.WEDDING}
                    imageLink={homePageImages.SHOP_BY_OCCASION.WEDDING}
                />
                <CatalogCard
                    cardName={catalogName.HOLI}
                    navigationLink={navigationLinks.HOLI}
                    imageLink={homePageImages.SHOP_BY_OCCASION.HOLI}
                />
                <CatalogCard
                    cardName={catalogName.DIWALI}
                    navigationLink={navigationLinks.DIWALI}
                    imageLink={homePageImages.SHOP_BY_OCCASION.DIWALI}
                />
            </div>
        </div>
    );
};

export default ShopByOccasionSection;