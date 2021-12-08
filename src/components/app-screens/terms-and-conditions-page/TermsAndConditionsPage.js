import React, {useEffect} from 'react'
import {Container, Header} from "semantic-ui-react";
import ReactGA from "react-ga4";

const TermsAndConditionsPage = () => {

    useEffect(() => { document.title = "Terms & Conditions" }, []);
    ReactGA.send({ hitType: "pageview"});

    return(
        <Container textAlign={'left'}>
            <Header textAlign='left' as='h1' style={{fontSize: '3em', padding: '2.5em 0em 0em 0em'}}>
                Terms & Conditions
            </Header>

            <Header textAlign='left' as='h3' style={{fontSize: '2em'}}>
                Welcome to righter.club!
            </Header>
            <p style={{fontSize: '1em', color: '#484848'}}>
                These terms and conditions outline the rules and regulations for the use of KidXL Private Limited&#39;s
                Website, located at www.righter.club. This website offers visitors a platform where they can get a
                quality outfit stitched to their measurement and delivered to their doorstep at an effective price.
            </p>
            <p style={{fontSize: '1em', color: '#484848'}}>
                By accessing or using the website of our service, you approve that you have read, understood, and
                agree to be bound by these Terms. Do not continue to use righter.club if you do not agree to take all
                of the terms and conditions stated on this page.
            </p>
            <p style={{fontSize: '1em', color: '#484848'}}>
                The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer
                Notice and all Agreements: &quot;Client&quot;, &quot;You&quot; and “Your&quot; refers to you, the person log on this website
                and compliant to the Company’s terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and
                &quot;Us&quot;, refers to our Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client and us. All terms refer
                to the offer, acceptance, and consideration of payment necessary to undertake the process of our
                assistance to the Client in the most appropriate manner for the express purpose of meeting the
                Client’s needs in respect of provision of the Company’s stated services, in accordance with and
                subject to, prevailing law of India. Any use of the above terminology or other words in the singular,
                plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to
                same.
            </p>

            <Header textAlign='left' as='h3' style={{fontSize: '2em'}}>
                Cookies
            </Header>
            <p style={{fontSize: '1em', color: '#484848'}}>
                We employ the use of cookies. By accessing righter.club, you agreed to use cookies in agreement
                with the KidXL Private Limited&#39;s Privacy Policy.
            </p>
            <p style={{fontSize: '1em', color: '#484848'}}>
                Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are
                used by our website to enable the functionality of certain areas to make it easier for people visiting our
                website. Some of our affiliate/advertising partners may also use cookies.
            </p>

            <Header textAlign='left' as='h3' style={{fontSize: '2em'}}>
                Age
            </Header>
            <p style={{fontSize: '1em', color: '#484848'}}>
                To use our website and/or receive our services, you must be of the legal age of majority in your
                jurisdiction, and possess the legal authority, right and freedom to enter into these Terms as a binding
                agreement. You are not allowed to use this website and/or receive services if doing so is prohibited in
                your country or under any law or regulation applicable to you.
            </p>
            <p style={{fontSize: '1em', color: '#484848'}}>
                We may permanently or temporarily terminate or suspend your access to the service without notice
                and liability for any reason, including if in our sole determination you violate any provision of these
                Terms or any applicable law or regulations.
            </p>

            <Header textAlign='left' as='h3' style={{fontSize: '2em'}}>
                Operations
            </Header>
            <p style={{fontSize: '1em', color: '#484848'}}>
                We may, without prior notice, change the services; stop providing the services or any features of the
                services we offer; or create limits for the services. We may permanently or temporarily terminate or
                suspend access to the services without notice and liability for any reason, or for no reason.
            </p>

            <Header textAlign='left' as='h3' style={{fontSize: '2em'}}>
                Right to modify
            </Header>
            <p style={{fontSize: '1em', color: '#484848'}}>
                We reserve the right to modify these terms from time to time at our sole discretion. Therefore, you
                should review these pages periodically. When we change the Terms in a material manner, we will
                notify you that material changes have been made to the Terms. Your continued use of the Website or
                our service after any such change constitutes your acceptance of the new Terms. If you do not agree
                to any of these terms or any future version of the Terms, do not use or access (or continue to access)
                the website or the service.
            </p>

            <Header textAlign='left' as='h3' style={{fontSize: '2em'}}>
                Commercials
            </Header>
            <p style={{fontSize: '1em', color: '#484848'}}>
                The stitching charges is already included in the product cost mentioned on the website. The product
                cost mentioned is the final price paid by the consumer for the stitched product as per the custom
                measurement.
            </p>
            <p style={{fontSize: '1em', color: '#484848'}}>
                We accept payments only through digital medium including Wallets (UPI, etc.), Cards and IMPS as
                modes of payment. When ordering a custom-stitched outfit, you understand that:
            </p>
            <ul>
                <li>You are responsible for reading the full item listing before making a commitment to buy it</li>
                <li>No refund will be made for the purchase in case of custom-made products.</li>
            </ul>

            <Header textAlign='left' as='h3' style={{fontSize: '2em'}}>
                Product Design
            </Header>
            <p style={{fontSize: '1em', color: '#484848'}}>
                The designs displayed on the Website will be replicated as an actual product. The only customization
                offered is in terms of measurement &amp; body fit. No customization in terms of design change will be
                entertained.
            </p>
            <p style={{fontSize: '1em', color: '#484848'}}>
                All images displayed for product selling on the Website/ WhatsApp/ Email / other social media
                platforms as images or catalogues are not owned by us. Images are used as reference pictures, and
                we don’t intent to violate any copyright. If any owner of the image has a problem with the same, they
                can email us their copyright certificate and their issue at contact@righter.club. We will do our best to
                get the issue resolved at the earliest.
            </p>
            <p style={{fontSize: '1em', color: '#484848'}}>
                You can avail only one offer/ discount code/ voucher at a time while making a purchase on Righter
                and combining offers/ discount codes/ vouchers is not allowed.
            </p>

            <Header textAlign='left' as='h3' style={{fontSize: '2em'}}>
                Delivery
            </Header>
            <p style={{fontSize: '1em', color: '#484848'}}>
                Standard delivery time is 7-10 days from the date of order. This can be longer in case of certain
                designs. Depending on where you live, the time it may take for your exchanged product to reach you
                may vary. If you’re located outside of India, this can take even longer.
            </p>
            <p style={{fontSize: '1em', color: '#484848'}}>
                You shall be responsible to provide adequate directions, information, authorizations to accept the
                delivery. In the event of failure to accept delivery or failure to deliver within the estimated time due to
                inadequate instructions, information, or authorizations then such goods shall be deemed to have been
                delivered to you and all risk and responsibility in relation to the same shall pass to you.
            </p>


            <Header textAlign='left' as='h3' style={{fontSize: '2em'}}>
                Product liability
            </Header>
            <p style={{fontSize: '1em', color: '#484848'}}>
                Our decision in relation to this is final and binding. Our liability ends once the product has been
                delivered to you and extends to the value of the product purchased by you.
            </p>
            <p style={{fontSize: '1em', color: '#484848'}}>
                We have a unique Measurement Process that ensures most of our Dresses fit in the first attempt.
                However, in a rare case, we provide our customers a return facility to remake/resize.
            </p>
            <p style={{fontSize: '1em', color: '#484848'}}>
                Actual colours may vary. This is due to different computer monitors displaying colours differently and
                everyone can see these colours differently.
            </p>

            <Header textAlign='left' as='h3' style={{fontSize: '2em'}}>
                Hyperlinking to our Content
            </Header>
            <p style={{fontSize: '1em', color: '#484848'}}>
                The following organizations may link to our website without prior written approval:
            </p>
            <ul>
                <li>Government agencies</li>
                <li>Search engines</li>
                <li>News organizations</li>
                <li>Online directory distributors may link to our website in the same manner as they hyperlink to
                    the Websites of other listed businesses; and</li>
                <li>System wide Accredited Businesses except soliciting non-profit organizations, charity
                    shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
            </ul>
            <p style={{fontSize: '1em', color: '#484848'}}>
                These organizations may link to our home page, to publications or to other Website information so
                long as the link:
            </p>
            <ul>
                <li>is not in any way deceptive;</li>
                <li>does not falsely imply sponsorship, endorsement
                    or approval of the linking party and its products and/or services; and</li>
                <li>fits within the context of the
                    linking party’s site.</li>
            </ul>
            <p style={{fontSize: '1em', color: '#484848'}}>
                We may consider and approve other link requests from the following types of organizations:
            </p>
            <ul>
                <li>commonly known consumer and/or business information sources</li>
                <li>dot.com community sites</li>
                <li>associations or other groups representing charities</li>
                <li>online directory distributors</li>
                <li>internet portals</li>
                <li>accounting, law and consulting firms; and</li>
                <li>educational institutions and trade associations</li>
            </ul>
            <p style={{fontSize: '1em', color: '#484848'}}>
                We will approve link requests from these organizations if we decide that:
            </p>
            <ul>
                <li>the link would not make us look unfavourably to ourselves or to our accredited businesses</li>
                <li>the organization does not have any negative records with us</li>
                <li>the benefit to us from the visibility of the hyperlink compensates the absence of KidXL Private
                    Limited</li>
                <li>the link is in the context of general resource information</li>
            </ul>
            <p style={{fontSize: '1em', color: '#484848'}}>
                These organizations may link to our home page so long as the link:
            </p>
            <ul>
                <li>is not in any way deceptive</li>
                <li>does not falsely imply sponsorship, endorsement or approval of the linking party and its products
                    or services</li>
                <li>fits within the context of the linking party’s site.</li>
            </ul>
            <p style={{fontSize: '1em', color: '#484848'}}>
                If you are one of the organizations listed in paragraph 2 above and are interested in linking to our
                website, you must inform us by sending an e-mail to KidXL Private Limited. Please include your
                name, your organization name, contact information as well as the URL of your site, a list of any URLs
                from which you intend to link to our website, and a list of the URLs on our site to which you would like
                to link. Wait 2-3 weeks for a response.
            </p>
            <p style={{fontSize: '1em', color: '#484848'}}>
                Approved organizations may hyperlink to our website as follows:
            </p>
            <ul>
                <li>By use of our corporate name; or</li>
                <li>By use of the uniform resource locator being linked to; or</li>
                <li>By use of any other description of our website being linked to that makes sense within the
                    context and format of content on the linking party’s site.</li>
            </ul>
            <p style={{fontSize: '1em', color: '#484848'}}>
                No use of KidXL Private Limited&#39;s logo or other artwork will be allowed for linking absent a trademark
                license agreement.
            </p>


            <Header textAlign='left' as='h3' style={{fontSize: '2em'}}>
                iFrames
            </Header>
            <p style={{fontSize: '1em', color: '#484848'}}>
                Without prior approval and written permission, you may not create frames around our Webpages that
                alter in any way the visual presentation or appearance of our website.
            </p>

            <Header textAlign='left' as='h3' style={{fontSize: '2em'}}>
                Your Privacy
            </Header>
            <p style={{fontSize: '1em', color: '#484848'}}>
                Please read Privacy Policy
            </p>

            <Header textAlign='left' as='h3' style={{fontSize: '2em'}}>
                Reservation of Rights
            </Header>
            <p style={{fontSize: '1em', color: '#484848'}}>
                We reserve the right to request that you remove all links or any link to our website. You approve to
                immediately remove all links to our Website upon request. We also reserve the right to amen these
                terms and conditions and it’s linking policy at any time. By continuously linking to our website, you
                agree to be bound to and follow these linking terms and conditions.
            </p>

            <Header textAlign='left' as='h3' style={{fontSize: '2em'}}>
                Disclaimer
            </Header>
            <p style={{fontSize: '1em', color: '#484848'}}>
                To the maximum extent permitted by applicable law, we exclude all representations, warranties and
                conditions relating to our website and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul>
                <li>limit or exclude our or your liability for death or personal injury</li>
                <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation</li>
                <li>limit any of our or your liabilities in any way that is not permitted under applicable law</li>
                <li>exclude any of our or your liabilities that may not be excluded under applicable law</li>
            </ul>
            <p style={{fontSize: '1em', color: '#484848'}}>
                The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer:
            </p>
            <ul>
                <li>are subject to the preceding paragraph.</li>
                <li>govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and
                    for breach of statutory duty.</li>
            </ul>
            <p style={{fontSize: '1em', color: '#484848'}}>
                If the website and the information and services on the website are provided free of charge, we will not
                be liable for any loss or damage of any nature.
            </p>
            <p style={{fontSize: '1em', color: '#484848', padding: '0em 0em 2em 0em'}}>
                The above Terms &amp; Conditions are effective as of 1st Nov 2021.
                These Terms, the rights and remedies provided hereunder, and any and all claims and disputes
                related hereto and/or to the services, shall be governed by, construed under and enforced in all
                respects solely and exclusively in accordance with the internal substantive laws of Karnataka, India,
                without respect to its conflict of laws principles. Any and all such claims and disputes shall be brought
                in, and you hereby consent to them being decided exclusively by a court of competent jurisdiction
                located in Bangalore. The application of the United Nations Convention of Contracts for the
                International Sale of Goods is hereby expressly excluded.
            </p>

        </Container>
    );
};

export default TermsAndConditionsPage;