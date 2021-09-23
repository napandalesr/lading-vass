import React from 'react';
import { Form, Row, Col } from 'antd';
import CustomInput from '../../component/customInput';

import './style.scss';
import CustomTextArea from '../../component/customTextArea';
import CustomButton from '../../component/customButton';

const FormContact = () => {
  return<div className='form'>
    <Form
    layout='vertical'>
      <Row>
        <Col lg={{ span: 11 }} xs={{span: 22}}>
          <Row>
            <Col span={22}>
              <Form.Item>
                <CustomInput placeholder='Nombre y apellidos'/>
              </Form.Item>
            </Col>
            <Col span={22}>
              <Form.Item>
                <CustomInput placeholder='Email'/>
              </Form.Item>
            </Col>
            <Col span={22}>
              <Form.Item>
                <CustomInput placeholder='Empresa / Organísmo'/>
              </Form.Item>
            </Col>
            <Col span={22}>
              <Form.Item>
                <CustomInput placeholder='País'/>
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col lg={{ span: 11 }} xs={{span: 22}}>
          <Row>
            <Col  span={22}>
              <Form.Item>
                <CustomInput placeholder='Teléfono'/>
              </Form.Item>
            </Col>
            <Col  span={22}>
              <label style={{color:'rgb(120, 120, 120)', marginTop: '20px', marginLeft: '5px'}}>Mensaje:</label>
            </Col>
            <Col  span={22}>
              <Form.Item>
              <Form.Item>
                <CustomTextArea/>
              </Form.Item>
              </Form.Item>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
      <Col lg={{ span: 4, offset: 19 }} xs={{span: 4, offset: 12}}>
        <CustomButton/>
      </Col>
      </Row>
    </Form>
  </div>;
};

export default FormContact;