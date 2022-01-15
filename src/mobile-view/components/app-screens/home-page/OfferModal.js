import React, {useEffect, useState} from 'react'
import {Button, Modal, Row} from "antd";
import Text from "antd/es/typography/Text";
import {UserOutlined} from '@ant-design/icons';
import {navigationLinks} from "../../../constants/NavigationLinks";

const OfferModal = () => {

    const [isOfferModalVisible, setOfferModalVisible] = useState(false);

    const handleModalVisibility = () => {
        setOfferModalVisible(true);
        let cardBody = document.querySelectorAll('.ant-modal-footer')
        cardBody.forEach(element => element.style = "padding : 0px");
    }

    useEffect(() => {
        const timer = setTimeout(handleModalVisibility, 8000);
        return () => clearTimeout(timer);
    }, []);

    return(
        <div>
            <Modal footer={<div style={{padding: '0', margin: '0'}}></div>} centered visible={isOfferModalVisible}
                    onCancel={() => setOfferModalVisible(false)}
            >
                <Row justify={'center'}><UserOutlined style={{fontSize: '2em'}}/></Row>
                <div style={{paddingTop: '1em', paddingBottom: '1.5em'}}>
                    <div style={{paddingBottom: '0.5em'}}>
                        <Row justify={'center'}><Text strong>Personal Assistance</Text></Row>
                    </div>
                    <Row justify={'center'}><Text>Get in touch with our experts who will</Text></Row>
                    <Row justify={'center'}><Text>help you find the perfect outfit</Text></Row>
                </div>
                <div>
                    <Row justify={'center'}>
                        <Button target='_blank' type='primary' style={{backgroundColor: '#25D366'}} shape={'round'}
                                href={navigationLinks.WHATSAPP} onClick={() => setOfferModalVisible(false)}>
                            WhatsApp
                        </Button>
                    </Row>
                </div>
            </Modal>
        </div>
    );
};
export default OfferModal;