import React, {useEffect} from 'react';
import {Card, Image, Typography, Row} from "antd";
import {navigationLinks} from "../../../constants/NavigationLinks";
import {useNavigate} from "react-router-dom";
import {getDesignNamesFromProductCodeAndDesignNumber} from "../../../util/CommonUtils";

const DesignCard = (props) => {

    const navigate = useNavigate();
    const { Text } = Typography;

    useEffect(() => {
        let cardBody = document.querySelectorAll('.ant-card-body')
        cardBody.forEach(element => element.style = "padding : 7px");
    }, []);

    const handleCardClick = () => {
        navigate(props.navigationLink);
        props.closeDrawer();
    }

    return(
        <div>
            <Card href={props.navigationLink} onClick={handleCardClick} style={{ width: 110, marginRight: '0.5em'}}>
                <Image alt={props.designName} preview={false} src={props.image}/>
            </Card>
            <div style={{paddingTop: '1em'}}>
                <Row justify={'center'}> <Text strong type={'secondary'}>{props.designName}</Text> </Row>
            </div>
        </div>
    );
};

const MoreDesigns = (props) => {

    const { Text } = Typography;

    const productImageCardList = [];
    for(let designCount = 0; designCount < props.productDetails.designDetails.length; designCount++) {
        let designNumber = designCount + 1;
        let designName = getDesignNamesFromProductCodeAndDesignNumber(props.productDetails.code, designNumber);

        productImageCardList.push(
            <DesignCard
                image={props.productDetails.designDetails[designCount].imageLinks[0]}
                navigationLink={navigationLinks.PRODUCT + props.catalogCode + "." + props.productDetails.code + "." + designNumber}
                closeDrawer={props.closeDrawer}
                designName={designName}
            />
        );
    }

    return(
        <div style={{paddingLeft: '1.5em', paddingRight: '1em', paddingTop: '1em', paddingBottom: '1em'}}>
            <div style={{paddingBottom: '1em'}}><Text strong> MORE DESIGNS IN SAME FABRIC </Text></div>
            <div>
                {
                    (productImageCardList.length > 1) &&
                    <div style={{overflow: "auto", whiteSpace: "nowrap", display: "flex", alignItems: "center" }}>
                        {productImageCardList}
                    </div>
                }
                {
                    (productImageCardList.length === 1) &&
                    <div style={{justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        {productImageCardList}
                    </div>
                }
            </div>
        </div>
    );
};
export default MoreDesigns;