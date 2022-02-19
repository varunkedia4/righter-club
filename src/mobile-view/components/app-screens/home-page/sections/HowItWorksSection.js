import React from 'react'
import HowItWorks from "../../../common/HowItWorks";
import {Typography} from "antd";

const HowItWorksSection = () => {

    const { Title } = Typography;

    return(
        <div style={{paddingTop: '1.5em'}}>
            <Title level={4} style={{textAlign: 'center'}}> How it Works </Title>
            <div><HowItWorks /></div>
        </div>
    );
};
export default HowItWorksSection;