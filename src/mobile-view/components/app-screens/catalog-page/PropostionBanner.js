import React from "react";
import {Card, Row, Typography} from "antd";

const PropositionBanner = (props) => {

    const { Text, Title } = Typography;

    return(
        <Card style={{paddingRight: '1em', paddingLeft: '1em', paddingBottom: '2em', paddingTop: '2em', marginBottom: '1em', backgroundColor: "#e9f1f9"}}>
            <div>
                <Row justify={'center'}> <Title level={4}>{props.heading}</Title> </Row>
                <Row justify={'center'}> <Text>{props.description}</Text> </Row>
            </div>
        </Card>
    );
};
export default PropositionBanner;