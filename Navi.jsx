import React, { useState } from 'react';
import logo from './img/logo.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LuBookmarkMinus } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi";
import './App.css';
import { CiSearch } from "react-icons/ci";
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navi() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartMenuOpen, setCartMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

 
  const toggleCartMenu = () => {
    setCartMenuOpen(!cartMenuOpen);
  };

  return (
    <div className='con1'>
      <Row>
        <Col className='c1'>
          <img src={logo} width="155" height="85" className="logo d-inline-block align-top" alt="React Bootstrap logo" />
          <div onClick={toggleMenu}>
            <FiMenu className='menu mt-4' size="1.5em" />
          </div>
          <div className='search'>
            <div className='drop1'>
              <select className='drop'>
                <option value="All Categories">All Categories</option>
                <option value="Groceries">Groceries</option>
                <option value="Drinks">Drinks</option>
                <option value="Chocolates">Chocolates</option>
              </select>
            </div>
            <div className='sebar'>
              <input type="text" placeholder="Search for more than 20,000" />
            </div>
            <CiSearch className='sbar' />
          </div>
        </Col>
        <Col className='c4 my-4'>
          <a href="/">HOME</a>
          <a href="/">
            <NavDropdown id="nav-dropdown-white-example" title="PAGES" menuVariant="light">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </a>
        </Col>
        <Col className='c2 my-4'>
          <a href="/" className='design'>
            <svg xmlns="http://www.w3.org/2000/svg" className='img' width="1em" height="1em" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
                <path d="M21 12a9 9 0 1 1-18 0a9 9 0 0 1 18 0"></path>
                <path d="M14.5 9.25a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M17 19.5c-.317-6.187-9.683-6.187-10 0"></path>
              </g>
            </svg>
          </a>
          <a href="/" className='design'>
            <LuBookmarkMinus className='img' />
          </a>
          <a href="/" className='design' onClick={(e) => { e.preventDefault(); toggleCartMenu(); }}>
            <svg xmlns="http://www.w3.org/2000/svg" className='img' width="1em" height="1em" viewBox="0 0 14 14">
              <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12.36 6H1.64a1 1 0 0 0-1 1.13l.73 5.5a1 1 0 0 0 1 .87h9.24a1 1 0 0 0 1-.87l.73-5.5A1 1 0 0 0 12.36 6M4.5 8.5V11M7 8.5V11m2.5-2.5V11"></path>
                <path d="M9.48 1.54A2.79 2.79 0 0 1 11.78 4L12 6M2 6l.22-2a2.79 2.79 0 0 1 2.3-2.44"></path>
                <path d="M9.5 1.75A1.25 1.25 0 0 1 8.25 3h-2.5a1.25 1.25 0 0 1 0-2.5h2.5A1.25 1.25 0 0 1 9.5 1.75"></path>
              </g>
            </svg>
          </a>
        </Col>
      </Row>

      {/* Sidebar Overlays */}
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      {cartMenuOpen && <div className="overlay" onClick={toggleCartMenu}></div>}

      {/* Sidebar for Menu */}
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
        <h6>MENU</h6>
        <div className='sidebar-header'>
          <FiX size="1.5em" onClick={toggleMenu} />
        </div>
        <ul>
          <li>Home</li>
          <hr className="dotted-line" />
          <li>About</li>
          <hr className="dotted-line" />
          <li>Services</li>
          <hr className="dotted-line" />
          <li>Contact</li>
        </ul>
      </div>

      {/* Cart Sidebar */}
      <div className={`cartsidebar ${cartMenuOpen ? 'open' : ''}`}>
        <div className='cartsidebar-header'>
          <FiX size="1.5em" onClick={toggleCartMenu} />
        </div>
        {/* <h5 className=''>Your Cart</h5> */}
        <h4 className="cart d-flex justify-content-between align-items-center mb-3">
            <span className="text1">Your cart</span>
            <span className="text2 badge bg-primary rounded-pill">3</span>
          </h4>
          <ul className="ulist list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Growers cider</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$12</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Fresh grapes</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$8</span>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0">Heinz tomato ketchup</h6>
                <small className="text-body-secondary">Brief description</small>
              </div>
              <span className="text-body-secondary">$5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total (USD)</span>
              <strong>$25</strong>
            </li>
          </ul>
        
        {/* <ul>
          <li>Growers cider Brief description- $10</li>
          <li>Item 2 - $20</li>
          <li>Item 3 - $15</li>
        </ul> */}
        {/* k */}
        <button class="cartbtn  btn btn-success btn-lg" type="submit">Continue to checkout</button>
      </div>
    </div>
  );
}

export default Navi;
