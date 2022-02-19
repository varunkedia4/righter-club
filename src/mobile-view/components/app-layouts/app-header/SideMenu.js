import React from 'react';
import {navigationLinks} from "../../../constants/NavigationLinks";
import {Dropdown, Icon} from "semantic-ui-react";
import {catalogName, commonConstants} from "../../../constants/Common";
import {Divider, Drawer} from "antd";
import {useNavigate} from "react-router-dom";

const SideMenu = (props) => {

    const navigate = useNavigate();

    const handleNavigation = (navigationLink) => {
        props.closeMenu();
        navigate(navigationLink);
    }

    return(
        <div>
            <Drawer title={<a style={{color:'#000000'}} href={navigationLinks.HOME}>Righter</a>} placement={'left'} closable={true} onClose={props.closeMenu} visible={props.isMenuVisible}>
                <a style={{color:'#000000'}} href={navigationLinks.HOME} onClick={() => handleNavigation(navigationLinks.HOME)}> <Icon name='home'/> {commonConstants.HOME} </a> <Divider />

                <Icon name='th' style={{paddingRight: '1.3em'}}/>
                <Dropdown text='Shop by Category' pointing='top right' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleNavigation(navigationLinks.TWO_PIECE_SUIT)}>{catalogName.TWO_PIECE_SUIT}</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleNavigation(navigationLinks.THREE_PIECE_SUIT)}>{catalogName.THREE_PIECE_SUIT}</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleNavigation(navigationLinks.CASUAL_BLAZER)}>{catalogName.CASUAL_BLAZER}</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleNavigation(navigationLinks.TUXEDO)}>{catalogName.TUXEDO}</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleNavigation(navigationLinks.SHERWANI)}>{catalogName.SHERWANI}</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleNavigation(navigationLinks.JODHPURI)}>{catalogName.JODHPURI}</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleNavigation(navigationLinks.NEHRU_JACKET)}>{catalogName.NEHRU_JACKET}</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleNavigation(navigationLinks.KURTA)}>{catalogName.KURTA}</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleNavigation(navigationLinks.TROUSER)}>{catalogName.TROUSER}</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleNavigation(navigationLinks.SHIRT)}>{catalogName.SHIRT}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown><Divider />

                <Icon style={{paddingRight: '1.3em'}} name='th'/>
                <Dropdown text='Shop by Occasion' pointing='top right' className='link item'>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handleNavigation(navigationLinks.FESTIVES)}>{catalogName.FESTIVES}</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleNavigation(navigationLinks.REGULAR)}>{catalogName.REGULAR}</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleNavigation(navigationLinks.HALDI)}>{catalogName.HALDI}</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleNavigation(navigationLinks.MEHENDI)}>{catalogName.MEHENDI}</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleNavigation(navigationLinks.ENGAGEMENT)}>{catalogName.ENGAGEMENT}</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleNavigation(navigationLinks.WEDDING)}>{catalogName.WEDDING}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown><Divider />

                <a style={{color:'#000000'}} href={navigationLinks.FAQS} onClick={() => handleNavigation(navigationLinks.FAQS)}> <Icon name='question'/> {commonConstants.FAQS}</a> <Divider />
                <a style={{color:'#000000'}} href={navigationLinks.CUSTOMER_SUPPORT} onClick={() => handleNavigation(navigationLinks.CUSTOMER_SUPPORT)}> <Icon name='users'/> {commonConstants.CUSTOMER_SUPPORT} </a> <Divider />
                <a style={{color:'#000000'}} href={navigationLinks.SEND_US_YOUR_FEEDBACK} onClick={() => handleNavigation(navigationLinks.SEND_US_YOUR_FEEDBACK)}> <Icon name='comment alternate outline'/> {commonConstants.SEND_US_YOUR_FEEDBACK} </a> <Divider />
            </Drawer>
        </div>
    );
};
export default SideMenu;