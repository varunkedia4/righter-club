import React, {useEffect} from 'react'
import {Grid, Breadcrumb, Header} from "semantic-ui-react";
import {useParams} from "react-router-dom";
import ItemCatalog from "./ItemCatalog";
import ItemDetails from "./ItemDetails";
import SimilarProductsCatalog from "./SimilarProductsCatalog";
import {getCategoryName, getItem, getItemList} from "../../../util/CommonUtils";
import ReactGA from "react-ga4";

const ItemPage = () => {

    useEffect(() => { document.title = "Get " + productCategoryName }, []);
    ReactGA.send({ hitType: "pageview"});

    const { id } = useParams();
    const categoryCode = id.split('.')[0];
    const productCode = id.split('.')[1];

    const item = getItem(getItemList(categoryCode), productCode);
    const productCategoryName = getCategoryName(categoryCode);

    const sections = [
        { key: 'Home', content: 'Home', active: true },
        { key: 'Category', content: productCategoryName, active: true },
        { key: 'Product Name', content: item.name, active: true },
    ]

    return(
        <div textAlign={'left'} style={{padding: '5em 2em 0em 2em'}}>
            <Breadcrumb icon='right angle' sections={sections} style={{padding: '0em 0em 1em 0em'}} />

            <Grid divided='vertically' stackable>
                <Grid.Row columns={2}>
                    <Grid.Column><ItemCatalog item={item} /></Grid.Column>
                    <Grid.Column style={{padding: '1em 5em 0em 5em'}}><ItemDetails tab={categoryCode} item={item} /></Grid.Column>
                </Grid.Row>
            </Grid>

            <Header as='h1' textAlign={'center'}> Similar Products </Header>
            <SimilarProductsCatalog tab={categoryCode} filteredItemList={getItemList(categoryCode)} />

        </div>
    );
};

export default ItemPage;