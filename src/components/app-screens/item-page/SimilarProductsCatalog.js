import {Card, Icon} from "semantic-ui-react";
import React from "react";
import {sendClickEvent} from "../../../util/CommonUtils";
import {useMediaQuery} from "react-responsive";
import {redirectionLinks} from "../../../constants/ApplicationConstants";

const SimilarProductsCatalog = (props) => {

    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const itemList = props.filteredItemList;
    const cardElements = [];

    const getCardsPerRow = () => {
        if(isMobile) return 2;
        else return 5;
    }

    const handleCardClick = (categoryCode) => {
        sendClickEvent("item-"+categoryCode+"-card", "Product Card", "item-"+categoryCode);
    }

    for(let itemCount = 0; itemCount < itemList.length && itemCount<6; itemCount++) {
        const redirectionLink = redirectionLinks.ITEM + props.tab + "." + itemList[itemCount].productCode;
        cardElements.push(
            <Card raised href={redirectionLink} onClick={() => handleCardClick(props.tab, redirectionLink)}
                  image={itemList[itemCount].catalogLink[0]}
                  header={itemList[itemCount].name}
                  extra={ <p> <Icon name='rupee sign' /> {itemList[itemCount].price} </p> }
                  target="_blank"
            />
        )
    }

    return(
        <Card.Group itemsPerRow={getCardsPerRow()} textAlign={'left'} style={{padding: '2em 0em 8em 0em'}}>
            {cardElements}
        </Card.Group>
    );
};

export default SimilarProductsCatalog;