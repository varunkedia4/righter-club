import {catalogName, catalogCode, productList, categoryDesignName} from "../constants/Common";
import ReactGA from "react-ga4";
import {message} from "antd";
import {
    getColorFilteredList,
    getFabricPatternFilteredList,
    getFabricTypeFilteredList,
    getPriceRangeFilteredList
} from "./FilteringUtil";

export const sendClickEvent = (requestFrom, clickType, clickAction) => {
    ReactGA.event({
        label: requestFrom, category: clickType, action: clickAction,
    });
}

export const generateRandomDesignNumber = (inputProductCode) => {
    let inputCategoryCode = inputProductCode.slice(-2);

    if(inputCategoryCode === "01") {
        return Math.floor((Math.random() * 3) + 1);
    } else if(inputCategoryCode === "02") {
        return Math.floor((Math.random() * 2) + 1);
    } else if(inputCategoryCode === "03") {
        return Math.floor((Math.random() * 3) + 1);
    } else if(inputCategoryCode === "04") {
        return Math.floor((Math.random() * 5) + 1);
    } else if(inputCategoryCode === "05") {
        return Math.floor((Math.random() * 1) + 1);
    } else if(inputCategoryCode === "06") {
        return Math.floor((Math.random() * 1) + 1);
    }
}

export const getDesignDetailsFromDesignNumberAndProductDetails = (designNumber, productDetails) => {
    if(designNumber === 1 || designNumber === "1") return productDetails.designDetails[0];
    else if (designNumber === 2 || designNumber === "2") return productDetails.designDetails[1];
    else if (designNumber === 3 || designNumber === "3") return productDetails.designDetails[2];
    else if (designNumber === 4 || designNumber === "4") return productDetails.designDetails[3];
    else if (designNumber === 5 || designNumber === "5") return productDetails.designDetails[4];
}

export const getProductDetailsFromProductListAndCode = (productList, productCode) => {
    for (let productCount = 0; productCount < productList.length; productCount++) {
        if(productList[productCount].code === productCode) {
            return productList[productCount];
        }
    }
}

export const getProductListFromCatalogCode = (inputCatalogCode) => {
    if(inputCatalogCode === catalogCode.KURTA) {
        return productList.KURTA;
    } else if(inputCatalogCode === catalogCode.SHERWANI) {
        return productList.SHERWANI;
    } else if(inputCatalogCode === catalogCode.NEHRU_JACKET) {
        return productList.NEHRU_JACKET;
    } else if(inputCatalogCode === catalogCode.JODHPURI) {
        return productList.JODHPURI;
    } else if(inputCatalogCode === catalogCode.SUIT) {
        return productList.SUIT;
    } else if(inputCatalogCode === catalogCode.SUIT_WITH_VEST) {
        return productList.SUIT_WITH_VEST;
    } else if(inputCatalogCode === catalogCode.MEHENDI) {
        return productList.MEHENDI;
    } else if(inputCatalogCode === catalogCode.HALDI) {
        return productList.HALDI;
    } else if(inputCatalogCode === catalogCode.ENGAGEMENT) {
        return productList.ENGAGEMENT;
    } else if(inputCatalogCode === catalogCode.WEDDING) {
        return productList.WEDDING;
    } else if(inputCatalogCode === catalogCode.DIWALI) {
            return productList.DIWALI;
    } else if(inputCatalogCode === catalogCode.HOLI) {
        return productList.HOLI;
    }
}

export const getDesignNamesFromProductCodeAndDesignNumber = (inputProductCode, designNumber) => {

    let designNameList = [];
    let inputCategoryCode = inputProductCode.slice(-2);

    if(inputCategoryCode === "01") {
        designNameList = categoryDesignName.SHERWANI;
    } else if(inputCategoryCode === "02") {
        designNameList = categoryDesignName.JODHPURI;
    } else if(inputCategoryCode === "03") {
        designNameList = categoryDesignName.NEHRU_JACKET;
    } else if(inputCategoryCode === "04") {
        designNameList = categoryDesignName.KURTA;
    } else if(inputCategoryCode === "05") {
        designNameList = categoryDesignName.SUIT;
    } else if(inputCategoryCode === "06") {
        designNameList = categoryDesignName.SUIT_WITH_VEST;
    }

    if(designNumber === 1 || designNumber === "1") return designNameList[0];
    else if (designNumber === 2 || designNumber === "2") return designNameList[1];
    else if (designNumber === 3 || designNumber === "3") return designNameList[2];
    else if (designNumber === 4 || designNumber === "4") return designNameList[3];
    else if (designNumber === 5 || designNumber === "5") return designNameList[4];
}

export const getCategoryNameFromProductCode = (inputProductCode) => {

    let inputCategoryCode = inputProductCode.slice(-2);

    if(inputCategoryCode === "01") {
        return catalogName.SHERWANI;
    } else if(inputCategoryCode === "02") {
        return catalogName.JODHPURI;
    } else if(inputCategoryCode === "03") {
        return catalogName.NEHRU_JACKET;
    } else if(inputCategoryCode === "04") {
        return catalogName.KURTA;
    } else if(inputCategoryCode === "05") {
        return catalogName.SUIT;
    } else if(inputCategoryCode === "06") {
        return catalogName.SUIT_WITH_VEST;
    }
}

export const getCatalogNameFromCatalogCode = (inputCatalogCode) => {
    if(inputCatalogCode === catalogCode.KURTA) {
        return catalogName.KURTA;
    } else if(inputCatalogCode === catalogCode.SHERWANI) {
        return catalogName.SHERWANI;
    } else if(inputCatalogCode === catalogCode.NEHRU_JACKET) {
        return catalogName.NEHRU_JACKET;
    } else if(inputCatalogCode === catalogCode.JODHPURI) {
        return catalogName.JODHPURI;
    } else if(inputCatalogCode === catalogCode.SUIT) {
        return catalogName.SUIT;
    } else if(inputCatalogCode === catalogCode.SUIT_WITH_VEST) {
        return catalogName.SUIT_WITH_VEST;
    } else if(inputCatalogCode === catalogCode.MEHENDI) {
        return catalogName.MEHENDI;
    } else if(inputCatalogCode === catalogCode.HALDI) {
        return catalogName.HALDI;
    } else if(inputCatalogCode === catalogCode.ENGAGEMENT) {
        return catalogName.ENGAGEMENT;
    } else if(inputCatalogCode === catalogCode.WEDDING) {
        return catalogName.WEDDING;
    } else if(inputCatalogCode === catalogCode.DIWALI) {
        return catalogName.DIWALI;
    } else if(inputCatalogCode === catalogCode.HOLI) {
        return catalogName.HOLI;
    }
}

export const getFilteredProductList = (productList, color, priceRange, fabricType, fabricPattern) => {
    return getFabricPatternFilteredList(fabricPattern,
                getFabricTypeFilteredList(fabricType,
                    getColorFilteredList(color,
                        getPriceRangeFilteredList(priceRange, productList))));
}

export const shuffleList = (inputList) => {
    let currentIndex = inputList.length,  randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [inputList[currentIndex], inputList[randomIndex]] = [
            inputList[randomIndex], inputList[currentIndex]];
    }
    return inputList;
}

export const getConfirmationMessage = (loadingMessage, successMessage,
                                       loadingMessageDurationInMillis, successMessageDurationInSec) => {
    const key = 'updatable';
    message.loading({ content: loadingMessage, key, style: { marginTop: '12vh'}});
    setTimeout(() => {message.success({ content: successMessage, key, duration: successMessageDurationInSec , style: { marginTop: '12vh'}});}, loadingMessageDurationInMillis);
}
