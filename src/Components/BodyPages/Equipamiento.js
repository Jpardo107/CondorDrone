import React from 'react'
import { Carrusel2 } from '../Carrusel';
import { 
  ContainerHome, Titulo, 
  ContenedorTitulo, 
  ContenedorCarrusel2, ContenedorPres2
} from '../../Styles/Home.Styles';
import styled from 'styled-components';



export const Equipamiento = () => {
  return (
    <>
      <ContainerHome>
          <ContenedorPres2>
            <ContenedorTitulo>
              <Titulo>EQUIPAMIENTO</Titulo>
            </ContenedorTitulo>
            <p>
              Para la realizacion de nuestros servicios contamos con lo mejor en equipamiento, dentro de lo que podemos destacar nuestro dron Dji M30T,
              el cual se puede visualizar mas abajo, dentro del video de presentacion se veran todas las caracteristicas con las que cuenta este equipo.
            </p>
          </ContenedorPres2>
          <ContenedorCarrusel2>
            <Carrusel2 />
            <Video>
              <iframe 
              width="100%" 
              height="300vh"
              src="https://www.youtube.com/embed/1ucIm6g9llg" 
              title="YouTube video player" frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen></iframe>
            </Video>
          </ContenedorCarrusel2>
      </ContainerHome>
    </>
       
  )
}
const Video = styled.div`

@media screen and (max-width: 600px) {
  height: 50vh;
  width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
@media screen and (min-width: 600px) {
  height: 35vh;
  width: 70vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
`