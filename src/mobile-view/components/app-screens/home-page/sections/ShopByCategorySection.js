import React from 'react'
import {Col, Row, Typography} from "antd";
import {homePageImages} from "../../../../constants/ImageLinks";
import {navigationLinks} from "../../../../constants/NavigationLinks";
import CatalogCard from "../cards/CatalogCard";
import {catalogName} from "../../../../constants/Common";

const ShopByCategorySection = () => {

    const { Title } = Typography;

    return(
        <div id='ShopByCategorySection' style={{paddingLeft: '1em', paddingTop: '1.5em', paddingBottom: '1.5em'}}>
            <Title level={4} style={{textAlign: 'center', paddingBottom: "0.5em"}}> Shop by Category </Title>

            <div>
                <div>
                    <Row justify="space-around" align="middle">
                        <Col span={12}>
                            <CatalogCard
                                cardName={catalogName.TWO_PIECE_SUIT}
                                navigationLink={navigationLinks.TWO_PIECE_SUIT}
                                imageLink={homePageImages.SHOP_BY_CATEGORY.TWO_PIECE_SUIT}
                            />
                        </Col>
                        <Col span={12}>
                            <CatalogCard
                                cardName={catalogName.THREE_PIECE_SUIT}
                                navigationLink={navigationLinks.THREE_PIECE_SUIT}
                                imageLink={homePageImages.SHOP_BY_CATEGORY.THREE_PIECE_SUIT}
                            />
                        </Col>
                    </Row>

                    <Row justify="space-around" align="middle" style={{paddingTop: '1.5em'}}>
                        <Col span={12}>
                            <CatalogCard
                                cardName={catalogName.CASUAL_BLAZER}
                                navigationLink={navigationLinks.CASUAL_BLAZER}
                                imageLink={homePageImages.SHOP_BY_CATEGORY.CASUAL_BLAZER}
                            />
                        </Col>
                        <Col span={12}>
                            <CatalogCard
                                cardName={catalogName.TUXEDO}
                                navigationLink={navigationLinks.TUXEDO}
                                imageLink={homePageImages.SHOP_BY_CATEGORY.TUXEDO}
                            />
                        </Col>
                    </Row>

                    <Row justify="space-around" align="middle" style={{paddingTop: '1.5em'}}>
                        <Col span={12}>
                            <CatalogCard
                                cardName={catalogName.SHERWANI}
                                navigationLink={navigationLinks.SHERWANI}
                                imageLink={homePageImages.SHOP_BY_CATEGORY.SHERWANI}
                            />
                        </Col>
                        <Col span={12}>
                            <CatalogCard
                                cardName={catalogName.JODHPURI}
                                navigationLink={navigationLinks.JODHPURI}
                                imageLink={homePageImages.SHOP_BY_CATEGORY.JODHPURI}
                            />
                        </Col>
                    </Row>

                    <Row justify="space-around" align="middle" style={{paddingTop: '1.5em'}}>
                        <Col span={12}>
                            <CatalogCard
                                cardName={catalogName.NEHRU_JACKET}
                                navigationLink={navigationLinks.NEHRU_JACKET}
                                imageLink={homePageImages.SHOP_BY_CATEGORY.NEHRU_JACKET}
                            />
                        </Col>
                        <Col span={12}>
                            <CatalogCard
                                cardName={catalogName.KURTA}
                                navigationLink={navigationLinks.KURTA}
                                imageLink={homePageImages.SHOP_BY_CATEGORY.KURTA}
                            />
                        </Col>
                    </Row>

                    <Row justify="space-around" align="middle" style={{paddingTop: '1.5em'}}>
                        <Col span={12}>
                            <CatalogCard
                                cardName={catalogName.TROUSER}
                                navigationLink={navigationLinks.TROUSER}
                                imageLink={homePageImages.SHOP_BY_CATEGORY.TROUSER}
                            />
                        </Col>
                        <Col span={12}>
                            <CatalogCard
                                cardName={catalogName.SHIRT}
                                navigationLink={navigationLinks.SHIRT}
                                imageLink={homePageImages.SHOP_BY_CATEGORY.SHIRT}
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default ShopByCategorySection;