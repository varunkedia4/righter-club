import {catalogName, catalogCode, productList, categoryDesignName} from "../constants/Common";
import {message} from "antd";
import {getColorFilteredList, getFabricPatternFilteredList,
    getFabricTypeFilteredList, getPriceRangeFilteredList} from "./FilteringUtil";
import {navigationLinks} from "../constants/NavigationLinks";

export const generateRandomDesignNumber = (inputProductCode) => {
    let inputCategoryCode = inputProductCode.slice(-2);

    if(inputCategoryCode === "01") {
        return Math.floor((Math.random() * 3) + 1);
    } else if(inputCategoryCode === "02") {
        return Math.floor((Math.random() * 3) + 1);
    } else if(inputCategoryCode === "03") {
        return Math.floor((Math.random() * 3) + 1);
    } else if(inputCategoryCode === "04") {
        return Math.floor((Math.random() * 5) + 1);
    } else if(inputCategoryCode === "05") {
        return Math.floor((Math.random() * 2) + 1);
    } else if(inputCategoryCode === "06") {
        return Math.floor((Math.random()) + 1);
    } else if(inputCategoryCode === "07") {
        return Math.floor((Math.random()) + 1);
    } else if(inputCategoryCode === "08") {
        return Math.floor((Math.random()) + 1);
    } else if(inputCategoryCode === "09") {
        return Math.floor((Math.random()) + 1);
    } else if(inputCategoryCode === "10") {
        return Math.floor((Math.random()) + 1);
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
    if(inputCatalogCode === catalogCode.SHERWANI) {
        return productList.SHERWANI;
    } else if(inputCatalogCode === catalogCode.JODHPURI) {
        return productList.JODHPURI;
    } else if(inputCatalogCode === catalogCode.NEHRU_JACKET) {
        return productList.NEHRU_JACKET;
    } else if(inputCatalogCode === catalogCode.KURTA) {
        return productList.KURTA;
    } else if(inputCatalogCode === catalogCode.TWO_PIECE_SUIT) {
        return productList.TWO_PIECE_SUIT;
    } else if(inputCatalogCode === catalogCode.THREE_PIECE_SUIT) {
        return productList.THREE_PIECE_SUIT;
    } else if(inputCatalogCode === catalogCode.CASUAL_BLAZER) {
        return productList.CASUAL_BLAZER;
    } else if(inputCatalogCode === catalogCode.TUXEDO) {
        return productList.TUXEDO;
    } else if(inputCatalogCode === catalogCode.TROUSER) {
        return productList.TROUSER;
    } else if(inputCatalogCode === catalogCode.SHIRT) {
        return productList.SHIRT;
    } else if(inputCatalogCode === catalogCode.FESTIVES) {
        return productList.FESTIVES;
    } else if(inputCatalogCode === catalogCode.REGULAR) {
        return productList.REGULAR;
    } else if(inputCatalogCode === catalogCode.HALDI) {
        return productList.HALDI;
    } else if(inputCatalogCode === catalogCode.MEHENDI) {
        return productList.MEHENDI;
    } else if(inputCatalogCode === catalogCode.ENGAGEMENT) {
        return productList.ENGAGEMENT;
    } else if(inputCatalogCode === catalogCode.WEDDING) {
        return productList.WEDDING;
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
        designNameList = categoryDesignName.TWO_PIECE_SUIT;
    } else if(inputCategoryCode === "06") {
        designNameList = categoryDesignName.THREE_PIECE_SUIT;
    } else if(inputCategoryCode === "07") {
        designNameList = categoryDesignName.CASUAL_BLAZER;
    } else if(inputCategoryCode === "08") {
        designNameList = categoryDesignName.TUXEDO;
    } else if(inputCategoryCode === "09") {
        designNameList = categoryDesignName.TROUSER;
    } else if(inputCategoryCode === "10") {
        designNameList = categoryDesignName.SHIRT;
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
        return catalogName.TWO_PIECE_SUIT;
    } else if(inputCategoryCode === "06") {
        return catalogName.THREE_PIECE_SUIT;
    } else if(inputCategoryCode === "07") {
        return catalogName.CASUAL_BLAZER;
    } else if(inputCategoryCode === "08") {
        return catalogName.TUXEDO;
    } else if(inputCategoryCode === "09") {
        return catalogName.TROUSER;
    } else if(inputCategoryCode === "10") {
        return catalogName.SHIRT;
    }
}

export const getNavigationLinkFromCategoryCode = (inputCategoryCode) => {

    if(inputCategoryCode === "01") {
        return navigationLinks.SHERWANI;
    } else if(inputCategoryCode === "02") {
        return navigationLinks.JODHPURI;
    } else if(inputCategoryCode === "03") {
        return navigationLinks.NEHRU_JACKET;
    } else if(inputCategoryCode === "04") {
        return navigationLinks.KURTA;
    } else if(inputCategoryCode === "05") {
        return navigationLinks.TWO_PIECE_SUIT;
    } else if(inputCategoryCode === "06") {
        return navigationLinks.THREE_PIECE_SUIT;
    } else if(inputCategoryCode === "07") {
        return navigationLinks.CASUAL_BLAZER;
    } else if(inputCategoryCode === "08") {
        return navigationLinks.TUXEDO;
    } else if(inputCategoryCode === "09") {
        return navigationLinks.TROUSER;
    } else if(inputCategoryCode === "10") {
        return navigationLinks.SHIRT;
    }
}

export const getCategoryNameFromCategoryCode = (inputCategoryCode) => {

    if(inputCategoryCode === "01") {
        return catalogName.SHERWANI;
    } else if(inputCategoryCode === "02") {
        return catalogName.JODHPURI;
    } else if(inputCategoryCode === "03") {
        return catalogName.NEHRU_JACKET;
    } else if(inputCategoryCode === "04") {
        return catalogName.KURTA;
    } else if(inputCategoryCode === "05") {
        return catalogName.TWO_PIECE_SUIT;
    } else if(inputCategoryCode === "06") {
        return catalogName.THREE_PIECE_SUIT;
    } else if(inputCategoryCode === "07") {
        return catalogName.CASUAL_BLAZER;
    } else if(inputCategoryCode === "08") {
        return catalogName.TUXEDO;
    } else if(inputCategoryCode === "09") {
        return catalogName.TROUSER;
    } else if(inputCategoryCode === "10") {
        return catalogName.SHIRT;
    }
}

export const getCatalogNameFromCatalogCode = (inputCatalogCode) => {
    if(inputCatalogCode === catalogCode.SHERWANI) {
        return catalogName.SHERWANI;
    } else if(inputCatalogCode === catalogCode.JODHPURI) {
        return catalogName.JODHPURI;
    } else if(inputCatalogCode === catalogCode.NEHRU_JACKET) {
        return catalogName.NEHRU_JACKET;
    } else if(inputCatalogCode === catalogCode.KURTA) {
        return catalogName.KURTA;
    } else if(inputCatalogCode === catalogCode.TWO_PIECE_SUIT) {
        return catalogName.TWO_PIECE_SUIT;
    } else if(inputCatalogCode === catalogCode.THREE_PIECE_SUIT) {
        return catalogName.THREE_PIECE_SUIT;
    } else if(inputCatalogCode === catalogCode.CASUAL_BLAZER) {
        return catalogName.CASUAL_BLAZER;
    } else if(inputCatalogCode === catalogCode.TUXEDO) {
        return catalogName.TUXEDO;
    } else if(inputCatalogCode === catalogCode.TROUSER) {
        return catalogName.TROUSER;
    } else if(inputCatalogCode === catalogCode.SHIRT) {
        return catalogName.SHIRT;
    } else if(inputCatalogCode === catalogCode.FESTIVES) {
        return catalogName.FESTIVES;
    } else if(inputCatalogCode === catalogCode.REGULAR) {
        return catalogName.REGULAR;
    } else if(inputCatalogCode === catalogCode.HALDI) {
        return catalogName.HALDI;
    } else if(inputCatalogCode === catalogCode.MEHENDI) {
        return catalogName.MEHENDI;
    } else if(inputCatalogCode === catalogCode.ENGAGEMENT) {
        return catalogName.ENGAGEMENT;
    } else if(inputCatalogCode === catalogCode.WEDDING) {
        return catalogName.WEDDING;
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
