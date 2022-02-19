import React, {useEffect, useState} from 'react'
import ReactGA from "react-ga4";
import {commonConstants} from "../../../constants/Common";
import {Row, Typography, Button, Input} from "antd";
import {getAccessCode} from "../../../api/MirroSizeAPI";

const SmartBodyMeasurementPage = () => {

    useEffect(() => { document.title = commonConstants.SMART_BODY_MEASUREMENT}, []);
    ReactGA.send({hitType: "pageview"});

    const {Title, Text, Paragraph} = Typography;

    //Link Generation
    const [accessCode, setAccessCode] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [generateLinkButtonLabel, setGenerateLinkButtonLabel] = useState("Generate Link");
    const [generateLinkLoading, setGenerateLinkLoading] = useState(false);

    useEffect(() => {
        setGenerateLinkLoading(false);
        setGenerateLinkButtonLabel("Generate Link");
    }, [accessCode]);

    const handleGenerateLinkButtonClick = () => {
        setGenerateLinkLoading(true);
        setGenerateLinkButtonLabel("Generating Link");
        getAccessCode(customerName).then(response => {
            setAccessCode("https://user.mirrorsize.com/home/" + response.data.accessCode)
        })
    }

    //Measurement Generation
    // const [measurementDetails, setMeasurementDetails] = useState("");
    // const [inputAccessCode, setInputAccessCode] = useState("");
    // const [generateMeasurementDetailsButtonLabel, setGenerateMeasurementDetailsButtonLabel] = useState("Get Measurement Details");
    // const [generateMeasurementDetailsLoading, setGenerateMeasurementDetailsLoading] = useState(false);
    //
    // useEffect(() => {
    //     console.log(measurementDetails)
    //     setGenerateMeasurementDetailsLoading(false);
    //     setGenerateMeasurementDetailsButtonLabel("Get Measurement Details");
    // }, [measurementDetails]);
    //
    // const handleGetMeasurementButtonClick = () => {
    //     setGenerateMeasurementDetailsLoading(true);
    //     setGenerateMeasurementDetailsButtonLabel("Fetching Measurement Details");
    //     getMeasurementDetails(inputAccessCode).then(response => {setMeasurementDetails(response.data.accessCode)})
    // }

    return (
        <div style={{paddingTop: '3.5em'}}>
            <div id='PageTitle'
                 style={{backgroundColor: "#e9f1f9", paddingLeft: "1.5em", paddingTop: '1em', marginBottom: '1em'}}>
                <Row><Title level={4}>{commonConstants.SMART_BODY_MEASUREMENT}</Title></Row>
            </div>

            <div style={{paddingLeft: '1.5em', paddingRight: '1.5em', paddingBottom: '2em'}}>
                <Title level={5}>Accurate body measurement with the click of a button</Title>
                <Input placeholder="Customer Name" onChange={(event) => setCustomerName(event.target.value)} />
                <div style={{paddingTop: '1em'}}>
                    <Button type='primary' disabled={customerName === ""} loading={generateLinkLoading} shape='round' onClick={handleGenerateLinkButtonClick}>
                        {generateLinkButtonLabel}
                    </Button>
                </div>
                <div style={{paddingTop: '1em'}} hidden={accessCode === ""}>
                    <Text type='success'> Congratulations! We've generated a link for you.</Text>
                    <Paragraph copyable>{accessCode}</Paragraph>
                </div>
            </div>

            {/*<Divider />*/}

            {/*<div style={{paddingLeft: '1.5em', paddingRight: '1.5em', paddingBottom: '2em'}}>*/}
            {/*    <Title level={5}>Get measurement details with the click of a button</Title>*/}
            {/*    <Input placeholder="Access Code" onChange={(event) => setInputAccessCode(event.target.value)} />*/}
            {/*    <div style={{paddingTop: '1em'}}>*/}
            {/*        <Button type='primary' disabled={inputAccessCode === ""} loading={generateMeasurementDetailsLoading} shape='round' onClick={handleGetMeasurementButtonClick}>*/}
            {/*            {generateMeasurementDetailsButtonLabel}*/}
            {/*        </Button>*/}
            {/*    </div>*/}
            {/*    <div style={{paddingTop: '1em'}} hidden={measurementDetails === ""}>*/}
            {/*        <Text type='success'> Congratulations! We've fetched measurement details for you.</Text>*/}
            {/*        <Paragraph copyable>{measurementDetails}</Paragraph>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}
export default SmartBodyMeasurementPage;