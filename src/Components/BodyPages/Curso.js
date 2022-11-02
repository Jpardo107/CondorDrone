import React from 'react';
import { 
  ContainerHome, Titulo, 
  ContenedorTitulo,
  ContenedorCurso,
  ContenedorCardsII
} from '../../Styles/Home.Styles';
import { CardsIII } from '../Cards'

export const Curso = () => {
  return (
    <>
      <ContainerHome>
      <ContenedorCardsII>
          <ContenedorCurso>
            <p>
              <ContenedorTitulo>
                <Titulo>Servicios Ofrecidos</Titulo>
              </ContenedorTitulo>
              Dentro de nuestros servicios, ofrecemos lo siguiente:
            </p>
          </ContenedorCurso>
          <CardsIII />
        </ContenedorCardsII>
      </ContainerHome>
    </>
  )
}
