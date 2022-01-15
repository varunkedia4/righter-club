import React, {useState} from 'react'
import {Button, Input, Row, Typography} from "antd";
import {useNavigate} from "react-router-dom";
import {navigationLinks} from "../../../constants/NavigationLinks";

const StitchToFit = (props) => {

    const { Text } = Typography;
    const { TextArea } = Input;

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [preferredDate, setPreferredDate] = useState("");
    const [address, setAddress] = useState("");
    const [isWarningHidden, setWarningHidden] = useState(true);

    const handleNameChange = (event) => { setName(event.target.value); }
    const handlePhoneNumberChange = (event) => { setPhoneNumber(event.target.value); }
    const handlePreferredDateChange = (event) => { setPreferredDate(event.target.value); }
    const handleAddressChange = (event) => { setAddress(event.target.value); }

    const customerDetails = name + " | " + phoneNumber
    const customerResponse = preferredDate + " | " + address

    const handleScheduleMeasurementClick = () => {
        if(name === "" || phoneNumber === "" || preferredDate === "" || address === "") {
            setWarningHidden(false);
        } else {
            const navigationLink = navigationLinks.ORDER_CONFIRMATION + props.catalogCode + "." +
                props.productCode + "." + props.designNumber + "." + "1" + "." + customerDetails + "." + customerResponse;
            navigate(navigationLink);
        }
    }

    return(
        <div style={{paddingTop: '1em', paddingLeft: '1.5em', paddingBottom: '2em', paddingRight: '1.5em'}}>
            <div> <Text strong> Stitch to Fit </Text> </div>

            <div style={{paddingTop: '0.3em', paddingBottom: '1em'}}>
                <Text type={"secondary"}> Righter certified tailor will visit at your place on preferred date to take the right measurement</Text>
            </div>

            <div>
                <Input placeholder="Your Name" onChange={handleNameChange} /><br/><br/>
                <Input placeholder="Phone Number" onChange={handlePhoneNumberChange} /><br/><br/>
                <Input placeholder="Preferred Date - DD-MM-YYYY" onChange={handlePreferredDateChange} /><br/><br/>
                <TextArea autoSize={{ minRows: 3}} placeholder="Measurement Address" onChange={handleAddressChange} /><br/><br/>
                <div id='ScheduleMeasurementButton' style={{paddingLeft: "4em", paddingRight: '4em'}}>
                    <Row><Button type={'primary'} shape="round" block onClick={handleScheduleMeasurementClick}>Confirm Order Details</Button></Row>
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
export default StitchToFit;