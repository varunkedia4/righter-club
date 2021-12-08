import React, {useEffect, useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {Menu, Grid, Dropdown} from 'semantic-ui-react'
import {categoryCode, categoryName, redirectionLinks} from "../../../constants/ApplicationConstants";
import Catalog from "./Catalog";
import ReactGA from "react-ga4";
import {getCategoryLink, getCategoryName, sendClickEvent, getFilteredItemList} from "../../../util/CommonUtils";
import {useMediaQuery} from "react-responsive";

const CatalogPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [tab, setTab] = useState(id);
    const [activePriceFilter, setActivePriceFilter] = useState(0);

    useEffect(() => { document.title = getCategoryName(tab) }, [tab]);
    ReactGA.send({ hitType: "pageview"});

    const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    const handleTabChange = (tabName) => {
        navigate(getCategoryLink(tabName));
        setActivePriceFilter(0);
        setTab(tabName);
        sendClickEvent("catalog-"+tab+"-tab", "Catalog Tab", "catalog-"+tabName);
    }

    return (
        <div>
            {isDesktop &&
                <div style={{fontSize: '1em', padding: '5em 3em 3em 3em'}}>
                    <Grid celled='internally'>
                        <Grid.Row>
                            <Grid.Column width={3} verticalAlign={'middle'} textAlign={'center'}>
                                <p style={{fontSize: '1em'}}> Filters </p>
                            </Grid.Column>

                            <Grid.Column width={13}>
                                <Menu secondary>
                                    <Menu.Item active={(tab === 'kurta')}
                                               href={redirectionLinks.KURTA}
                                               onClick={() => handleTabChange(categoryCode.KURTA)}
                                    >
                                        {categoryName.KURTA}
                                    </Menu.Item>
                                    <Menu.Item active={(tab === 'sherwani')}
                                               href={redirectionLinks.SHERWANI}
                                               onClick={() => handleTabChange(categoryCode.SHERWANI)}
                                    >
                                        {categoryName.SHERWANI}
                                    </Menu.Item>
                                    <Menu.Item active={(tab === 'indoWestern')}
                                               href={redirectionLinks.INDO_WESTERN}
                                               onClick={() => handleTabChange(categoryCode.INDO_WESTERN)}
                                    >
                                        {categoryName.INDO_WESTERN}
                                    </Menu.Item>
                                    <Menu.Item active={(tab === 'nehruJackets')}
                                               href={redirectionLinks.NEHRU_JACKETS}
                                               onClick={() => handleTabChange(categoryCode.NEHRU_JACKETS)}
                                    >
                                        {categoryName.NEHRU_JACKETS}
                                    </Menu.Item>
                                </Menu>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={3}>
                                <Menu vertical fluid>
                                    <Menu.Item>
                                        <Menu.Header>Price</Menu.Header>
                                        <Menu.Menu>
                                            <Menu.Item active={activePriceFilter === 1}
                                                       onClick={() => setActivePriceFilter(1)}
                                            >
                                                Less than Rs. 1000
                                            </Menu.Item>
                                            <Menu.Item active={activePriceFilter === 2}
                                                       onClick={() => setActivePriceFilter(2)}
                                            >
                                                Rs. 1001 - Rs. 3000
                                            </Menu.Item>
                                            <Menu.Item active={activePriceFilter === 3}
                                                       onClick={() => setActivePriceFilter(3)}
                                            >
                                                Rs. 3001 - Rs. 5000
                                            </Menu.Item>
                                            <Menu.Item active={activePriceFilter === 4}
                                                       onClick={() => setActivePriceFilter(4)}
                                            >
                                                More than Rs. 5000
                                            </Menu.Item>
                                            <Menu.Item active={activePriceFilter === 0}
                                                       onClick={() => setActivePriceFilter(0)}
                                            >
                                                Show all price range
                                            </Menu.Item>
                                        </Menu.Menu>
                                    </Menu.Item>
                                </Menu>
                            </Grid.Column>

                            <Grid.Column width={13}>
                                <Catalog tab={tab} filteredItemList={getFilteredItemList(tab, activePriceFilter)}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            }

            {isMobile &&
                <div style={{minHeight:'37em'}}>
                    <Grid celled={'internally'}>
                        <Grid.Row>
                            <Grid.Column width={6}>
                                <Dropdown text='Price' icon='rupee' fluid labeled button className='icon'>
                                    <Dropdown.Menu>
                                        <Dropdown.Item text='Less than Rs. 1000' onClick={() => setActivePriceFilter(1)}/>
                                        <Dropdown.Item text='Rs. 1000 - Rs. 3000' onClick={() => setActivePriceFilter(2)}/>
                                        <Dropdown.Item text='Rs. 3001 - Rs. 5000' onClick={() => setActivePriceFilter(3)}/>
                                        <Dropdown.Item text='More than Rs. 5000' onClick={() => setActivePriceFilter(4)}/>
                                        <Dropdown.Item text='Show all price range' onClick={() => setActivePriceFilter(0)}/>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Grid.Column>

                            <Grid.Column width={10}>
                                <Dropdown icon='list' fluid floating labeled button className='icon' placeholder={getCategoryName(tab)}>
                                    <Dropdown.Menu>
                                        <Dropdown.Item
                                            text={categoryName.KURTA}
                                            href={redirectionLinks.KURTA}
                                            onClick={() => handleTabChange(categoryCode.KURTA)}
                                        />
                                        <Dropdown.Item
                                            text={categoryName.SHERWANI}
                                            href={redirectionLinks.SHERWANI}
                                            onClick={() => handleTabChange(categoryCode.SHERWANI)}
                                        />
                                        <Dropdown.Item
                                            text={categoryName.INDO_WESTERN}
                                            href={redirectionLinks.INDO_WESTERN}
                                            onClick={() => handleTabChange(categoryCode.INDO_WESTERN)}
                                        />
                                        <Dropdown.Item
                                            text={categoryName.NEHRU_JACKETS}
                                            href={redirectionLinks.NEHRU_JACKETS}
                                            onClick={() => handleTabChange(categoryCode.NEHRU_JACKETS)}
                                        />
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row style={{paddingTop:'1em'}}>
                            <Grid.Column width={16}>
                                <Catalog tab={tab} filteredItemList={getFilteredItemList(tab, activePriceFilter)}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            }
        </div>
    );
};

export default CatalogPage;