import {useNavigate} from "react-router-dom";
import {Button, Col, Drawer, Row} from "antd";
import {navigationLinks} from "../../../constants/NavigationLinks";
import {catalogName} from "../../../constants/Common";
import React from "react";

const CatalogDrawer = (props) => {

    const navigate = useNavigate();
    const handleNavigation = (navigationLink) => {
        navigate(navigationLink);
        props.setClose();
    }

    return(
        <div>
            {
                (props.drawerContents === "Category") &&
                <Drawer height={400} title="Category" placement={'bottom'} closable={true} onClose={props.setClose} visible={props.isOpen}>
                    <div>
                        <Row gutter={16}>
                            <Col span={10} offset={2}> <Button style={{width: '9em'}} onClick={() => handleNavigation(navigationLinks.TWO_PIECE_SUIT)}>{catalogName.TWO_PIECE_SUIT}</Button> </Col>
                            <Col span={12} > <Button style={{width: '9em'}} onClick={() => handleNavigation(navigationLinks.THREE_PIECE_SUIT)}>{catalogName.THREE_PIECE_SUIT}</Button> </Col>
                        </Row>
                    </div>

                    <div style={{paddingTop: '1em'}}>
                        <Row gutter={16}>
                            <Col span={10} offset={2}> <Button style={{width: '9em'}} onClick={() => handleNavigation(navigationLinks.CASUAL_BLAZER)}>{catalogName.CASUAL_BLAZER}</Button> </Col>
                            <Col span={12} > <Button style={{width: '9em'}} onClick={() => handleNavigation(navigationLinks.TUXEDO)}>{catalogName.TUXEDO}</Button> </Col>
                        </Row>
                    </div>

                    <div style={{paddingTop: '1em'}}>
                        <Row gutter={16}>
                            <Col span={10} offset={2}> <Button style={{width: '9em'}} onClick={() => handleNavigation(navigationLinks.SHERWANI)}>{catalogName.SHERWANI}</Button> </Col>
                            <Col span={12} > <Button style={{width: '9em'}} onClick={() => handleNavigation(navigationLinks.JODHPURI)}>{catalogName.JODHPURI}</Button> </Col>
                        </Row>
                    </div>

                    <div style={{paddingTop: '1em'}}>
                        <Row gutter={16}>
                            <Col span={10} offset={2}> <Button style={{width: '9em'}} onClick={() => handleNavigation(navigationLinks.NEHRU_JACKET)}>{catalogName.NEHRU_JACKET}</Button> </Col>
                            <Col span={12} > <Button style={{width: '9em'}} onClick={() => handleNavigation(navigationLinks.KURTA)}>{catalogName.KURTA}</Button> </Col>
                        </Row>
                    </div>

                    <div style={{paddingTop: '1em'}}>
                        <Row gutter={16}>
                            <Col span={10} offset={2}> <Button style={{width: '9em'}} onClick={() => handleNavigation(navigationLinks.TROUSER)}>{catalogName.TROUSER}</Button> </Col>
                            <Col span={12} > <Button style={{width: '9em'}} onClick={() => handleNavigation(navigationLinks.SHIRT)}>{catalogName.SHIRT}</Button> </Col>
                        </Row>
                    </div>
                </Drawer>
            }
            {
                (props.drawerContents === "Occasion") &&
                <Drawer height={300} title="Occasion" placement={'bottom'} closable={true} onClose={props.setClose} visible={props.isOpen}>
                    <div>
                        <Row gutter={16}>
                            <Col span={10} offset={2}> <Button style={{width: '9em'}} onClick={() => handleNavigation(navigationLinks.FESTIVES)}>{catalogName.FESTIVES}</Button> </Col>
                            <Col span={12} > <Button style={{width: '9em'}} onClick={() => handleNavigation(navigationLinks.REGULAR)}>{catalogName.REGULAR}</Button> </Col>
                        </Row>
                    </div>

                    <div style={{paddingTop: '1em'}}>
                        <Row gutter={16}>
                            <Col span={10} offset={2}> <Button style={{width: '9em'}} onClick={() => handleNavigation(navigationLinks.HALDI)}>{catalogName.HALDI}</Button> </Col>
                            <Col span={12} > <Button style={{width: '9em'}} onClick={() => handleNavigation(navigationLinks.MEHENDI)}>{catalogName.MEHENDI}</Button> </Col>
                        </Row>
                    </div>

                    <div style={{paddingTop: '1em'}}>
                        <Row gutter={16}>
                            <Col span={10} offset={2}> <Button style={{width: '9em'}} onClick={() => handleNavigation(navigationLinks.ENGAGEMENT)}>{catalogName.ENGAGEMENT}</Button> </Col>
                            <Col span={12} > <Button style={{width: '9em'}} onClick={() => handleNavigation(navigationLinks.WEDDING)}>{catalogName.WEDDING}</Button> </Col>
                        </Row>
                    </div>
                </Drawer>
            }
        </div>
    );
};

export default CatalogDrawer;