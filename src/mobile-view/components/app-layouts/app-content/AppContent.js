import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {navigationLinks} from "../../../constants/NavigationLinks";
import HomePage from "../../app-screens/home-page/HomePage";
import ProductPage from "../../app-screens/product-page/ProductPage";
import HelpMeChoosePage from "../../app-screens/static-pages/HelpMeChoosePage";
import PrivacyPolicyPage from "../../app-screens/static-pages/PrivacyPolicyPage";
import CustomerSupportPage from "../../app-screens/customer-request-pages/CustomerSupportPage";
import TermsAndConditionsPage from "../../app-screens/static-pages/TermsAndConditionsPage";
import AboutUsPage from "../../app-screens/static-pages/AboutUsPage";
import FAQPage from "../../app-screens/static-pages/FAQPage";
import SendUsFeedbackPage from "../../app-screens/customer-request-pages/SendUsFeedbackPage";
import BlogsPage from "../../app-screens/static-pages/BlogsPage";
import CatalogPage from "../../app-screens/catalog-page/CatalogPage";
import ResizeAndReturnPolicyPage from "../../app-screens/static-pages/ResizeAndReturnPolicyPage";
import BlogsOnePage from "../../app-screens/static-pages/blogs/BlogsOnePage";
import BlogsTwoPage from "../../app-screens/static-pages/blogs/BlogsTwoPage";
import BlogsThreePage from "../../app-screens/static-pages/blogs/BlogsThreePage";
import BlogsFourPage from "../../app-screens/static-pages/blogs/BlogsFourPage";
import BlogsFivePage from "../../app-screens/static-pages/blogs/BlogsFivePage";
import PlaceYourOrderPage from "../../app-screens/place-your-order-page/PlaceYourOrderPage";
import SecurePaymentPage from "../../app-screens/static-pages/SecurePaymentPage";
import ShippingPolicyPage from "../../app-screens/static-pages/ShippingPolicyPage";
import PaymentPolicyPage from "../../app-screens/static-pages/PaymentPolicyPage";
import BlogsSixPage from "../../app-screens/static-pages/blogs/BlogsSixPage";
import ThankYouPage from "../../app-screens/static-pages/ThankYouPage";
import ExploreRighterPage from "../../app-screens/customer-request-pages/ExploreRighterPage";
import BlogsSevenPage from "../../app-screens/static-pages/blogs/BlogsSevenPage";
import GetStartedPage from "../../app-screens/customer-request-pages/GetStartedPage";
import SmartBodyMeasurementPage from "../../app-screens/customer-request-pages/SmartBodyMeasurementPage";

const AppContent = () => {

    return (
        <div>
            <Routes>
                <Route path={navigationLinks.HOME} element={<HomePage />} />
                <Route path={navigationLinks.CATEGORIES + navigationLinks.ID} element={<CatalogPage catalogContent={"Category"}/>}/>
                <Route path={navigationLinks.OCCASIONS + navigationLinks.ID} element={<CatalogPage catalogContent={"Occasion"}/>}/>
                <Route path={navigationLinks.PRODUCT + navigationLinks.ID} element={<ProductPage/>} />
                <Route path={navigationLinks.PLACE_YOUR_ORDER + navigationLinks.ID} element={<PlaceYourOrderPage/>} />
                <Route path={navigationLinks.THANK_YOU} element={<ThankYouPage />} />
                <Route path={navigationLinks.SECURE_PAYMENT} element={<SecurePaymentPage />} />
                <Route path={navigationLinks.HELP_ME_CHOOSE} element={<HelpMeChoosePage />} />
                <Route path={navigationLinks.PRIVACY_POLICY} element={<PrivacyPolicyPage />} />
                <Route path={navigationLinks.CUSTOMER_SUPPORT} element={<CustomerSupportPage />} />
                <Route path={navigationLinks.TERMS_AND_CONDITIONS} element={<TermsAndConditionsPage />} />
                <Route path={navigationLinks.ABOUT_US} element={<AboutUsPage />} />
                <Route path={navigationLinks.FAQS} element={<FAQPage />} />
                <Route path={navigationLinks.SEND_US_YOUR_FEEDBACK} element={<SendUsFeedbackPage />} />
                <Route path={navigationLinks.RESIZE_AND_RETURN_POLICY} element={<ResizeAndReturnPolicyPage />} />
                <Route path={navigationLinks.SHIPPING_POLICY} element={<ShippingPolicyPage />} />
                <Route path={navigationLinks.PAYMENT_POLICY} element={<PaymentPolicyPage />} />
                <Route path={navigationLinks.BLOGS} element={<BlogsPage />} />
                <Route path={navigationLinks.BLOGS_ONE} element={<BlogsOnePage />} />
                <Route path={navigationLinks.BLOGS_TWO} element={<BlogsTwoPage />} />
                <Route path={navigationLinks.BLOGS_THREE} element={<BlogsThreePage />} />
                <Route path={navigationLinks.BLOGS_FOUR} element={<BlogsFourPage />} />
                <Route path={navigationLinks.BLOGS_FIVE} element={<BlogsFivePage />} />
                <Route path={navigationLinks.BLOGS_SIX} element={<BlogsSixPage />} />
                <Route path={navigationLinks.BLOGS_SEVEN} element={<BlogsSevenPage />} />
                <Route path={navigationLinks.EXPLORE_RIGHTER} element={<ExploreRighterPage />} />
                <Route path={navigationLinks.GET_STARTED} element={<GetStartedPage />} />
                <Route path={navigationLinks.SMART_BODY_MEASUREMENT} element={<SmartBodyMeasurementPage />} />
            </Routes>
        </div>
    );
};

export default AppContent;