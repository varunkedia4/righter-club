import React, {useEffect} from 'react'
import ReactGA from "react-ga4";
import {commonConstants} from "../../../constants/Common";
import {Row, Typography} from "antd";

const PrivacyPolicyPage = () => {

    useEffect(() => { document.title = commonConstants.PRIVACY_POLICY }, []);
    ReactGA.send({ hitType: "pageview"});

    const { Text, Title } = Typography;

    return (
        <div style={{paddingTop: '3.5em'}}>
            <div id='PageTitle' style={{backgroundColor: "#e9f1f9", paddingLeft: "1.5em", paddingTop: '1em', marginBottom: '1em'}}>
                <Row><Title level={4}>{commonConstants.PRIVACY_POLICY}</Title></Row>
            </div>

            <div style={{paddingLeft: '1.5em', paddingRight: '1.5em'}}>
                <div style={{paddingBottom: '1em'}}>
                    <Text type={'secondary'}> Effective date: Nov 1st </Text>
                </div>

                <div style={{paddingBottom: '2em'}}>
                    <Text>
                        Welcome to righter.club, a software platform that enables users to meet professionally with relevant
                        individuals that share interests and goals.
                        The platform is managed by KidXL Private Limited (&quot;KidXL,&quot;
                        &quot;we,&quot; &quot;us&quot; or &quot;our&quot;), a software company that enables the purchase of custom-made outfits on its
                        platform.
                        This Privacy Policy (&quot;Our Policy&quot;, or the &quot;Policy&quot;) explains how we collect, use, share and protect
                        information in relation to our website Righter.club, and any software provided on or in connection with
                        our services (collectively, the &quot;Service&quot;), and your choices about the collection and use of your
                        information.
                        Our Policy applies to all visitors, users, and others who access the Service (&quot;Users&quot;).
                    </Text>
                </div>


                <div style={{paddingBottom: '1em'}}>
                    <Title level={4}> Information we collect </Title>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Title level={5}> Registration Information </Title>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Text>
                        We may collect information needed to register and sign into the Service, such as your e-mail address
                        and phone number (if applicable).
                    </Text>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Title level={5}> Profile Information </Title>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Text>
                        We may collect personally identifiable information such as your name, picture, country, city, taste &amp;
                        preference (if applicable).
                    </Text>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Title level={5}> Location Information </Title>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Text>
                        We may collect location data while you are actively using the Service on a mobile device. This
                        information is not shared externally and is used by the Service to determine connections within your
                        vicinity who are also actively using the Service.
                    </Text>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Title level={5}> Google Permissions </Title>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Text>
                        We may ask for some Google permissions allowing us to register and authenticate you on the Service
                        using Google. By default, we retrieve certain information such as your Google id, email address,
                        contacts, and calendar. This information is used to help us easily connect you to the Service and to
                        help us find new connections for you to meet efficiently.
                    </Text>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Title level={5}> Logging Information </Title>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Text>
                        We log information reported by our servers or your device each time you use the Service. This
                        information includes your Internet Protocol (&quot;IP&quot;) address, browser type, device platform (iOS,
                        Android), and user id. This information is used for diagnostics and to improve our Service.
                    </Text>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Title level={4}> How we use your information </Title>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Text>
                        In addition to some of the specific uses of information we describe in this Privacy Policy, we may use
                        information that we receive to:
                        <ul>
                            <li>help you efficiently sign in and authenticate with the Service</li>
                            <li>provide personalized suggestions and information to you and others</li>
                            <li>provide, improve, test, and monitor the effectiveness of our Service</li>
                            <li>develop and test new products and features</li>
                            <li>for technical support and detecting bugs and/or crashes in our Service</li>
                            <li>monitor metrics such as total number of visitors, traffic, and geographic patterns</li>
                        </ul>
                    </Text>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Title level={4}> Sharing of your information </Title>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Text>
                        We will not rent or sell your information to third parties without your consent, except as noted in this
                        Policy.
                    </Text>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Title level={5}> Assignment and/or Change of Control </Title>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Text>
                        If we incorporate, sell, or otherwise transfer part or the whole of the Service, User Content and any
                        other information collected through the Service may be assigned and/or transferred to the new entity.
                        The buyer, transferee, or new entity will have to honor the commitments we have made in this Privacy
                        Policy.
                    </Text>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Title level={5}> Instances where we may be required to share your information </Title>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Text>
                        KidXL will disclose your information where required to do so by law or by judicial process or if we
                        reasonably believe that such action is necessary to:
                        <ul>
                            <li>comply with the law and the reasonable requests of law enforcement</li>
                            <li>enforce our Terms of Use</li>
                            <li>protect the security or integrity of our Service</li>
                            <li>exercise or protect the rights, property, or personal safety of KidXL, our Users or others</li>
                        </ul>
                    </Text>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Title level={4}> How we store your information </Title>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Title level={5}> Storage and Processing </Title>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Text>
                        Information collected through the Service may be stored and processed in India, or any other country
                        in which the Service is made available. The information will be stored in tools, machines, databases
                        and/or facilities provided and maintained by KidXL or Service Providers.
                        Anonymized user data may be accessible to certain types of persons involved with the operation of
                        the Service (administration, sales, marketing, legal, system administration, developers, and/or
                        designers) or Service Providers (such as third party technical service providers, mail carriers, hosting
                        providers, IT companies, communications agencies) appointed, if necessary to transfer, back-up, or
                        store the data.
                    </Text>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Text>
                        We use commercially reasonable safeguards to help keep the information collected through the
                        Service secure and take reasonable steps (such as using the OAuth Protocol) to verify your identity
                        before granting you access to your account. However, KidXL cannot ensure the security of any
                        information you transmit to KidXL or guarantee that information on the Service may not be accessed,
                        disclosed, altered, or destroyed.
                    </Text>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Text>
                        Your privacy settings may also be affected by changes made by other social media services. We are
                        not responsible for the functionality, privacy, or security measures of any other organization.
                    </Text>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Title level={4}> Your choices about your information </Title>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Title level={5}> Your account information and profile/privacy settings </Title>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Text>
                        <ul>
                            <li>
                                You may update your account, including privacy and permissions settings, at any time by
                                accessing the Service and changing your profile settings.
                            </li>
                            <li>
                                You may unsubscribe from any email communications or promotions that are not Service-
                                related (e.g., account verification, purchase and billing confirmations and reminders,
                                changes/updates to features of the Service, technical and security notices are all Service-
                                related).
                            </li>
                        </ul>
                    </Text>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Title level={5}> How long we keep your User Content </Title>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Text>
                        Following termination or deactivation of your account, KidXL may retain information (including your
                        profile information) and User Content for a commercially reasonable time for backup, archival, and/or
                        audit purposes.
                    </Text>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Title level={4}> How to contact us </Title>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Text>
                        If you have any questions about this Privacy Policy or the Service, you may email us using contact
                        (at) righter.club (Please replace the &quot; (at) &quot; with an &quot;@&quot; sign before emailing).
                    </Text>
                </div>

                <div style={{paddingBottom: '1em'}}>
                    <Title level={4}> Changes to our policy </Title>
                </div>

                <div style={{paddingBottom: '3em'}}>
                    <Text style={{fontSize: '1em', padding: '0em 0em 2.5em 0em', color: '#484848'}}>
                        KidXL may modify or update this Privacy Policy from time to time, so please review it periodically. We
                        may provide you additional forms of notice of modifications or updates as appropriate under the
                        circumstances. Your continued use of KidXL or the Service after any modification to this Privacy
                        Policy will constitute your acceptance of such modification.
                        Copyright © 2021 KidXL Private Limited contact@righter.club
                    </Text>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;