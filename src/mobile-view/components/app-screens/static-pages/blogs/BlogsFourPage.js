import React, {useEffect} from 'react'
import ReactGA from "react-ga4";
import {Typography} from "antd";
import {blogsTitle, blogsReadTime, blogsWriter} from "../../../../constants/Blogs";
import {navigationLinks} from "../../../../constants/NavigationLinks";

const BlogsFourPage = () => {

    useEffect(() => { document.title = blogsTitle.FOUR }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Text, Title } = Typography;

    return (
        <div style={{paddingTop: '3.5em'}}>
            <div id='BlogTitle' style={{backgroundColor: "#E8E8E8", paddingTop: '1.5em', marginBottom: '1em', textAlign: 'center', paddingBottom: '1em'}}>
                <Title level={5}>{blogsTitle.FOUR}</Title>
                <Text>{blogsWriter.FOUR + " | " + blogsReadTime.FOUR}</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Dear Raj,</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Today I want to talk man to man.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>To try to get you to be a perfect groom on the day. Notice how I don’t call it your day. We know it won’t be your day. At least that is not how you see it even if everyone is making you to believe so. You are neither anxious nor chilled about it. There is some feeling oscillating between the two emotions. About how your family is going to feel, how your to-be wife is going to have a good time, how all of their imagination of the day will come to reality. You’ve seen many, and heard many more. As the day approaches, you secretly wish to reset expectations and reduce the burden of having a perfect wedding. Because you’re okay. Because it is no big deal. For you. Because all that matters is not what goes on the instagram but the smile from your loved ones, which one would miss in the blind spot of the flashing lens.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>Leading to the day, you can’t show any emotions yet there are a thousand things going on in your mind. Like a stock market’s index, ticking up and down with each passing second unpredictably. Yet you do the drill. Go past all the decisions and make a brave appearance. Consistent like a clock. Because that’s what you saw your dad do and you know no better now. You show up because you need to.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>A lot of things are happening around. You are too mature to resist, change or obstruct so you let it be. You are too secure to challenge a tradition, yet the logical you smirks at every ritual that doesn’t make sense. You go through the routine, the customary and the so-called mandatory. You let the reigns of the occasion be handled by anyone willing to spread cheer. Not because you know they’re perfect. Because you know there’s beauty in imperfection and there’s joy in letting it flow. You seek a frictionless flow and for you it’s heartwarming.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>As the day approaches, the commitments of the midnight texts to Simran are coming alive. There are too many cooks in everything that was planned but there’s a unification of soul between the two of you. The untold, unspoken understanding that ‘it’s okay’. You both laugh about it and cherish the process. You become the defacto camera man for her. Not because the candid photographer isn’t skilled enough. But because only you know her preferred angle of pose and the lighting mode.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>The day. It does appear sooner than it warned. You look at Simran and wonder what could you’ve done to deserve such a pretty one. You almost drown in guilt to not have thought about this enough. Not having put in the effort to match up to her. May be you did but it’ll still fall short. May be the idea is to bask in the pride of being accepted by such a gorgeous girl and not about your looks.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '1em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>All that can be right is for you to reassure her about her preparation and her appearance. It’s her, all the way. For now and forever. What’s left for you is to fit in. Yes. FIT IN.</Text>
            </div>
            <div style={{ textAlign: 'left',  paddingBottom: '2em', paddingLeft: '1em', paddingRight: '1em'}}>
                <Text>For your wedding, therefore, we only ask you to fit in. Be the perfect groom and fit in. FIT-IN an attire from <a href={navigationLinks.HOME}>righter.club</a></Text>
            </div>
        </div>
    );
};
export default BlogsFourPage;