import React, {useEffect} from 'react'
import {Container, Header, Card} from "semantic-ui-react";
import ReactGA from "react-ga4";
import {useNavigate} from "react-router-dom";
import {redirectionLinks} from "../../../constants/ApplicationConstants";

const BlogsPage = () => {

    const navigate = useNavigate();
    useEffect(() => { document.title = "Blogs" }, []);
    ReactGA.send({ hitType: "pageview"});

    return(
        <Container textAlign={'left'} style={{minHeight: '37em', paddingBottom:'3em'}}>
            <Header textAlign='left' as='h1' style={{fontSize: '3em', padding: '2.5em 0em 0.5em 0em'}}>Blogs</Header>

            <Card
                target="_blank"
                fluid
                href={redirectionLinks.SLOWEST_ADOPTION_BLOG}
                onClick={navigate(redirectionLinks.SLOWEST_ADOPTION_BLOG)}
                header='Why online cloth purchasing has the slowest adoption across the categories?'
                description='For a consumer, shopping not only solves for functional need, but it also makes up for their emotional needs. Broadly, shopping reflects only the product element of itself. However, there is a lot of service element involved in the entire shopping journey. For the consumers, online & offline way of shopping is just a medium. The end goal which they want to achieve, is the same in both the cases. Every person chooses the medium basis the variation in weightages to the various elements of the shopping journey.'
                extra='Read more...'
            />

            <Card
                target="_blank"
                fluid
                href={redirectionLinks.APPAREL_OYO_BLOG}
                onClick={navigate(redirectionLinks.APPAREL_OYO_BLOG)}
                header='OYO of Apparel Industry'
                description='Manufacturing in apparel industry is not a new concept. It has been there since ages. However, the access to bespoke manufacturing is limited to very few mostly the upper strata of our society. Companies like Righter are making the bespoke manufacturing affordable by using the new-age technologies to improve the supply chain inefficiencies.'
                extra='Read more...'
            />

            <Card
                target="_blank"
                fluid
                href={redirectionLinks.INDIAN_WEDDING_BLOG}
                onClick={navigate(redirectionLinks.INDIAN_WEDDING_BLOG)}
                header='Is the big Indian wedding market rip enough for a big shift?'
                description='Today’s multi-cultural generation are now realizing a void for the existence of organized players across categories who can help them make their big day a memorable one. They are forced to be dependent on the unorganized players and compromise a lot in the overall journey in terms of variety and visualization. Apart from that, trust deficit between the two parties, non-fulfillment of the promises made at the time of purchase are the most common challenges consumers are facing.'
                extra='Read more...'
            />
        </Container>
    );
};
export default BlogsPage;