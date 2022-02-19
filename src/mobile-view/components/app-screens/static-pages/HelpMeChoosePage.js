import React, {useEffect} from 'react'
import ReactGA from "react-ga4";
import {Row, Typography} from "antd";

const HelpMeChoosePage = () => {

    useEffect(() => { document.title = "Help me choose" }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Title } = Typography;

    return (
        <div style={{paddingTop: '3.5em'}}>
            <div id='PageTitle' style={{backgroundColor: "#e9f1f9", paddingLeft: "1.5em", paddingTop: '1em', marginBottom: '1em'}}>
                <Row><Title level={4}>Help me choose</Title></Row>
            </div>
        </div>
    );
};

export default HelpMeChoosePage;