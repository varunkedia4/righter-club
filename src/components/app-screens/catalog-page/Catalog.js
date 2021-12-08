import {useNavigate} from "react-router-dom";
import {Button, Card, Container, Header, Icon} from "semantic-ui-react";
import React from "react";
import {redirectionLinks} from "../../../constants/ApplicationConstants";
import {sendClickEvent} from "../../../util/CommonUtils";
import {useMediaQuery} from "react-responsive";

const Catalog = (props) => {

    const navigate = useNavigate();
    const itemList = props.filteredItemList;
    const cardElements = [];

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' });

    const getCardsPerRow = () => {
        if(isMobile) return 2;
        else return 4;
    }

    const handleCardClick = () => {
        sendClickEvent("catalog-"+props.tab+"-card", "Product Card", "item-"+props.tab);
    }

    const handleRequirementClick = (navigationLink) => {
        navigate(navigationLink);
        sendClickEvent("catalog-"+props.tab+"-button", "Tell Us Your Requirements Button", "contact-us");
    }

    for(let itemCount = 0; itemCount < itemList.length; itemCount++) {
        const redirectionLink = redirectionLinks.ITEM + props.tab + "." + itemList[itemCount].productCode;
        cardElements.push(
            <Card raised href={redirectionLink} onClick={() => handleCardClick(redirectionLink)}
                  image={itemList[itemCount].catalogLink[0]}
                  description={itemList[itemCount].name}
                  extra={ <p> <Icon name='rupee sign' /> {itemList[itemCount].price} </p> }
                  target="_blank"
            />
        )
    }

    if (itemList.length !== 0) return(
        <Card.Group itemsPerRow={getCardsPerRow()} textAlign={'left'}>{cardElements}</Card.Group>
    );
    else return (
        <Container textAlign={'center'} style={{minHeight: '16em'}}>
            <Header textAlign='center' style={{fontSize: '1.5em', padding: '3em 0em 2em 0em'}}>
                Uh, oh! We don't have any collection(s) as of now as per your requirements.
            </Header>
            <Button size={'huge'} secondary href={redirectionLinks.CONTACT_US} onClick={() => handleRequirementClick(redirectionLinks.CONTACT_US)}>
                Tell us your requirements
            </Button>
        </Container>
    );
};

export default Catalog;