import {Card, Image, Typography, Row} from "antd";
import {useNavigate} from "react-router-dom";
import React, {useEffect} from "react";
import ShopByCategorySection from "../sections/ShopByCategorySection";
import LazyLoad from "react-lazyload";

const CatalogCard = (props) => {

    useEffect(() => {
        let cardBody = document.querySelectorAll('.ant-card-body')
        cardBody.forEach(element => element.style = "padding : 0");
    }, []);

    const navigate = useNavigate();
    const handleNavigation = (navigationLink) => { navigate(navigationLink);}

    const { Text } = Typography;

    return (
        <div style={{display: "inline-block", paddingRight: "1em" }}>
            <Card bordered={false} onClick={() => handleNavigation(props.navigationLink)}>
                <LazyLoad height={200} once >
                    <Image alt={props.cardName} preview={false} src={props.imageLink} />
                </LazyLoad>
            </Card>
            <Row justify={'center'}><Text strong> {props.cardName} </Text></Row>
        </div>
    );
};

export default CatalogCard;