import React, {useState} from 'react'
import {Typography, Row, Col, Button, Radio, Drawer} from "antd";
import {navigationLinks} from "../../../constants/NavigationLinks";
import {useNavigate} from "react-router-dom";
import HowItWorks from "../../common/HowItWorks";
import WhyRighter from "../../common/WhyRighter";
import SizeChart from "../../common/SizeChart";

const BuyingOptions = (props) => {

    const navigate = useNavigate();
    const { Link, Text } = Typography;

    const [isSizeChartDrawerOpen, setSizeChartDrawerOpen] = useState(false);
    const [isLearnMoreDrawerOpen, setLearnMoreDrawerOpen] = useState(false);
    const [selectedSizeOption, setSelectedSizeOption] = useState(1);

    const onBuyingOptionChange = e => { setSelectedSizeOption(e.target.value); };

    const getNavigationLink = () => { return navigationLinks.PROCEED_TO_BUY + props.productId + "." + selectedSizeOption; }
    const handleProceedToBuyAction = () => { navigate(getNavigationLink()); }

    const getHelpText = () => {
        if(selectedSizeOption === 1) return (<Text type={'secondary'}> Proceed to schedule a measurement session</Text>);
        else return (<Text type={'secondary'}> Proceed to select your preferred size</Text>);
    }

    return(
        <div style={{paddingLeft: '1.5em', paddingRight: '1em', paddingTop: '1em', paddingBottom: '1em'}}>
            <div style={{paddingBottom: '0.5em'}}>
                <Row>
                    <Col span={13}><Text strong> BUYING OPTIONS </Text></Col>
                    <Col span={11}>
                        <Link onClick={() => setLearnMoreDrawerOpen(true)}> Learn more  </Link>
                        <Drawer placement="bottom" height={650} onClose={() => setLearnMoreDrawerOpen(false)} visible={isLearnMoreDrawerOpen}>
                            <div style={{paddingBottom: '1.5em'}}><Row justify={'center'}><Text strong> HOW IT WORKS </Text></Row></div>
                            <HowItWorks/>
                            <div style={{paddingBottom: '1.5em'}}><Row justify={'center'}><Text strong> WHY RIGHTER </Text></Row></div>
                            <WhyRighter/>
                        </Drawer>
                        <Text type={'secondary'}> | </Text>
                        <Link onClick={() => setSizeChartDrawerOpen(true)}> Size Chart  </Link>
                        <Drawer placement="bottom" height={650} onClose={() => setSizeChartDrawerOpen(false)} visible={isSizeChartDrawerOpen}>
                            <SizeChart />
                        </Drawer>
                    </Col>
                </Row>
            </div>

            <div style={{paddingBottom: '1.5em'}}>
                <Text type={'secondary'}> Get the outfit stitched to your fit or select standard sizes  </Text>
            </div>

            <div style={{paddingBottom: '1.5em'}}>
                <Row justify={'center'}>
                    <Radio.Group onChange={onBuyingOptionChange} value={selectedSizeOption}>
                        <Radio value={1}><Text strong>STITCH TO FIT</Text></Radio>
                        <Radio value={2}><Text strong>STANDARD SIZE</Text></Radio>
                    </Radio.Group>
                </Row>
            </div>

            <div style={{paddingBottom: '1em'}}>
                <Row justify={'center'}>
                    <Button href={getNavigationLink()} shape="round" type={'primary'} onClick={() => handleProceedToBuyAction()}>Proceed to Buy</Button>
                </Row>
            </div>

            <div style={{fontSize: '0.9em'}}>
                <Row justify={'center'}> {getHelpText()} </Row>
            </div>
        </div>
    );
};
export default BuyingOptions;