import React, {useEffect} from 'react';
import {BrowserRouter as Router, useLocation} from 'react-router-dom';
import AppContent from "./components/app-layouts/app-content/AppContent";
import AppHeader from "./components/app-layouts/app-header/AppHeader";
import AppFooter from "./components/app-layouts/app-footer/AppFooter";

const StartPageFromTop = () => {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}

const MobileApp = () => {
    return (
            <div className="MobileApp">
                <Router>
                    <StartPageFromTop/>
                    <AppHeader/>
                    <AppContent/>
                    <AppFooter />
                </Router>
            </div>
    );
};

export default MobileApp;