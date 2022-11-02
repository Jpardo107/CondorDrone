import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Img from '../Image/HistoryImage.png'

export function FotCar(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Fotogrametría y Cartografía
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Fotogrametría y Cartografía</ModalHeader>
        <ModalBody>
        En Condordrone realizamos trabajos de topografía y cartografía con
        drones.
        El uso de drones ha supuesto una transformación en el mundo de la
        topografía, ya que permiten mejorar la calidad y la eficacia respecto a
        los métodos de topografía tradicional.
        Contamos con equipos profesionales y con posicionamiento RTK que
        nos permiten asegurar precisiones centimétricas en los trabajos.
        </ModalBody>
        <ModalFooter>
        <Button color="danger" onClick={toggle}>
            Cerrar
        </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export function Termo(args) {
const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

return (
    <div>
    <Button color="danger" onClick={toggle}>
        TERMOGRAFÍA AÉREA Y CÁMARAS INFRARROJAS TERMOGRÁFICAS
    </Button>
    <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>TERMOGRAFÍA AÉREA Y CÁMARAS INFRARROJAS TERMOGRÁFICAS</ModalHeader>
        <ModalBody>
        Para las inspecciones técnicas industriales contamos con la última tecnología en
        termografía aérea, nuestro personal está certificado por la UACH Y DGAC y aportamos la
        interpretación especializada de los datos obtenidos.

        Entregamos informes específicos para cada sector, en sus diversas categorías, y
        disponemos de un equipo de profesionales para nuestros clientes.
        </ModalBody>
        <ModalFooter>
        <Button color="danger" onClick={toggle}>
            Cerrar
        </Button>
        </ModalFooter>
    </Modal>
    </div>
);
}

export function ObraCivil(args) {
const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

return (
    <div>
    <Button color="danger" onClick={toggle}>
        CONSTRUCCION Y OBRA CIVIL
    </Button>
    <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>CONSTRUCCION Y OBRA CIVIL</ModalHeader>
        <ModalBody>
        Las empresas constructoras y las empresas de obra civil nos solicitan
        servicios con drones principalmente para los siguientes tipos de trabajos:
        <ol>
            <li>Control y seguimiento de obras con dron: Seguimiento y
                finalización de obras, tanto en exterior, como en interior.
            </li>
            <li>
                Inspección Estructural: Inspección / comprobación de estructuras,
                terrenos y puntos concretos de la obra.
            </li>
            <li>
                Vídeo corporativo: Realización de vídeos corporativos y
                publicitarios de la obra para uso propio o para mostrar al cliente.
            </li>
        </ol>
        </ModalBody>
        <ModalFooter>
        <Button color="danger" onClick={toggle}>
            Cerrar
        </Button>
        </ModalFooter>
    </Modal>
    </div>
);
}

export function Videos(args) {
const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

return (
    <div>
    <Button color="danger" onClick={toggle}>
        FOTOGRAFIA, FILMACION Y RENDERIZADO DE VIDEOS EN 4K
    </Button>
    <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>FOTOGRAFIA, FILMACION Y RENDERIZADO DE VIDEOS EN 4K</ModalHeader>
        <ModalBody>
        En Condordrone realizamos trabajos de fotografía y vídeo con drones
        obteniendo cualquier tipo de plano aéreo necesario, a un bajo coste y con la
        calidad profesional que necesitas.
        Un dron es una herramienta perfecta para la realización de trabajos
        audiovisuales, ya que se pueden conseguir planos aéreos espectaculares.
        Hasta ahora, esto sólo era posible utilizando otros medios como avionetas o
        helicópteros. Frente a estos medios, conseguimos un importante ahorro
        económico y facilidad en la realización del trabajo.
        Damos servicios a sectores diversos como publicidad, cine o televisión, pero
        también para particulares que deseen dar un toque diferente a sus
        celebraciones o eventos pues producimos material de alta resolución.
        Los resultados son impactantes, , consiguiendo planos desde unos ángulos
        y con una perspectiva espectacular y con movimientos de cámara muy
        estables.
        Nuestro punto fuerte es la personalización: el día del trabajo, el cliente
        puede estar presente para transmitir a nuestro piloto, al instante, las tomas
        que desea realizar.
        </ModalBody>
        <ModalFooter>
        <Button color="danger" onClick={toggle}>
            Cerrar
        </Button>
        </ModalFooter>
    </Modal>
    </div>
);
}


export function CursoPiloto(args) {
const [modal, setModal] = useState(false);

const toggle = () => setModal(!modal);

return (
    <div>
    <Button color="danger" onClick={toggle}>
        CURSO PILOTO RPA`S
    </Button>
    <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>CURSO PILOTO RPA`S</ModalHeader>
        <ModalBody>
            <img src={Img} alt='AficheCurso' style={{
                width: '100%',
                height: '100%'
            }}/>
        </ModalBody>
        <ModalFooter>
        <Button color="danger" onClick={toggle}>
            Cerrar
        </Button>
        </ModalFooter>
    </Modal>
    </div>
);
}

