import React from 'react';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';

const TechnicalLimitationsMessage = () => {
    return(
        <div className="TechnicalLimitationsMessage" style={{textAlign: 'center', paddingTop: '2em', fontSize: '1.5em'}}>
            <strong style={{fontSize: '2em'}}>Righter</strong>
            <br/><br/>
            Due to technical limitations, we are currently available on <strong>mobile only</strong>.
            <br/><br/>
            Please visit <strong>www.righter.club</strong> on your mobile phone.
            <br/><br/>
            Stay safe. Stay happy.
            <br/><br/>
            <br/><br/>
            <PhoneOutlined /> +91-85914-36681  <MailOutlined style={{paddingLeft: '2em'}} /> contact@righter.club
        </div>
    );
}
export default TechnicalLimitationsMessage;