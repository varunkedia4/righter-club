import React  from 'react'
import {Grid, Image} from "semantic-ui-react";

const ItemCatalog = (props) => {

    return(
        <Grid celled>
            <Grid.Row columns={2}>
                <Grid.Column><Image src={props.item.catalogLink[0]}/></Grid.Column>
                <Grid.Column><Image src={props.item.catalogLink[1]} /></Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
                <Grid.Column><Image src={props.item.catalogLink[2]} /></Grid.Column>
                <Grid.Column><Image src={props.item.catalogLink[3]} /></Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default ItemCatalog;