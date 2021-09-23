import React from 'react';
import { Row, Col, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import FormContact from '../../containers/formContact/index';
import Footer from '../../containers/footer/index';
import CopyRight from '../../component/copyright';

import './style.scss';
import { _scroll } from '../../redux/actions/scrollAction';
import { _width } from '../../redux/actions/widthAction';

const { Text }=Typography;

const Contact = () => {
  const dispatch = useDispatch();
  const { scroll } = useSelector(state => state.scroll);

  const scrollAnimation = () => {
    dispatch(_scroll(document.documentElement.scrollTop));
  }

  const screenAnimation = () => {
    dispatch(_width(window.screen.width));
  }

  React.useEffect(()=>{
    window.onscroll = () => scrollAnimation();
    window.onresize = () => screenAnimation();
    dispatch(_width(window.screen.width));
  })
  return<main>
  <div className='bg'>
    <div class="vertical-line" style={{backgroundColor:scroll>50 ? "black" : "white"}}></div>
    <h3>CONTACTO</h3>
  </div>
    <div className='mainContact'>
      <Row>
        <Col lg={{ span: 3 }} xs={{span: 4}} className='strong'>
          <strong>EMPECEMOS A <br/>HACERLO SENCILLO</strong>
        </Col>
        <Col lg={{ span: 10, offset: 1 }} xs={{span: 14}} className='strong text-aside'>
          <Row>
          <Col span={1}><div class="vertical-line2"></div></Col>
          <Col span={20} offset={2}><Text className='text'>Nos emociona impulsar tu<br/>tranformación digital</Text></Col>
          </Row>
        </Col>
      </Row>
    </div>
    <FormContact/>
    <Footer/>
    <CopyRight/>
  </main>;
};

export default Contact;