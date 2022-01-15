import React from 'react'
import {Descriptions, Typography} from 'antd';

const FabricDetails = (props) => {

    const { Text } = Typography;

    return(
        <div style={{paddingLeft: '1.5em', paddingRight: '1em', paddingTop: '1em', paddingBottom: '1em'}}>
            <div style={{paddingBottom: '1em'}}><Text strong> FABRIC DETAILS </Text></div>
            <Descriptions bordered>
                <Descriptions.Item contentStyle={{color: '#808080'}} label="Fabric Type">{props.productDetails.fabricType}</Descriptions.Item>
                <Descriptions.Item contentStyle={{color: '#808080'}} label="Fabric Color">{props.productDetails.fabricColor}</Descriptions.Item>
                <Descriptions.Item contentStyle={{color: '#808080'}} label="Fabric Pattern">{props.productDetails.fabricPattern}</Descriptions.Item>
                <Descriptions.Item contentStyle={{color: '#808080'}} label="Weave Type">{props.productDetails.weaveType}</Descriptions.Item>
                <Descriptions.Item contentStyle={{color: '#808080'}} label="Wash Care">{props.productDetails.washCare}</Descriptions.Item>
            </Descriptions>
        </div>
    );
};
export default FabricDetails;