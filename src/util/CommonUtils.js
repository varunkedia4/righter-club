import {categoryCode, categoryName, collectionsLists, redirectionLinks} from "../constants/ApplicationConstants";
import ReactGA from "react-ga4";

export const sendClickEvent = (requestFrom, clickType, clickAction) => {
    ReactGA.event({
        label: requestFrom, category: clickType, action: clickAction,
    });
}

export const getItem = (itemList, productCode) => {
    for (let itemCount = 0; itemCount < itemList.length; itemCount++) {
        if(itemList[itemCount].productCode === productCode) {
            return itemList[itemCount];
        }
    }
}

export const getItemList = (categoryCode) => {
    if(categoryCode === 'kurta') {
        return collectionsLists.KURTA;
    } else if(categoryCode === 'sherwani') {
        return collectionsLists.SHERWANI;
    } else if(categoryCode === 'indoWestern') {
        return collectionsLists.INDO_WESTERN;
    } else return collectionsLists.NEHRU_JACKETS;
}

export const getCategoryName = (categoryCode) => {
    if(categoryCode === 'kurta') {
        return categoryName.KURTA;
    } else if(categoryCode === 'sherwani') {
        return categoryName.SHERWANI;
    } else if(categoryCode === 'indoWestern') {
        return categoryName.INDO_WESTERN;
    } else return categoryName.NEHRU_JACKETS;
}

export const getCategoryLink = (categoryCode) => {
    if(categoryCode === 'kurta') {
        return redirectionLinks.KURTA;
    } else if(categoryCode === 'sherwani') {
        return redirectionLinks.SHERWANI;
    } else if(categoryCode === 'indoWestern') {
        return redirectionLinks.INDO_WESTERN;
    } else return redirectionLinks.NEHRU_JACKETS;
}

export const getFilteredItemList = (tab, activePriceFilter) => {
    let categoryFilteredItemList = [];
    if(tab === categoryCode.KURTA) {
        categoryFilteredItemList = collectionsLists.KURTA;
    } else if (tab === categoryCode.SHERWANI) {
        categoryFilteredItemList = collectionsLists.SHERWANI;
    } else if (tab === categoryCode.INDO_WESTERN) {
        categoryFilteredItemList = collectionsLists.INDO_WESTERN;
    } else categoryFilteredItemList = collectionsLists.NEHRU_JACKETS;

    let priceFilteredItemList = [];
    if (activePriceFilter === 0) {
        priceFilteredItemList = categoryFilteredItemList;
    } else if (activePriceFilter === 1) {
        for(let itemCount = 0; itemCount < categoryFilteredItemList.length; itemCount++) {
            if(categoryFilteredItemList[itemCount].price <= 1000) {
                priceFilteredItemList.push(categoryFilteredItemList[itemCount]);
            }
        }
    } else if (activePriceFilter === 2) {
        for(let itemCount = 0; itemCount < categoryFilteredItemList.length; itemCount++) {
            if(categoryFilteredItemList[itemCount].price > 1000 && categoryFilteredItemList[itemCount].price <= 3000 ) {
                priceFilteredItemList.push(categoryFilteredItemList[itemCount]);
            }
        }
    } else if (activePriceFilter === 3) {
        for(let itemCount = 0; itemCount < categoryFilteredItemList.length; itemCount++) {
            if(categoryFilteredItemList[itemCount].price > 3001 && categoryFilteredItemList[itemCount].price < 5000) {
                priceFilteredItemList.push(categoryFilteredItemList[itemCount]);
            }
        }
    } else if (activePriceFilter === 4) {
        for(let itemCount = 0; itemCount < categoryFilteredItemList.length; itemCount++) {
            if(categoryFilteredItemList[itemCount].price > 5000) {
                priceFilteredItemList.push(categoryFilteredItemList[itemCount]);
            }
        }
    }

    return priceFilteredItemList;
}