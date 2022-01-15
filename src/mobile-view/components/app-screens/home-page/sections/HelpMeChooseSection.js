import React from 'react'
import {Button, Typography} from "antd";
import {navigationLinks} from "../../../../constants/NavigationLinks";
import {useNavigate} from "react-router-dom";

const HelpMeChooseSection = () => {

    const { Title, Text } = Typography;

    const navigate = useNavigate();
    const handleNavigation = (navigationLink) => {
        navigate(navigationLink);
    }

    return(
        <div id='HelpMeChooseSection' style={{marginTop: '2em', paddingBottom: '2em', backgroundColor: '#EFEAE4'}}>
            <div style={{paddingTop: '2em', textAlign: "center"}}>
                <Title level={4}> Not sure where to start? </Title>
            </div>
            <div style={{textAlign: "center"}}>
                <Text> Use our expert wizard to simplify your search </Text>
            </div>
            <div style={{textAlign: "center", paddingTop: '1em'}}>
                <Button size={'large'} onClick={() => handleNavigation(navigationLinks.HELP_ME_CHOOSE)}> Help me choose </Button>
            </div>
        </div>
    );
};

export default HelpMeChooseSection;