import {fabricColorFilters, fabricPatternFilters, fabricTypeFilters, priceRangeFilters} from "../constants/Filters";

export const getColorFilteredList = (inputColor, inputProductList) => {
    if(inputColor === fabricColorFilters.ALL) return inputProductList;

    let colorFilteredList = [];
    for(let productCount = 0; productCount < inputProductList.length; productCount++) {
        if(inputProductList[productCount].fabricColor === inputColor) {
            colorFilteredList.push(inputProductList[productCount])
        }
    }
    return colorFilteredList;
}

export const getFabricTypeFilteredList = (inputFabricType, inputProductList) => {
    if(inputFabricType === fabricTypeFilters.ALL) return inputProductList;

    let fabricTypeFilteredList = [];
    for(let productCount = 0; productCount < inputProductList.length; productCount++) {
        if(inputProductList[productCount].fabricType === inputFabricType) {
            fabricTypeFilteredList.push(inputProductList[productCount])
        }
    }
    return fabricTypeFilteredList;
}

export const getFabricPatternFilteredList = (inputFabricPattern, inputProductList) => {
    if(inputFabricPattern === fabricPatternFilters.ALL) return inputProductList;

    let fabricPatternFilteredList = [];
    for(let productCount = 0; productCount < inputProductList.length; productCount++) {
        if(inputProductList[productCount].fabricPattern === inputFabricPattern) {
            fabricPatternFilteredList.push(inputProductList[productCount])
        }
    }
    return fabricPatternFilteredList;
}

export const getPriceRangeFilteredList = (inputPriceRange, inputProductList) => {
    if(inputPriceRange === priceRangeFilters.ALL) return inputProductList;

    let priceRangeFilteredList = [];
    for(let productCount = 0; productCount < inputProductList.length; productCount++) {
        let productPrice = Number(inputProductList[productCount].sellingPrice);
        if(inputPriceRange === priceRangeFilters.LESS_THAN_1500 && (productPrice < 1500)) {
            priceRangeFilteredList.push(inputProductList[productCount]);
        }
        else if(inputPriceRange === priceRangeFilters.BETWEEN_1500_TO_2999 && (productPrice > 1499 && productPrice < 3000)) {
            priceRangeFilteredList.push(inputProductList[productCount]);
        }
        else if(inputPriceRange === priceRangeFilters.BETWEEN_3000_TO_4999 && (productPrice > 2999 && productPrice < 5000)) {
            priceRangeFilteredList.push(inputProductList[productCount]);
        }
        else if(inputPriceRange === priceRangeFilters.MORE_THAN_4999 && (productPrice > 4999)) {
            priceRangeFilteredList.push(inputProductList[productCount]);
        }
    }

    return priceRangeFilteredList;
}