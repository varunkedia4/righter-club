import React, {Suspense, lazy} from 'react';
import { useMediaQuery } from 'react-responsive'
import DesktopApp from "./desktop-view/DesktopApp";
import { Spin , Row} from 'antd';

import ReactGA from "react-ga4";
ReactGA.initialize('G-1BNPWF6D1H');

const MobileApp = lazy(() => import('./mobile-view/MobileApp'));

const LoaderScreen = () => {
    return(
        <div style={{paddingTop: '25em'}}>
            <Row justify={'center'} align={'middle'}>
                <Spin size="large" />
            </Row>
        </div>
    );
};

const App = () => {

    const isDesktop = useMediaQuery({ query: '(min-width: 1224px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className="App">
            { isMobile &&
                <Suspense fallback={<LoaderScreen />}>
                    <MobileApp />
                </Suspense>
            }
            { isDesktop && <DesktopApp /> }
        </div>
    );
};

export default App;