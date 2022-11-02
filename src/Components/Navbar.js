
import React, { useState } from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Botonera2, Text } from '../Styles/Header.Styles';

function MenuRes({ direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Botonera2 className="d-flex">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret color='255,255,255 0.1'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
        </svg>
            
        </DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem>
            <NavLink to='/Home'>
                <Text>
                    HOME
                </Text>
            </NavLink>
            </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <NavLink to='/Curso'>
                <Text>
                    SERVICIOS
                </Text>
            </NavLink>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <NavLink to='/Equipamiento'>
                <Text>
                    EQUIPAMIENTO
                </Text>
            </NavLink>
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <NavLink to='/Contacto'>
                <Text>
                    CONTACTO
                </Text>
            </NavLink>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Botonera2>
  );
}

MenuRes.propTypes = {
  direction: PropTypes.string,
};

export default MenuRes;