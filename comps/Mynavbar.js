import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap'
import React, { useState } from 'react'
function Mynavbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <Navbar className='nav' expand='md'>
      <NavbarBrand href='/'>logo goes here</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className='mx-auto' navbar>
          <NavItem>
            <NavLink href='/'>What we do</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/'>Our work</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/'>Who we are</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='/'>Blog</NavLink>
          </NavItem>
        </Nav>
        <Button color='primary'>get in touch</Button>{' '}
      </Collapse>
    </Navbar>
  )
}

export default Mynavbar
