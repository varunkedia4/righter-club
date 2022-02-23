import React from 'react';
import {Image} from "antd";
import { EllipsisOutlined } from '@ant-design/icons';

const ProductImages = (props) => {

    let imageList = props.designDetails.imageLinks;
    const productImageCardList = [];

    for(let imageCount = 0; imageCount < imageList.length; imageCount++) {
        productImageCardList.push(<Image alt={'Product Image'} style={{ width: 270}} src={imageList[imageCount]}/>)
    }

    return(
        <div>
            <div style={{paddingLeft: '1em'}}>
                {
                    (imageList.length > 1) &&
                    <div style={{overflow: "auto", whiteSpace: "nowrap", paddingTop: '1em', display: "flex", alignItems: "center" }}>
                        {productImageCardList}
                    </div>
                }
                {
                    (imageList.length === 1) &&
                    <div style={{paddingTop: '1em', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                        {productImageCardList}
                    </div>
                }
            </div>

            <div style={{textAlign: 'center'}}><EllipsisOutlined style={{fontSize: '2em'}} /></div>
        </div>
    );
};
export default ProductImages;