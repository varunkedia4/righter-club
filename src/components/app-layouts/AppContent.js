import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {redirectionLinks} from "../../constants/ApplicationConstants";
import HomepageLayout from "../app-screens/home-page/HomePage";
import CatalogPage from "../app-screens/catalog-page/CatalogPage";
import HowItWorksPage from "../app-screens/how-it-works-page/HowItWorksPage";
import WhyRighterPage from "../app-screens/why-righter-page/WhyRighterPage";
import ContactUsPage from "../app-screens/contact-us-page/ContactUsPage";
import OurStoryPage from "../app-screens/our-story-page/OurStoryPage";
import PrivacyPolicyPage from "../app-screens/privacy-policy-page/PrivacyPolicyPage";
import TermsAndConditionsPage from "../app-screens/terms-and-conditions-page/TermsAndConditionsPage";
import ItemPage from "../app-screens/item-page/ItemPage";
import GetFabricSamplePage from "../app-screens/get-fabric-sample/GetFabricSamplePage";
import FAQPage from "../app-screens/faq-page/FAQPage";
import BlogsPage from "../app-screens/blogs-page/BlogsPage";
import StartShoppingPage from "../app-screens/start-shopping-page/StartShoppingPage";
import UploadYourOwnDesignPage from "../app-screens/upload-your-own-design-page/UploadYourOwnDesignPage";
import ScheduleMeasurementPage from "../app-screens/schedule-measurement/ScheduleMeasurementPage";
import SlowestAdoption from "../app-screens/blogs-page/blogs/SlowestAdoption";
import IndianWedding from "../app-screens/blogs-page/blogs/IndianWedding";
import ApparelOyo from "../app-screens/blogs-page/blogs/ApparelOyo";

const AppContent = () => {

    return (
        <div>
            <Routes>
                <Route path={redirectionLinks.HOME} element={<HomepageLayout />} />
                <Route path="/categories/:id" element={<CatalogPage/>} />
                <Route path="/item/:id" element={<ItemPage/>} />
                <Route path="/get-fabric-sample/:id" element={<GetFabricSamplePage/>} />
                <Route path="/schedule-measurement/:id" element={<ScheduleMeasurementPage/>} />
                <Route path={redirectionLinks.HOW_IT_WORKS} element={<HowItWorksPage />} />
                <Route path={redirectionLinks.WHY_RIGHTER} element={<WhyRighterPage />} />
                <Route path={redirectionLinks.CONTACT_US} element={<ContactUsPage />} />
                <Route path={redirectionLinks.OUR_STORY} element={<OurStoryPage/>} />
                <Route path={redirectionLinks.PRIVACY_POLICY} element={<PrivacyPolicyPage/>} />
                <Route path={redirectionLinks.TERMS_AND_CONDITIONS} element={<TermsAndConditionsPage/>} />
                <Route path={redirectionLinks.FAQ} element={<FAQPage/>} />
                <Route path={redirectionLinks.BLOGS} element={<BlogsPage/>} />
                <Route path={redirectionLinks.SLOWEST_ADOPTION_BLOG} element={<SlowestAdoption/>} />
                <Route path={redirectionLinks.INDIAN_WEDDING_BLOG} element={<IndianWedding/>} />
                <Route path={redirectionLinks.APPAREL_OYO_BLOG} element={<ApparelOyo/>} />
                <Route path={redirectionLinks.START_SHOPPING} element={<StartShoppingPage/>} />
                <Route path={redirectionLinks.UPLOAD_YOUR_OWN_DESIGN} element={<UploadYourOwnDesignPage/>} />
            </Routes>
        </div>
    );
};

export default AppContent;