import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import ReactGA from "react-ga4";
import {commonConstants} from "../../../constants/Common";
import {Row, Typography, Card} from "antd";
import {blogsTitle, blogsWriter, blogsReadTime} from "../../../constants/Blogs";
import {navigationLinks} from "../../../constants/NavigationLinks";
import {pageTitles} from "../../../constants/seo/PageTitles";

const BlogsPage = () => {

    useEffect(() => { document.title = pageTitles.BLOGS }, []);
    ReactGA.send({ hitType: "pageview"});

    const navigate = useNavigate();
    const { Title } = Typography;
    const { Meta } = Card;
    const handleNavigation = (navigationLink) => { navigate(navigationLink); }

    return (
        <div style={{paddingTop: '3.5em'}}>
            <div id='PageTitle' style={{backgroundColor: "#e9f1f9", paddingLeft: "1.5em", paddingTop: '1em', marginBottom: '1em'}}>
                <Row><Title level={4}>{commonConstants.BLOGS}</Title></Row>
            </div>

            <div id='blogs' style={{paddingLeft: "1.5em", paddingRight: '1.5em'}}>
                <Card style={{ marginBottom: '1em' }} onClick={() => handleNavigation(navigationLinks.BLOGS_ONE)}>
                    <p>{blogsTitle.ONE}</p><Meta description={blogsWriter.ONE + "  |  " + blogsReadTime.ONE}/>
                </Card>

                <Card style={{ marginBottom: '1em' }} onClick={() => handleNavigation(navigationLinks.BLOGS_TWO)}>
                    <p>{blogsTitle.TWO}</p><Meta description={blogsWriter.TWO + "  |  " + blogsReadTime.TWO}/>
                </Card>

                <Card style={{ marginBottom: '1em' }} onClick={() => handleNavigation(navigationLinks.BLOGS_THREE)}>
                    <p>{blogsTitle.THREE}</p><Meta description={blogsWriter.THREE + "  |  " + blogsReadTime.THREE}/>
                </Card>

                <Card style={{ marginBottom: '1em' }} onClick={() => handleNavigation(navigationLinks.BLOGS_FOUR)}>
                    <p>{blogsTitle.FOUR}</p><Meta description={blogsWriter.FOUR + "  |  " + blogsReadTime.FOUR}/>
                </Card>

                <Card style={{ marginBottom: '1em' }} onClick={() => handleNavigation(navigationLinks.BLOGS_FIVE)}>
                    <p>{blogsTitle.FIVE}</p><Meta description={blogsWriter.FIVE + "  |  " + blogsReadTime.FIVE}/>
                </Card>

                <Card style={{ marginBottom: '1em' }} onClick={() => handleNavigation(navigationLinks.BLOGS_SIX)}>
                    <p>{blogsTitle.SIX}</p><Meta description={blogsWriter.SIX + "  |  " + blogsReadTime.SIX}/>
                </Card>

                <Card style={{ marginBottom: '1em' }} onClick={() => handleNavigation(navigationLinks.BLOGS_SEVEN)}>
                    <p>{blogsTitle.SEVEN}</p><Meta description={blogsWriter.SEVEN + "  |  " + blogsReadTime.SEVEN}/>
                </Card>
            </div>
        </div>
    );
};

export default BlogsPage;