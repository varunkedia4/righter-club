import React, {useEffect} from 'react'
import ReactGA from "react-ga4";
import {commonConstants} from "../../../constants/Common";
import LazyLoad from 'react-lazyload';
import LandingPageBannerSection from "./sections/LandingBannerSection";
import NewArrivalsSection from "./sections/NewArrivalsSection";
import ShopByCategorySection from "./sections/ShopByCategorySection";
import ShopByOccasionSection from "./sections/ShopByOccasionSection";
import ShopKurtaSection from "./sections/ShopKurtaSection";
import ShopSherwaniSection from "./sections/ShopSherwaniSection";
import ShopNehruJacketSection from "./sections/ShopNehruJacketSection";
import ShopJodhpuriSection from "./sections/ShopJodhpuriSection";
import CustomerReviewsSection from "./sections/CustomerReviewsSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import OfferModal from "./OfferModal";

const HomepagePage = () => {

    useEffect(() => { document.title = commonConstants.RIGHTER }, []);
    ReactGA.send({ hitType: "pageview"});

    return (
        <div id='HomePage'>
            <LandingPageBannerSection />
            <LazyLoad height={200} once ><NewArrivalsSection /></LazyLoad>
            <LazyLoad height={200} once ><ShopByOccasionSection /></LazyLoad>
            <LazyLoad height={200} once ><ShopByCategorySection /></LazyLoad>
            <LazyLoad height={200} once ><HowItWorksSection /></LazyLoad>
            <LazyLoad height={200} once ><ShopKurtaSection /></LazyLoad>
            <LazyLoad height={200} once ><ShopSherwaniSection /></LazyLoad>
            <LazyLoad height={200} once ><ShopNehruJacketSection /></LazyLoad>
            <LazyLoad height={200} once ><ShopJodhpuriSection /></LazyLoad>
            <LazyLoad height={200} once ><CustomerReviewsSection /></LazyLoad>
            <OfferModal />
        </div>
    );
};

export default HomepagePage;