import React, {useState} from 'react'
import {Input, Row, Typography, Col, Button, Drawer} from "antd";
import {useNavigate} from "react-router-dom";
import {navigationLinks} from "../../../constants/NavigationLinks";
import SizeChart from "../../common/SizeChart";

const StandardSize = (props) => {

    const { Text, Link } = Typography;
    const { TextArea } = Input;

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [preferredSize, setPreferredSize] = useState("");
    const [address, setAddress] = useState("");
    const [isSizeChartDrawerOpen, setSizeChartDrawerOpen] = useState(false);
    const [isWarningHidden, setWarningHidden] = useState(true);

    const handleNameChange = (event) => { setName(event.target.value); }
    const handlePhoneNumberChange = (event) => { setPhoneNumber(event.target.value); }
    const handleAddressChange = (event) => { setAddress(event.target.value); }

    const customerDetails = name + " | " + phoneNumber
    const customerResponse = preferredSize + " | " + address

    const getSelectedSizeText = () => {
        if(preferredSize === "") return (<Text type={'danger'}> Please select your preferred size </Text>)
        else return (<Text type={'success'}> Great! Your preferred size is {preferredSize} </Text>)
    }

    const handleBuyNowClick = () => {
        if(name === "" || phoneNumber === "" || preferredSize === "" || address === "") {
            setWarningHidden(false);
        } else {
            const navigationLink = navigationLinks.ORDER_CONFIRMATION + props.catalogCode + "." +
                props.productCode + "." + props.designNumber + "." + "2" + "." + customerDetails + "." + customerResponse;
            navigate(navigationLink);
        }
    }

    return(
        <div style={{paddingTop: '1em', paddingLeft: '1.5em', paddingBottom: '2em', paddingRight: '1.5em'}}>
            <div>
                <Row>
                    <Col span={19}><Text strong> Select Size </Text></Col>
                    <Col span={5}><Link onClick={() => setSizeChartDrawerOpen(true)}> Size Chart  </Link></Col>
                    <Drawer placement="bottom" height={650} onClose={() => setSizeChartDrawerOpen(false)} visible={isSizeChartDrawerOpen}>
                        <SizeChart />
                    </Drawer>
                </Row>
            </div>

            <div style={{paddingBottom: '1em'}}>
                <div style={{paddingBottom: '1em', paddingTop: '1em'}}>
                    <Row>
                        <Col offset={2}> <Button shape="round" onClick={() => setPreferredSize("S")}> S </Button> </Col>
                        <Col offset={1}> <Button shape="round" onClick={() => setPreferredSize("M")}> M </Button> </Col>
                        <Col offset={1}> <Button shape="round" onClick={() => setPreferredSize("L")}> L </Button> </Col>
                        <Col offset={1}> <Button shape="round" onClick={() => setPreferredSize("XL")}> XL </Button> </Col>
                        <Col offset={1}> <Button shape="round" onClick={() => setPreferredSize("XXL")}> XXL </Button> </Col>
                    </Row>
                </div>
                <Row> <Text> {getSelectedSizeText()} </Text> </Row>
            </div>

            <div>
                <Input placeholder="Your Name" onChange={handleNameChange} /><br/><br/>
                <Input placeholder="Phone Number" onChange={handlePhoneNumberChange} /><br/><br/>
                <TextArea autoSize={{ minRows: 3}} placeholder="Delivery Address" onChange={handleAddressChange} /><br/><br/>
                <div id='ScheduleMeasurementButton' style={{paddingLeft: "4em", paddingRight: '4em'}}>
                    <Row><Button type={'primary'} shape="round" block onClick={handleBuyNowClick}>Confirm Order Details</Button></Row>
                </div>
                <div style={{paddingTop: '1em'}} hidden={isWarningHidden}>
                    <Row justify={'center'}>
                        <Text type={'danger'}> Please fill all the details to proceed forward </Text>
                    </Row>
                </div>
            </div>
        </div>
    );
};
export default StandardSize;