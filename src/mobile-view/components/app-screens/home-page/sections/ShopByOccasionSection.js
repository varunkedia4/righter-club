import React from 'react'
import {Row, Col, Typography} from "antd";
import {homePageImages} from "../../../../constants/ImageLinks";
import {navigationLinks} from "../../../../constants/NavigationLinks";
import CatalogCard from "../cards/CatalogCard";
import {catalogName} from "../../../../constants/Common";

const ShopByOccasionSection = () => {

    const { Title } = Typography;

    return(
        <div id='ShopByOccasionSection' style={{paddingLeft: '1em', paddingTop: '1.5em', paddingBottom: '1.5em'}}>
            <Title level={4} style={{textAlign: 'center', paddingBottom: "0.5em"}}> Shop by Occasion </Title>

            <div>
                <Row justify="space-around" align="middle">
                    <Col span={12}>
                        <CatalogCard
                            cardName={catalogName.FESTIVES}
                            navigationLink={navigationLinks.FESTIVES}
                            imageLink={homePageImages.SHOP_BY_OCCASION.FESTIVES}
                        />
                    </Col>
                    <Col span={12}>
                        <CatalogCard
                            cardName={catalogName.REGULAR}
                            navigationLink={navigationLinks.REGULAR}
                            imageLink={homePageImages.SHOP_BY_OCCASION.REGULAR}
                        />
                    </Col>
                </Row>

                <Row justify="space-around" align="middle" style={{paddingTop: '1.5em'}}>
                    <Col span={12}>
                        <CatalogCard
                            cardName={catalogName.HALDI}
                            navigationLink={navigationLinks.HALDI}
                            imageLink={homePageImages.SHOP_BY_OCCASION.HALDI}
                        />
                    </Col>
                    <Col span={12}>
                        <CatalogCard
                            cardName={catalogName.MEHENDI}
                            navigationLink={navigationLinks.MEHENDI}
                            imageLink={homePageImages.SHOP_BY_OCCASION.MEHENDI}
                        />
                    </Col>
                </Row>

                <Row justify="space-around" align="middle" style={{paddingTop: '1.5em'}}>
                    <Col span={12}>
                        <CatalogCard
                            cardName={catalogName.ENGAGEMENT}
                            navigationLink={navigationLinks.ENGAGEMENT}
                            imageLink={homePageImages.SHOP_BY_OCCASION.ENGAGEMENT}
                        />
                    </Col>
                    <Col span={12}>
                        <CatalogCard
                            cardName={catalogName.WEDDING}
                            navigationLink={navigationLinks.WEDDING}
                            imageLink={homePageImages.SHOP_BY_OCCASION.WEDDING}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default ShopByOccasionSection;