import React, { useState } from 'react';
import { Rate } from 'antd';
import { Button, Form, Input, InputNumber } from 'antd';
import { Card, Space } from 'antd';


const ServiceReviewMessage = () => {
    // //提交表单
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const onFinish = (fieldsValue: any) => {
        // Should format date value before submit.
        const values = {
            ...fieldsValue,

            'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
        };
        console.log('Received values of form: ', values);
    };

    const RateForm: React.FC = () => (
        <Form
            name="time_related_controls"
            {...formItemLayout}
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
        >
            <Form.Item name={['user', 'Description']} label="Description">
                <Input.TextArea />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>

        </Form>
    );


    //五角星评分
    const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

    const RateStar: React.FC = () => {
        const [value, setValue] = useState(3);

        return (
            <span>
                <Rate tooltips={desc} onChange={setValue} value={value} />
                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
            </span>
        );
    };

    return (
        <div>
            <Card>
                <Card
                    style={{ marginTop: 16 }}
                    type="inner"
                    title="Review Your Service"
                    extra={<a href="#">More</a>}
                >
                    <div>Home Cleaning Service</div>
                    <div><img style={{ width: 400 }} alt="Loading" src="https://scrubnbubbles.com/wp-content/uploads/2020/10/cleaning-companies.jpg" /></div>
                    <RateStar />
                    <RateForm />
                </Card>
            </Card>
        </div>
    )

}

export default ServiceReviewMessage









