import { Row, Col } from "antd";
import React from "react";
import { useSelector } from "react-redux";

import logo from '../../images/icono_vass.jpg'
import image2 from '../../images/image2.jpg'

import './style.scss';

const Footer = () => {
  const { width } = useSelector(state => state.width);
  
  return <footer>
    <Row>
      <Col className='strong' lg={{ span: 2 }} xs={width <321 ? {span:  22} : {span: 4}} style={{textAlign:'right'}}>
        <p>
          <strong>Complex</strong>
          <br/>
          <strong>Made</strong>
          <br/>
          <strong>simple</strong>
        </p>
      </Col>
      <Col className='strong' lg={{ span: 4 , offset: 3}} xs={width <321 ? {span:  11} : {span: 5, offset: 2}} style={{textAlign:'left'}}>
        <strong>Sitemap VASS</strong>
        <p>
        <br/>
          Home<br/>
          Casos éxito<br/>
          Somos VASS<br/>
          Impactos<br/>
          Métodos<br/>
          Tecnologías<br/>
          Proyectos L+D+I<br/>
          Insights<br/>
          Noticias<br/>
          VASS Research<br/>
          Canal de denuncias<br/>
          Contacto
        </p>
      </Col>
      <Col lg={{ span: 3 , offset: 4}} xs={width <321 ? {span:  11, offset: 1} : {span: 4, offset:2}} style={{textAlign:'left'}}>
        <strong>Sitemap Talento</strong>
        <p>
        <br/>
          Talento<br/>
          #lifeVASS<br/>
          Beneficios<br/>
          Planes para ti<br/>
          Proyectos<br/>
          Smartworking<br/>
          Ofertas
        </p>
      </Col>
      <Col lg={{ span: 2 , offset: 5}} xs={width <321 ? {span:  11} : {span: 4, offset: 1}} style={{textAlign:'left'}}>
        <strong>Empresas</strong>
        <p>
        <br/>
          Empresas<br/>
          VASS<br/>
          Nateevo<br/>
          Servatic<br/>
          vdSHOP
        </p>
      </Col>
    </Row>
    <Row>
      <Col span={2} offset={1} lg={{ span: 2 , offset: 1}} xs={{span: 1}}>
        <img src={logo} className='imgFooter' alt='logo'/>
      </Col>
      <Col span={2} offset={19} lg={{ span: 2 , offset: 19}} xs={{span: 2, offset: 15}}>
        <img src={image2} className='imgFooter' alt='logo'/>
      </Col>
    </Row>
  </footer>;
};

export default Footer;