import React, {useEffect} from 'react'
import {Button, Checkbox, Container, Form, Header, Message} from "semantic-ui-react";
import {onSubmit} from "../../../api/ContactUsAPI";
import ReactGA from "react-ga4";

const ContactUsPage = () => {

    useEffect(() => { document.title = "Contact Us" }, []);
    ReactGA.send({ hitType: "pageview"});

    const [checked, setChecked] = React.useState(false);
    const [isSuccessMessageVisible, setSuccessMessageVisible] = React.useState(false);
    const [isErrorMessageVisible, setErrorMessageVisible] = React.useState(false);

    const successMessage = "Thank you for reaching out to us. We'll be in touch with you shortly."
    const errorMessage = "Please fill your name & contact number before submitting the form."

    const handleCheckBoxClick = () => {
        if(checked) setChecked(false);
        else setChecked(true);
    }

    const handleSubmitClick = () => {
        const name = document.getElementById('name').value;
        const number = document.getElementById('number').value;
        const query = document.getElementById('query').value;

        if((name === undefined || name === "" || name === null) &&
            (number === undefined || name === "" || number === null)) {
            setErrorMessageVisible(true);
        } else {
            setErrorMessageVisible(false);
            setTimeout(() => setSuccessMessageVisible(true), 1000)
            onSubmit(name, number, query);
        }
    }

    return(
        <Container textAlign={"left"} style={{padding: '3em 0em 5em 0em', minHeight: '37em'}}>
            <Header textAlign='left' as='h1' style={{fontSize: '3em', padding: '1.5em 0em 0em 0em'}}>Contact Us</Header>

            <Message success hidden={!isSuccessMessageVisible} header={successMessage} content='Until then, stay safe & happy :)'/>
            <Message error hidden={!isErrorMessageVisible} header={errorMessage} content='This information will help us to serve you better :)'/>

            <Header as='h3'>Let our representative reach out to you to understand your requirements</Header>

            <Form>
                <Form.Field width={9} required><input placeholder='Name' id="name" /></Form.Field>
                <Form.Field width={9} required><input placeholder='Mobile Number' id="number" /></Form.Field>
                <Form.Field width={15}><input placeholder='How can we help you... (optional)' id="query" /></Form.Field>
                <Form.Field>
                    <Checkbox checked={checked} onClick={handleCheckBoxClick} label='I authorize Righter to reach out to me via Call, WhatsApp or SMS'/>
                </Form.Field>
                <Button type='submit' secondary disabled={!checked} onClick={() => handleSubmitClick()}>Submit</Button>
            </Form>
        </Container>
    );
};

export default ContactUsPage;