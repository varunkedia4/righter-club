import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Card, Grid, Image, Button, Segment, Icon, Header} from "semantic-ui-react";
import {categoryCode, categoryName, homePageImageLinks, redirectionLinks} from "../../constants/ApplicationConstants";
import {sendClickEvent} from "../../util/CommonUtils";
import {useMediaQuery} from "react-responsive";

const Category = (props) => {

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate(props.navigationLink);
        sendClickEvent("home", "Categories Card", "catalog-"+props.categoryCode);
    }

    return(
        <Grid.Column>
            <Segment textAlign='center' vertical>
                <Card centered link href={props.navigationLink} onClick={() => handleNavigation()}>
                    <Image src={props.image} />
                    <Card.Content><Card.Header extra textAlign='center'>{props.name}</Card.Header></Card.Content>
                </Card>

                <Button animated secondary href={props.navigationLink} onClick={() => handleNavigation()}>
                    <Button.Content visible>Shop now</Button.Content>
                    <Button.Content hidden><Icon name='shopping cart' /></Button.Content>
                </Button>
            </Segment>
        </Grid.Column>
    );
};

const AllCategories = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    const getCardsPerRow = () => {
        if(isMobile) return 2;
        else return 4;
    }

    return(
        <div className="AllCategories">
            <Header as='h1' style={{fontSize: '3em', padding: '1.5em 0em 0.5em 0em'}}>Our Collections</Header>
            <Grid columns={getCardsPerRow()} centered>
                <Grid.Row>
                    <Category
                        categoryCode={categoryCode.KURTA}
                        image={homePageImageLinks.KURTA}
                        name={"Kurta"}
                        navigationLink={redirectionLinks.KURTA}
                    />

                    <Category
                        categoryCode={categoryCode.SHERWANI}
                        image={homePageImageLinks.SHERWANI}
                        name={categoryName.SHERWANI}
                        navigationLink={redirectionLinks.SHERWANI}
                    />

                    <Category
                        categoryCode={categoryCode.INDO_WESTERN}
                        image={homePageImageLinks.INDO_WESTERN}
                        name={categoryName.INDO_WESTERN}
                        navigationLink={redirectionLinks.INDO_WESTERN}
                    />

                    <Category
                        categoryCode={categoryCode.NEHRU_JACKETS}
                        image={homePageImageLinks.NEHRU_JACKETS}
                        name={categoryName.NEHRU_JACKETS}
                        navigationLink={redirectionLinks.NEHRU_JACKETS}
                    />
                </Grid.Row>
            </Grid>
        </div>
    );
};

export default AllCategories;