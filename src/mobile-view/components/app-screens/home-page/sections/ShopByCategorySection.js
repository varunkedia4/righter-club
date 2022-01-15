import React from 'react'
import {Typography} from "antd";
import {homePageImages} from "../../../../constants/ImageLinks";
import {navigationLinks} from "../../../../constants/NavigationLinks";
import CatalogCard from "../cards/CatalogCard";
import {catalogName} from "../../../../constants/Common";

const ShopByCategorySection = () => {

    const { Title } = Typography;

    return(
        <div id='ShopByCategorySection' style={{paddingTop: '2em'}}>
            <Title level={4} style={{textAlign: 'center', paddingBottom: "0.5em"}}> Shop by Category </Title>

            <div style={{overflow: "auto", whiteSpace: "nowrap", paddingLeft: '1em', paddingTop: '0.5em'}}>
                <CatalogCard
                    cardName={catalogName.KURTA}
                    navigationLink={navigationLinks.KURTA}
                    imageLink={homePageImages.SHOP_BY_CATEGORY.KURTA}
                />
                <CatalogCard
                    cardName={catalogName.SHERWANI}
                    navigationLink={navigationLinks.SHERWANI}
                    imageLink={homePageImages.SHOP_BY_CATEGORY.SHERWANI}
                />
                <CatalogCard
                    cardName={catalogName.NEHRU_JACKET}
                    navigationLink={navigationLinks.NEHRU_JACKET}
                    imageLink={homePageImages.SHOP_BY_CATEGORY.NEHRU_JACKET}
                />
                <CatalogCard
                    cardName={catalogName.JODHPURI}
                    navigationLink={navigationLinks.JODHPURI}
                    imageLink={homePageImages.SHOP_BY_CATEGORY.JODHPURI}
                />
                <CatalogCard
                    cardName={catalogName.SUIT}
                    navigationLink={navigationLinks.SUIT}
                    imageLink={homePageImages.SHOP_BY_CATEGORY.SUIT}
                />
                <CatalogCard
                    cardName={catalogName.SUIT_WITH_VEST}
                    navigationLink={navigationLinks.SUIT_WITH_VEST}
                    imageLink={homePageImages.SHOP_BY_CATEGORY.SUIT_WITH_VEST}
                />
            </div>
        </div>
    );
};

export default ShopByCategorySection;