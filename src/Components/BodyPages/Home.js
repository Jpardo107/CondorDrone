import React from 'react'
import { 
  ContainerHome, Titulo, 
  ContenedorTitulo, ContenedorPres, 
  ContenedorCarrusel, ContenedorCards, 
  ContenedorServicios,
  ContenedorCurso,
  ContenedorCardsII
} from '../../Styles/Home.Styles'
import { Cards, CardsII } from '../Cards'
import {Carrusel} from '../Carrusel'
import Nosotros from '../Nosotros.mobile'
import Img from '../../Image/DGAC_PULENTO.jpg'
import Img2 from '../../Image/DGAC_PULENTO2.jpg'
import styled from 'styled-components'

export const Home = () => {
  return (
    <ContainerHome>
        <ContenedorPres>
          <ContenedorTitulo>
            <Titulo>LA EMPRESA</Titulo>
          </ContenedorTitulo>
          <p>
            CONDORDRONE es una empresa de Drones Profesionales con sede en valdivia.
            Estamos autorizados y certificados por DGAC
            AOC N° 1506 para operaciones en espacio aéreo controlado y en entornos urbanos en
            categoría abierta y específica, para poder realizar grabaciones aéreas y fotografía
            profesional con drones, así como servicios especializados de termografía aérea avanzada,
            inspección de obras, seguridad aérea, fotogrametría, Televigilancia y otros, De esta
            forma cumplimos con la normativa vigente aprobada por la Dirección General de Aeronáutica Civil.

            La mejor tecnología
            Nuestra misión es aportar al entorno particular y profesional servicios con la mejor tecnología existente,
            la mayor precisión y una atención especifica para obtener siempre los mejores resultados. Apostando
            decididamente por el servicio de grabación y fotografía con drones con cámaras 4K RAW y Termográficas.

            Reducción de costes
            El uso de drones con cámara consigue aumentar la competitividad de las empresas ya que reduce enormemente
            los costes de la obtención de imágenes aéreas ya sea para fines publicitarios como técnicos
            (inspección aérea) ya que los drones con cámaras están asumiendo las tareas que antes realizaban aeronaves
            tripuladas como helicópteros y avionetas o grúas.

            Condordrone es contar con un equipo completo de drones profesionales con cámaras 4k pilotados por profesionales certificados.
            También contamos con un equipo de tierra (fotografía, vídeo y audio) para abarcar todas tus necesidades y disponemos de personal
            especializado en edición y montaje de vídeo. De esta forma podemos ofrecerte el trabajo completo o colaborar con quien prefieras.
            Lo más importante es que nosotros nos adaptamos a tus necesidades, contando con todos los equipos y medios para realizar el trabajo
            que quieras. Además, disponemos de soportes especialmente diseñados (DJI Osmo) para poder grabar y fotografiar con nuestros equipos
            de tierra y cubrir con seguridad tus intereses y necesidades.
          </p>
          <Nosotros/>
          <Imagen src={Img} alt='Certificacion' />
          <Imagen2 src={Img2} alt='Certificacion' />
        </ContenedorPres>
        <ContenedorPres>
          <ContenedorTitulo>
            <Titulo>SERVICIOS</Titulo>
          </ContenedorTitulo>
          <p>
            Servicios especializados de termografía aérea avanzada, inspección de obras,
            seguridad aérea, fotogrametría, Televigilancia entre otros.
          </p>
        </ContenedorPres>
        <ContenedorCarrusel>
          <Carrusel />
        </ContenedorCarrusel>
        <ContenedorCards>
        <ContenedorServicios>
          <p>
            Nuestra misión es aportar al entorno particular y profesional servicios con la mejor
            tecnología existente, la mayor precisión y una atención especifica para obtener siempre
            los mejores resultados. Apostando decididamente por el servicio de grabación y fotografía
            con drones con cámaras 4K RAW y Termográficas.
          </p>
        </ContenedorServicios>
          <Cards />
        </ContenedorCards>
        <ContenedorCardsII>
          <ContenedorCurso>
            <p>
              <ContenedorTitulo>
                <Titulo>Pilotos RPA`S</Titulo>
              </ContenedorTitulo>
              Formamos pilotos calificados y certificados ante la DGAC para que puedan operar sus equipos con
              la mayor seguridad y profesionalidad que el mercado le puede ofrecer. Con esto lograra unos resultados
              de primer nivel por sobre sus expectativas.
            </p>
          </ContenedorCurso>
          <CardsII />
        </ContenedorCardsII>
    </ContainerHome>
  )
}

const Imagen = styled.img`
@media screen and (min-width: 600px){
  width: 50vw;
  height: 30vh;
  margin: 10px;
  border-radius: 10px;
}
@media screen and (max-width: 600px){
  display: none;
}

`
const Imagen2 = styled.img`
@media screen and (max-width: 600px){
  width: 60vw;
  height: 50vh;
  margin: 10px;
  border-radius: 10px;
}
@media screen and (min-width: 600px){
  display: none;
}
`