import React from 'react'
import { ContainerHeader, LogoEmp, ContLogoEmp, ContainerCenter, Botonera, Text, Titulo } from '../Styles/Header.Styles'
import ImageII from '../Image/ImageCondorDroneII.png'
import { NavLink } from 'react-router-dom'
import MenuRes from './Navbar';
import styled from 'styled-components'

export const Header = () => {
  return (
    <>
        <ContainerHeader>
          <ContLogoEmp>
            <LogoEmp src= {ImageII} alt='Logo Empresa'/>
          </ContLogoEmp>
          <ContainerCenter>
            <Titulo style={{
              color:'gray'
            }}>Condor Drone®</Titulo>
            <Menu>
              <MenuRes />
            </Menu>
            <Botonera>
                <NavLink to='/Home'>
                  <Text>
                    HOME
                  </Text>
                </NavLink>
              <NavLink to='/Curso'>
                <Text>
                  SERVICIOS
                </Text>
                </NavLink>
                <NavLink to='/Equipamiento'>
                <Text>
                  EQUIPAMIENTO
                </Text>
                </NavLink>
              <NavLink to='/Contacto'>
                <Text>
                  CONTACTO
                </Text>
                </NavLink>
            </Botonera>
          </ContainerCenter>
        </ContainerHeader>
    </>
  )
}

const Menu = styled.div`
@media screen and (max-width:600px) {
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: gray;
  font-weight: bold;
  padding: 10px;
  margin: 10px;
}
@media screen and (min-width:600px) {
  display: none;
}
`