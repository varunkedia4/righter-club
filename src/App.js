import React, {useEffect} from 'react';
import ReactGA from "react-ga4";
import {BrowserRouter as Router, useLocation} from 'react-router-dom';
import AppContent from "./components/app-layouts/AppContent";
import AppHeaderContainer from "./components/app-layouts/AppHeaderContainer";
import AppFooter from "./components/app-layouts/AppFooter";

ReactGA.initialize('G-1BNPWF6D1H');

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}

const App = () => {

    return (
        <div className="App">
            <Router>
                <ScrollToTop/>
                <AppHeaderContainer>
                    <AppContent/>
                    <AppFooter/>
                </AppHeaderContainer>
            </Router>
        </div>
    );
};

export default App;