import React, {useState} from 'react'
import {Button, DatePicker, Input, message, Row, Typography} from "antd";
import {useNavigate} from "react-router-dom";
import {navigationLinks} from "../../../constants/NavigationLinks";
import {submitRequest} from "../../../api/SubmitRequestAPI";
import {emailSubject} from "../../../constants/Common";

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
    const handleAddressChange = (event) => { setAddress(event.target.value); }

    const customerDetails = name + " | " + phoneNumber
    const customerResponse = preferredDate + " | " + address
    const productId = props.productCode + '00' + props.designNumber;

    const handleScheduleMeasurementClick = () => {
        if(name === "" || phoneNumber === "" || preferredDate === "" || address === "") {
            setWarningHidden(false);
        } else {
            message.loading({content: 'Placing your order...', style: { marginTop: '12vh'}}, 2);
            setTimeout(() => {navigate(navigationLinks.THANK_YOU)}, 2000);
            submitRequest(emailSubject.STITCH_TO_FIT, customerDetails, productId, customerResponse);
        }
    }

    return(
        <div style={{paddingTop: '1em', paddingLeft: '1.5em', paddingBottom: '2em', paddingRight: '1.5em'}}>

            <div style={{paddingTop: '0.3em', paddingBottom: '1em'}}>
                <Text type={"secondary"}> Righter certified tailor will visit at your place on preferred date to take the right measurement</Text>
            </div>

            <div>
                <Input placeholder="Your Name" onChange={handleNameChange} /><br/><br/>
                <Input placeholder="Phone Number" onChange={handlePhoneNumberChange} /><br/><br/>
                <DatePicker onChange={(dateString) => setPreferredDate(dateString._d)} />
                <TextArea style={{marginTop: '1.5em'}} autoSize={{ minRows: 3}} placeholder="Measurement Address" onChange={handleAddressChange} /><br/><br/>
                <div id='ScheduleMeasurementButton' style={{paddingLeft: "4em", paddingRight: '4em'}}>
                    <Row><Button type={'primary'} shape="round" block onClick={handleScheduleMeasurementClick}>Buy Now</Button></Row>
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