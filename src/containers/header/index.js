import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars,
 } from '@fortawesome/free-solid-svg-icons';

import logo from '../../images/icono_vass.jpg'

import './style.scss';

import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  const { width } = useSelector(state => state.width);
  
  const { scroll } = useSelector(state => state.scroll);
  const navHeader = [
    { key: 0, item:'Casos de éxito'},
    { key: 1, item: 'Mercados', subItem:[{ key:0, item: '' }]},
    { key: 1, item: 'Países', subItem:[{ key:0, item: '' }]},
    { key: 2, item: 'Somos VASS', subItem:[{ key:0, item: '' }]},
    { key: 3, item: 'Cómo lo hacemos', subItem:[{ key:0, item: '' }]},
    { key: 4, item:'Insights' },
    { key: 5, item:'Noticias' },
    { key: 6, item:'VASS Research' },
    { key: 7, item:'EN' },
  ]
  
  return<div>
  <Navbar collapseOnSelect expand="lg" className={width < 993 ? 'header' : scroll>50 ? 'header' : 'headerTransparent'} fixed='top'>
  <Navbar.Brand href="#home"><img src={logo} alt='logo' height='50'/></Navbar.Brand>
  {
    width<993 &&
    <Navbar.Brand><span><SearchIcon style={{color:'white',fontSize:30, marginRight:'60px'}}/></span></Navbar.Brand>
  }
  <Navbar.Toggle aria-controls="basic-navbar-nav" ><FontAwesomeIcon icon={faBars} style={{fontSize:'36px'}}/></Navbar.Toggle>
  
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      
    </Nav>
    <Nav>
        {
          navHeader.map(item=><>
            {
              item.hasOwnProperty('subItem') ?
              <NavDropdown title={item.item} id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              </NavDropdown>
              :  
              <Nav.Link>{item.item}</Nav.Link>
            }
        </>)
        }
        {
          width>993 &&
          <Nav.Link><span><SearchIcon style={{color:'white',fontSize:30, marginRight:'60px'}}/></span></Nav.Link>
        }
        <Nav.Link>Talento</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </div>;
};

export default Header;