import React, {useEffect, useState} from 'react'
import ReactGA from "react-ga4";
import {commonConstants, emailSubject} from "../../../constants/Common";
import { Rate, Typography, Row, Input, Button } from 'antd';
import {submitRequest} from "../../../api/SubmitRequestAPI";
import {getConfirmationMessage} from "../../../util/CommonUtils";

const SendUsFeedbackPage = () => {

    useEffect(() => { document.title = commonConstants.SEND_US_YOUR_FEEDBACK }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Title } = Typography;
    const { TextArea } = Input;

    const desc = ['Terrible', 'Bad', 'Satisfactory', 'Good', 'Wonderful'];

    const [rating, setRating] = useState(0)
    const [improvement, setImprovement] = useState("")
    const [appreciation, setAppreciation] = useState("")
    const handleRatingChange = (value) => { setRating(value); }
    const handleImprovementChange = (event) => { setImprovement(event.target.value); }
    const handleAppreciationChange = (event) => { setAppreciation(event.target.value); }

    const handleFeedbackSubmit = () => {
        getConfirmationMessage('Submitting...', 'Thank you for your feedback. This will help us serve you better.', 1000, 4);
        const customerResponse = rating + " | " + improvement + " | " + appreciation
        submitRequest(emailSubject.SEND_US_YOUR_FEEDBACK, commonConstants.NONE, commonConstants.NONE, customerResponse)
    }

    return (
        <div style={{paddingTop: '3.5em'}}>
            <div id='PageTitle' style={{backgroundColor: "#e9f1f9", paddingLeft: "1.5em", paddingTop: '1em', marginBottom: '1em'}}>
                <Row><Title level={4}>{commonConstants.SEND_US_YOUR_FEEDBACK}</Title></Row>
            </div>

            <div style={{paddingLeft: "1.5em", paddingBottom: '1em', paddingRight: '1.5em'}}>
                <div style={{paddingBottom: '1em'}}>
                    <Row><Title level={5}>Rate your experience</Title></Row>
                    <span>
                        <Rate tooltips={desc} onChange={handleRatingChange} value={rating} />
                        {rating ? <span className="ant-rate-text">{desc[rating - 1]}</span> : ' '}
                    </span>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Row><Title level={5}>Tell us what can be improved</Title></Row>
                    <Row><TextArea rows={4} onChange={handleImprovementChange}/></Row>
                </div>

                <div style={{paddingBottom: '2em'}}>
                    <Row><Title level={5}>Tell us what we got right</Title></Row>
                    <Row><TextArea rows={4} onChange={handleAppreciationChange}/></Row>
                </div>

                <div style={{paddingLeft: "2.5em", paddingRight: '2.5em', paddingBottom: '2em'}}>
                    <Row><Button type='primary' shape="round" block onClick={handleFeedbackSubmit}>Submit Feedback</Button></Row>
                </div>
            </div>
        </div>
    );
};

export default SendUsFeedbackPage;