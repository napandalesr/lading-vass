import React from 'react';
import { Row, Col } from 'antd';
import { LinkedIn, Twitter, Instagram, YouTube } from '@material-ui/icons'; 

import './style.scss';

const CopyRight = () => {
  return <div className='copyRight'> 
    <Row>
      <Col className='strong' lg={{ span: 6}} xs={{span: 24}}>
        <span>copyright © 2021 Todos los derechos reservados</span>
      </Col>
      <Col className='strong' lg={{ span: 13, offset:1 }} xs={{span: 24}}>
        <span>Memoria ambiental | Política de cookies | Política de privacidad | Política de calidad y medio ambiente</span>
      </Col>
      <Col lg={{ span: 3, offset: 1 }} xs={{span: 24}}>
        <span className='social'><Twitter style={{color:'white',fontSize:18}}/></span>
        <span className='social'><LinkedIn style={{color:'white',fontSize:18}}/></span>
        <span className='social'><Instagram style={{color:'white',fontSize:18}}/></span>
        <span className='social'><YouTube style={{color:'white',fontSize:18}}/></span>
      </Col>
    </Row>
  </div>;
};

export default CopyRight;