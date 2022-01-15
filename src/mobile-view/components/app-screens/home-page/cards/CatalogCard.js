import {Card, Image, Typography, Row} from "antd";
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";

const CatalogCard = (props) => {

    useEffect(() => {
        let cardBody = document.querySelectorAll('.ant-card-body')
        cardBody.forEach(element => element.style = "padding : 0");
    }, []);

    const navigate = useNavigate();
    const handleNavigation = (navigationLink) => {
        navigate(navigationLink);
    }

    const { Text } = Typography;

    return (
        <div style={{display: "inline-block", paddingRight: "1em" }}>
            <Card bordered={false} onClick={() => handleNavigation(props.navigationLink)} style={{ width: 230}}>
                <Image preview={false} src={props.imageLink} />
            </Card>
            <Row justify={'center'}>
                <Text strong> {props.cardName} </Text>
            </Row>
        </div>
    );
};

export default CatalogCard;