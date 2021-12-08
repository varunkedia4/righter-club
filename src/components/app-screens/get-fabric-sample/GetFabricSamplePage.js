import React, {useEffect} from 'react'
import {Button, Checkbox, Container, Form, Header, Message} from "semantic-ui-react";
import {useParams} from "react-router-dom";
import {onSubmit} from "../../../api/GetFabricSampleAPI";
import {getCategoryName, getItem, getItemList} from "../../../util/CommonUtils";
import ReactGA from "react-ga4";

const GetFabricSamplePage = () => {

    useEffect(() => { document.title = "Get Fabric Sample" }, []);
    ReactGA.send({ hitType: "pageview"});

    const { id } = useParams();
    const categoryCode = id.split('.')[0];
    const productCode = id.split('.')[1];

    const item = getItem(getItemList(categoryCode), productCode);
    const productCategoryName = getCategoryName(categoryCode);

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
        const address = document.getElementById('address').value;

        if((name === undefined || name === "" || name === null) &&
            (number === undefined || name === "" || number === null)) {
            setErrorMessageVisible(true);
        } else {
            setErrorMessageVisible(false);
            setTimeout(() => setSuccessMessageVisible(true), 1000)
            onSubmit(name, number, address, item.name, item.productCode, productCategoryName, item.seller);
        }
    }

    return(
        <Container textAlign={"left"} style={{padding: '3em 0em 5em 0em', minHeight: '37em'}}>
            <Header textAlign='left' as='h1' style={{fontSize: '3em', padding: '1.5em 0em 0em 0em'}}>Get Fabric Sample</Header>

            <Message success hidden={!isSuccessMessageVisible} header={successMessage} content='Until then, stay safe & happy :)'/>
            <Message error hidden={!isErrorMessageVisible} header={errorMessage} content='This information will help us to serve you better :)'/>

            <Header as='h3'>We will send fabric sample to your home</Header>
            <p>Product name: {item.name}   |    Product code: {item.productCode}</p>

            <Form>
                <Form.Field width={9} required><input placeholder='Name' id="name" /></Form.Field>
                <Form.Field width={9} required><input placeholder='Mobile Number' id="number" /></Form.Field>
                <Form.Field width={15} required><input placeholder='Address' id="address" /></Form.Field>
                <Form.Field>
                    <Checkbox checked={checked} onClick={handleCheckBoxClick} label='I authorize Righter to reach out to me via Call, WhatsApp or SMS'/>
                </Form.Field>
                <Button type='submit' secondary disabled={!checked} onClick={() => handleSubmitClick()}>Submit</Button>
            </Form>
        </Container>
    );
};

export default GetFabricSamplePage;