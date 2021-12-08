import {Button, Grid, Header, Icon} from "semantic-ui-react";
import React from "react";
import {useNavigate} from "react-router-dom";
import {sendClickEvent} from "../../../util/CommonUtils";
import {redirectionLinks} from "../../../constants/ApplicationConstants";

const ItemDetails = (props) => {

    const navigate = useNavigate();
    const fabricSampleRedirectionLink = redirectionLinks.GET_FABRIC_SAMPLE + props.tab + "." + props.item.productCode;
    const scheduleMeasurementRedirectionLink = redirectionLinks.SCHEDULE_MEASUREMENT + props.tab + "." + props.item.productCode;

    const handleFabricSampleButtonClick = () => {
        sendClickEvent("item-"+props.tab+"-button", "Get Fabric Sample Button", "get-fabric-sample");
        navigate(fabricSampleRedirectionLink);
    }

    const handleScheduleMeasurementButtonClick = () => {
        sendClickEvent("item-"+props.tab+"-button", "Schedule Measurement Button", "schedule-measurement");
        navigate(scheduleMeasurementRedirectionLink);
    }

    return(
        <Grid divided='vertically' stackable>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <Header as='h1'> {props.item.name} </Header>
                    <Header as='h1' style={{color: '#05445e'}}> Rs. {props.item.price} </Header>
                    <p style={{fontSize: '1em', color: '#18a558'}}> (Inclusive of all taxes) </p>
                    <Button size={'huge'} style={{background: '#05445e'}} inverted href={scheduleMeasurementRedirectionLink} onClick={() => handleScheduleMeasurementButtonClick()}>
                        Schedule Measurement
                    </Button>
                    <Button size={'huge'} style={{color: '#05445e'}} basic href={fabricSampleRedirectionLink} onClick={() => handleFabricSampleButtonClick()}>
                        Get Fabric Sample
                    </Button>
                    <Header style={{color: '#4e4f50'}} as='h4'> Our representative will get in touch with you on call/whatsapp for scheduling the measurement at your home. </Header>
                    <p style={{fontSize: '1em', padding: '0.5em 0em 0em 0em'}}> <Icon name='truck' /> Estd. Delivery time: {props.item.estDelivery} days </p>
                    <p style={{fontSize: '1em'}}> <Icon name='rupee' /> Pay 50% before measurement & rest 50% post delivery </p>
                    <p style={{fontSize: '1em'}}> <Icon name='redo' /> Free resizing till 2 years of purchase </p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <Header as='h4'> Color </Header>
                    <p style={{fontSize: '1em', color: '#746c70'}}> <strong>Available in : </strong> {props.item.color[0]}  </p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <Header as='h4'> Material & Care </Header>
                    <p style={{fontSize: '1em', color: '#746c70'}}> <strong>Material type : </strong> {props.item.materialType}  </p>
                    <p style={{fontSize: '1em', color: '#746c70'}}> <strong>Wash care : </strong> {props.item.washCare} </p>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1}>
                <Grid.Column>
                    <Header as='h4'> Product Details </Header>
                    <p style={{fontSize: '1em', color: '#746c70'}}> <strong>Product code : </strong> {props.item.productCode}  </p>
                    <p style={{fontSize: '1em', color: '#746c70'}}> <strong> Seller name : </strong> {props.item.seller} </p>
                    <p style={{fontSize: '1em', color: '#746c70'}}> <strong> Country of origin : </strong> India </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default ItemDetails;