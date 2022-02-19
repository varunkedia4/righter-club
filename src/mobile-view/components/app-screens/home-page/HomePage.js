import React, {useEffect} from 'react'
import ReactGA from "react-ga4";
import {commonConstants} from "../../../constants/Common";
import LazyLoad from 'react-lazyload';
import LandingPageBannerSection from "./sections/LandingBannerSection";
import ShopByCategorySection from "./sections/ShopByCategorySection";
import ShopByOccasionSection from "./sections/ShopByOccasionSection";
import OfferModal from "./OfferModal";
import HowItWorksSection from "./sections/HowItWorksSection";
import CustomerReviewsSection from "./sections/CustomerReviewsSection";
import CustomDivider from "../../common/CustomDivider";

const HomepagePage = () => {

    useEffect(() => { document.title = commonConstants.RIGHTER }, []);
    ReactGA.send({ hitType: "pageview"});

    return (
        <div id='HomePage'>
            <LandingPageBannerSection /><CustomDivider />
            <LazyLoad height={200} once ><ShopByCategorySection /> <CustomDivider /></LazyLoad>
            <LazyLoad height={200} once ><HowItWorksSection /> <CustomDivider /></LazyLoad>
            <LazyLoad height={200} once ><ShopByOccasionSection /> <CustomDivider /></LazyLoad>
            <LazyLoad height={200} once ><CustomerReviewsSection /></LazyLoad>
            <OfferModal />
        </div>
    );
};

export default HomepagePage;