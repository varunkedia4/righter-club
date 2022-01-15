import React from 'react'
import HowItWorks from "../../../common/HowItWorks";
import {Typography} from "antd";

const HowItWorksSection = () => {

    const { Title } = Typography;

    return(
        <div style={{paddingTop: '2em'}}>
            <Title level={4} style={{textAlign: 'center'}}> How it Works </Title>
            <div style={{paddingTop: '1.3em'}}>
                <HowItWorks />
            </div>
        </div>
    );
};
export default HowItWorksSection;