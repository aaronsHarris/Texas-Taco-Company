import React from "react";

import { Link } from "react-router-dom";
import { menuData } from "../data/MenuData";
import { Button } from "../styles/Button.styles";
import {Nav, MenuBars, NavMenu, NavMenuLinks, Logo, NavBtn} from '../styles/Navbar.styles'

const Navbar = ({toggle}) => {
  return (
    <Nav>
      <Logo to="/">Texas Tacos</Logo>
      <MenuBars onClick={toggle}/>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavBtn>
      <Button to='/' primary='true'>Order Now</Button>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
