import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Nosotros(args) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Mostrar>
                <Button color="danger" onClick={toggle}>
                    Informacion
                </Button>
            </Mostrar>

            <Modal style={{transparent: 'true'}} isOpen={modal} toggle={toggle} {...args}>
                <ModalHeader toggle={toggle}>Nuestra empresa</ModalHeader>
                <ModalBody style={{ 
                    overflowY: 'scroll',
                    height:'70vh',
                    textAlign: 'justify',
                    }}>
                    <p>
                        CONDORDRONE es una empresa de Drones Profesionales con sede en Valdivia. 
                        Estamos autorizados y certificados por DGAC (Dirección General de Aeronáutica Civil)
                        AOC N° 1506 para operaciones en espacio aéreo controlado y en entornos urbanos en 
                        categoría abierta y específica, para poder realizar grabaciones aéreas y fotografía 
                        profesional con drones, así como servicios especializados de termografía aérea avanzada, 
                        inspección de obras, seguridad aérea, fotogrametría, Televigilancia y otros, De esta forma 
                        cumplimos con la normativa vigente aprobada por la Dirección General de Aeronáutica Civil.
                        La mejor tecnología
                        Nuestra misión es aportar al entorno particular y profesional servicios con la mejor tecnología 
                        existente, la mayor precisión y una atención especifica para obtener siempre los mejores resultados. 
                        Apostando decididamente por el servicio de grabación y fotografía con drones con cámaras 4K RAW y Termográficas.
                    </p>
                    <p>
                        <p>Reducción de costes</p>
                        El uso de drones con cámara consigue aumentar la competitividad de las empresas ya que 
                        reduce enormemente los costes de la obtención de imágenes aéreas ya sea para fines publicitarios 
                        (marketing) como técnicos (inspección aérea) ya que los drones con cámaras están asumiendo las tareas 
                        que antes realizaban aeronaves tripuladas como helicópteros y avionetas o grúas. Condordrone es contar 
                        con un equipo completo de drones profesionales con cámaras 4k pilotados por profesionales certificados. 
                        También contamos con un equipo de tierra (fotografía, vídeo y audio) para abarcar todas tus necesidades 
                        y disponemos de personal especializado en edición y montaje de vídeo. De esta forma podemos ofrecerte el 
                        trabajo completo o colaborar con quien prefieras.
                    </p>
                    <p>
                        Lo más importante es que nosotros nos adaptamos a tus necesidades, contando con todos los equipos y medios 
                        para realizar el trabajo que quieras. Además, disponemos de soportes especialmente diseñados (DJI Osmo) 
                        para poder grabar y fotografiar con nuestros equipos de tierra y cubrir con seguridad tus intereses y necesidades.
                    </p>
                </ModalBody>
                <ModalFooter style={{justifyContent: 'center'}}>
                    <Button color="danger" onClick={toggle}>
                        Cerrar
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

const Mostrar = styled.div`
@media screen and (max-width: 600px){
        display: flex;
    }
    @media screen and (min-width: 600px){
        display: none;
    }
`

export default Nosotros;