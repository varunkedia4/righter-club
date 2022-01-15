import React from "react";
import {Col, Image, Radio, Row, Table, Typography} from "antd";
import CustomDivider from "./CustomDivider";
import {extraImages} from "../../constants/ImageLinks";

const SizeChart = () => {

    const { Text } = Typography;

    const [value, setValue] = React.useState(1);
    const onChange = e => {
        setValue(e.target.value);
    };

    const columns = [
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: 'Across Shoulder',
            dataIndex: 'acrossShoulder',
            key: 'acrossShoulder',
        },
        {
            title: 'Chest',
            dataIndex: 'chest',
            key: 'chest',
        },
        {
            title: 'Front Length',
            dataIndex: 'frontLength',
            key: 'frontLength',
        },
        {
            title: 'Waist',
            dataIndex: 'waist',
            key: 'waist',
        }
    ];

    const dataInInch = [
        {
            key: '1',
            size: 'S',
            acrossShoulder: '16.0',
            chest: '39.5',
            frontLength: '26.5',
            waist: '38.0'
        },
        {
            key: '1',
            size: 'M',
            acrossShoulder: '16.5',
            chest: '41.5',
            frontLength: '27.0',
            waist: '40.0'
        },
        {
            key: '1',
            size: 'L',
            acrossShoulder: '17.0',
            chest: '43.5',
            frontLength: '27.0',
            waist: '42.0'
        },
        {
            key: '1',
            size: 'XL',
            acrossShoulder: '17.5',
            chest: '45.5',
            frontLength: '27.5',
            waist: '44.0'
        },
        {
            key: '1',
            size: 'XXL',
            acrossShoulder: '18.0',
            chest: '47.5',
            frontLength: '28.0',
            waist: '46.0'
        }
    ]

    const dataInCm = [
        {
            key: '1',
            size: 'S',
            acrossShoulder: '40.6',
            chest: '100.3',
            frontLength: '66.0',
            waist: '96.5'
        },
        {
            key: '1',
            size: 'M',
            acrossShoulder: '41.9',
            chest: '105.4',
            frontLength: '67.3',
            waist: '101.6'
        },
        {
            key: '1',
            size: 'L',
            acrossShoulder: '43.2',
            chest: '110.5',
            frontLength: '68.6',
            waist: '106.7'
        },
        {
            key: '1',
            size: 'XL',
            acrossShoulder: '44.5',
            chest: '115.6',
            frontLength: '69.8',
            waist: '111.8'
        },
        {
            key: '1',
            size: 'XXL',
            acrossShoulder: '45.7',
            chest: '120.7',
            frontLength: '71.1',
            waist: '116.8'
        }
    ]

    const getColumnData = () => {
        if(value === 1) return dataInInch;
        else return dataInCm;
    }

    return(
        <div>
            <div style={{paddingBottom: '1em', paddingRight: '1.5em'}}>
                <Row>
                    <Col span={12}> <Text strong> Show measurements in </Text> </Col>
                    <Col span={12}>
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>inch</Radio>
                            <Radio value={2}>cm</Radio>
                        </Radio.Group>
                    </Col>
                </Row>
            </div>

            <div style={{paddingBottom: '1em', paddingRight: '1.5em'}}>
                <Table pagination={false} columns={columns} dataSource={getColumnData()} />
            </div>

            <CustomDivider />

            <div style={{paddingBottom: '1em', paddingTop: '1.5em'}}>
                <Text strong> How to measure yourself</Text>
            </div>
            <div> <Row justify="center"> <Image width={300} src={extraImages.SIZE_CHART} /> </Row> </div>
        </div>
    );
};
export default SizeChart;