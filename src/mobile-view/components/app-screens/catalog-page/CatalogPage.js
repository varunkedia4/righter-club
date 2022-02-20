import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ReactGA from "react-ga4";
import { getCatalogPageTitleFromCatalogCode, getFilteredProductList, getProductListFromCatalogCode } from "../../../util/CommonUtils";
import {Layout, Button, Row, Col, Drawer, Spin} from 'antd';
import {Dropdown} from 'semantic-ui-react'
import { BarsOutlined, FilterOutlined } from '@ant-design/icons';
import CatalogDrawer from "./CatalogDrawer";
import ProductCatalog from "./ProductCatalog";
import { fabricColorFilters, fabricPatternFilters, fabricTypeFilters, priceRangeFilters } from "../../../constants/Filters";
import Text from "antd/es/typography/Text";
import {getLoadingMessage} from "../../../constants/LoadingMessages";

const CatalogPage = (props) => {

    const { id } = useParams();
    const catalogCode = id;

    const [isDataLoading, setDataLoading] = useState(true);

    useEffect(() => {
        document.title = getCatalogPageTitleFromCatalogCode(catalogCode);
        setDataLoading(true);
        setTimeout(() => {setDataLoading(false)}, 500);
    }, [catalogCode]);

    ReactGA.send({ hitType: "pageview"});

    const { Header } = Layout;

    const [isCatalogDrawerOpen, setCatalogDrawerOpen] = useState(false);
    const [isFiltersDrawerOpen, setFiltersDrawerOpen] = useState(false);

    const [colorFilter, setColorFilter] = useState(fabricColorFilters.ALL);
    const [priceRangeFilter, setPriceRangeFilter] = useState(priceRangeFilters.ALL);
    const [fabricTypeFilter, setFabricTypeFilter] = useState(fabricTypeFilters.ALL);
    const [fabricPatternFilter, setFabricPatternFilter] = useState(fabricPatternFilters.ALL);

    const [colorFilterTemp, setColorFilterTemp] = useState(fabricColorFilters.ALL);
    const [priceRangeFilterTemp, setPriceRangeFilterTemp] = useState(priceRangeFilters.ALL);
    const [fabricTypeFilterTemp, setFabricTypeFilterTemp] = useState(fabricTypeFilters.ALL);
    const [fabricPatternFilterTemp, setFabricPatternFilterTemp] = useState(fabricPatternFilters.ALL);

    const handleFiltersApplied = () => {
        setColorFilter(colorFilterTemp); setPriceRangeFilter(priceRangeFilterTemp);
        setFabricTypeFilter(fabricTypeFilterTemp); setFabricPatternFilter(fabricPatternFilterTemp);
        setFiltersDrawerOpen(false);
    }

    const handleFiltersReset = () => {
        setColorFilter(fabricColorFilters.ALL); setPriceRangeFilter(priceRangeFilters.ALL);
        setFabricTypeFilter(fabricTypeFilters.ALL); setFabricPatternFilter(fabricPatternFilters.ALL);
        setColorFilterTemp(fabricColorFilters.ALL); setPriceRangeFilterTemp(priceRangeFilters.ALL);
        setFabricTypeFilterTemp(fabricTypeFilters.ALL); setFabricPatternFilterTemp(fabricPatternFilters.ALL);
        setFiltersDrawerOpen(false);
    }

    const filteredProductList = getFilteredProductList(getProductListFromCatalogCode(catalogCode), colorFilter, priceRangeFilter, fabricTypeFilter, fabricPatternFilter);

    const getButtonName = () => {
        if(props.catalogContent === "Category") return "Categories";
        else return "Occasions";
    }

    return (
        <div style={{paddingTop: '3.5em', paddingBottom: '2em'}}>

            {
                isDataLoading &&
                <div style={{paddingTop: '20em', paddingBottom: '35em'}}>
                    <Row justify={'center'} align={'middle'}><Spin size="large" /></Row>
                    <Row style={{paddingTop: '1em'}} justify={'center'} align={'middle'}><Text italic>{getLoadingMessage()}</Text></Row>
                </div>
            }

            {
                !isDataLoading &&
                <div>
                    <div id='FiltersSection'>
                        <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: "0em", margin: '0em', backgroundColor: '#FFFFFF'}}>
                            <div style={{backgroundColor: '#eff5fa', paddingTop: '0.1em', paddingBottom: '0.1em'}}>
                            </div>
                            <Row>
                                <Col span={9} offset={3}>
                                    <Button icon={<BarsOutlined />} onClick={() => setCatalogDrawerOpen(true)}> {getButtonName()} </Button>
                                    <CatalogDrawer drawerContents={props.catalogContent} isOpen={isCatalogDrawerOpen} setClose={() => setCatalogDrawerOpen(false)}/>
                                </Col>

                                <Col span={9} offset={3}>
                                    <Button icon={<FilterOutlined />} onClick={() => setFiltersDrawerOpen(true)}> Filters </Button>
                                    <div id='FilterDrawer'>
                                        <Drawer title="Filters" placement={'bottom'} height={600} closable={true} onClose={() => setFiltersDrawerOpen(false)} visible={isFiltersDrawerOpen}>
                                            <div style={{paddingBottom: '2em'}}>
                                                <Row justify={'center'}>
                                                    <Dropdown scrolling text={'Color - ' + colorFilterTemp}  pointing='top right'>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.ALL)}>{fabricColorFilters.ALL}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.BLUE)}>{fabricColorFilters.BLUE}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.BLACK)}>{fabricColorFilters.BLACK}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.NAVY_BLUE)}>{fabricColorFilters.NAVY_BLUE}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.BEIGE)}>{fabricColorFilters.BEIGE}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.MAROON)}>{fabricColorFilters.MAROON}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.GREEN)}>{fabricColorFilters.GREEN}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.GREY)}>{fabricColorFilters.GREY}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.BROWN)}>{fabricColorFilters.BROWN}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.YELLOW)}>{fabricColorFilters.YELLOW}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.PINK)}>{fabricColorFilters.PINK}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.RED)}>{fabricColorFilters.RED}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.ORANGE)}>{fabricColorFilters.ORANGE}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.CREAM)}>{fabricColorFilters.CREAM}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.WHITE)}>{fabricColorFilters.WHITE}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.MULTI)}>{fabricColorFilters.MULTI}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.PEACH)}>{fabricColorFilters.PEACH}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.GOLD)}>{fabricColorFilters.GOLD}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.MUSTARD)}>{fabricColorFilters.MUSTARD}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.OFF_WHITE)}>{fabricColorFilters.OFF_WHITE}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.PURPLE)}>{fabricColorFilters.PURPLE}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.TEAL)}>{fabricColorFilters.TEAL}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.CHARCOAL)}>{fabricColorFilters.CHARCOAL}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.TURQUOISE_BLUE)}>{fabricColorFilters.TURQUOISE_BLUE}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.RUST)}>{fabricColorFilters.RUST}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.OLIVE)}>{fabricColorFilters.OLIVE}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.SEA_GREEN)}>{fabricColorFilters.SEA_GREEN}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.SILVER)}>{fabricColorFilters.SILVER}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.KHAKI)}>{fabricColorFilters.KHAKI}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.COFFEE_BROWN)}>{fabricColorFilters.COFFEE_BROWN}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.CORAL)}>{fabricColorFilters.CORAL}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.LIME_GREEN)}>{fabricColorFilters.LIME_GREEN}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.BURGUNDY)}>{fabricColorFilters.BURGUNDY}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.MAGENTA)}>{fabricColorFilters.MAGENTA}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.COPPER)}>{fabricColorFilters.COPPER}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.TAUPE)}>{fabricColorFilters.TAUPE}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.GREY_MELANGE)}>{fabricColorFilters.GREY_MELANGE}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.LAVENDER)}>{fabricColorFilters.LAVENDER}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.TAN)}>{fabricColorFilters.TAN}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.NUDE)}>{fabricColorFilters.NUDE}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setColorFilterTemp(fabricColorFilters.MAUVE)}>{fabricColorFilters.MAUVE}</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </Row>
                                            </div>

                                            <div style={{paddingBottom: '2em'}}>
                                                <Row justify={'center'}>
                                                    <Dropdown scrolling text={'Price Range - ' + priceRangeFilterTemp}  pointing='top right'>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={() => setPriceRangeFilterTemp(priceRangeFilters.ALL)}>{priceRangeFilters.ALL}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setPriceRangeFilterTemp(priceRangeFilters.LESS_THAN_1500)}>{priceRangeFilters.LESS_THAN_1500}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setPriceRangeFilterTemp(priceRangeFilters.BETWEEN_1500_TO_2999)}>{priceRangeFilters.BETWEEN_1500_TO_2999}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setPriceRangeFilterTemp(priceRangeFilters.BETWEEN_3000_TO_4999)}>{priceRangeFilters.BETWEEN_3000_TO_4999}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setPriceRangeFilterTemp(priceRangeFilters.MORE_THAN_4999)}>{priceRangeFilters.MORE_THAN_4999}</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </Row>
                                            </div>

                                            <div style={{paddingBottom: '2em'}}>
                                                <Row justify={'center'}>
                                                    <Dropdown scrolling text={'Fabric Type - ' + fabricTypeFilterTemp}  pointing='top right'>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.ALL)}>{fabricTypeFilters.ALL}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.ACRYLIC)}>{fabricTypeFilters.ACRYLIC}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.COTTON_BLEND)}>{fabricTypeFilters.COTTON_BLEND}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.COTTON_LINEN)}>{fabricTypeFilters.COTTON_LINEN}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.JUTE_SILK)}>{fabricTypeFilters.JUTE_SILK}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.LINEN)}>{fabricTypeFilters.LINEN}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.POLYCOTTON)}>{fabricTypeFilters.POLYCOTTON}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.POLYESTER)}>{fabricTypeFilters.POLYESTER}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.POLYRAYON)}>{fabricTypeFilters.POLYRAYON}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.POLYVISCOSE)}>{fabricTypeFilters.POLYVISCOSE}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.PURE_COTTON)}>{fabricTypeFilters.PURE_COTTON}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.PURE_SILK)}>{fabricTypeFilters.PURE_SILK}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.PURE_WOOL)}>{fabricTypeFilters.PURE_WOOL}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.SILK_BLEND)}>{fabricTypeFilters.SILK_BLEND}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.SUEDE)}>{fabricTypeFilters.SUEDE}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.VISCOSE_RAYON)}>{fabricTypeFilters.VISCOSE_RAYON}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.WOOL_BLEND)}>{fabricTypeFilters.WOOL_BLEND}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.CREPE)}>{fabricTypeFilters.CREPE}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.POLY_CREPE)}>{fabricTypeFilters.POLY_CREPE}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.SATIN)}>{fabricTypeFilters.SATIN}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.GEORGETTE)}>{fabricTypeFilters.GEORGETTE}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricTypeFilterTemp(fabricTypeFilters.VISCOSE_SILK)}>{fabricTypeFilters.VISCOSE_SILK}</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </Row>
                                            </div>

                                            <div style={{paddingBottom: '2em'}}>
                                                <Row justify={'center'}>
                                                    <Dropdown scrolling text={'Fabric Pattern - ' + fabricPatternFilterTemp} pointing='top right'>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item onClick={() => setFabricPatternFilterTemp(fabricPatternFilters.ALL)}>{fabricPatternFilters.ALL}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricPatternFilterTemp(fabricPatternFilters.CHECKED)}>{fabricPatternFilters.CHECKED}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricPatternFilterTemp(fabricPatternFilters.EMBROIDERED)}>{fabricPatternFilters.EMBROIDERED}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricPatternFilterTemp(fabricPatternFilters.SOLID)}>{fabricPatternFilters.SOLID}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricPatternFilterTemp(fabricPatternFilters.STRIPED)}>{fabricPatternFilters.STRIPED}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricPatternFilterTemp(fabricPatternFilters.PRINTED)}>{fabricPatternFilters.PRINTED}</Dropdown.Item>
                                                            <Dropdown.Item onClick={() => setFabricPatternFilterTemp(fabricPatternFilters.WOVEN_DESIGN)}>{fabricPatternFilters.WOVEN_DESIGN}</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </Row>
                                            </div>

                                            <div style={{paddingTop: '3em'}}>
                                                <Row gutter={16}>
                                                    <Col span={9} offset={3}><Button type="primary" onClick={handleFiltersApplied}> Apply </Button></Col>
                                                    <Col span={11} offset={1}><Button onClick={handleFiltersReset}> Reset </Button></Col>
                                                </Row>
                                            </div>
                                        </Drawer>
                                    </div>
                                </Col>
                            </Row>
                        </Header>
                    </div>

                    <div id='Spacing'>
                        <br/><br/><br/>
                    </div>

                    <div id='ProductsSection'>
                        <ProductCatalog productCatalogCode={catalogCode} productList={filteredProductList}/>
                    </div>
                </div>
            }
        </div>
    );
};

export default CatalogPage;