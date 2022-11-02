import React from 'react';
import { Button, Card, CardBody, CardTitle } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {FotCar, Termo, ObraCivil, Videos, CursoPiloto} from './Modal'
import Img from '../Image/HistoryImage.png'
import Img2 from '../Image/drone2.jpeg'
import Img3 from '../Image/drone3.jpeg'


export const Cards = () => {
    return (
        <>
            <Card style={{
                    width: '18rem',
                    marginBottom: '5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.4)'
                    }}>
                <img alt="Sample" src="https://scontent.fscl4-1.fna.fbcdn.net/v/t39.30808-6/312910338_10229356811483332_5041438500088720951_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=jTruaoGeoSsAX_KARcp&_nc_ht=scontent.fscl4-1.fna&oh=00_AfDXptDdAnjU_9lSzr4OrtVlMHbKhMrGnFnSP68FUAzRpQ&oe=63678849"/>
                <CardBody>
                    <CardTitle tag="h5">
                        Fotogrametria
                    </CardTitle>
                </CardBody>
            </Card>
            <Card style={{
                    width: '18rem',
                    marginBottom: '5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.4)'
                    }}>
                <img alt="Sample" src={Img2}/>
                <CardBody>
                    <CardTitle tag="h5">
                        Termografia
                    </CardTitle>
                </CardBody>
            </Card>
            <Card style={{
                    width: '18rem',
                    marginBottom: '5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.4)'
                    }}>
                <img alt="Sample" src={Img3}/>
                <CardBody>
                    <CardTitle tag="h5">
                        Supervision de obras
                    </CardTitle>
                </CardBody>
            </Card>
        </>
    )
}

export const CardsII = () =>{

    return(
        <>
            <Card style={{
                    width: '18rem',
                    marginBottom: '5px',
                    backgroundColor: 'rgba(255, 255, 255, 0.4)'
                    }}>
                <img alt="Sample" src={Img}/>
                <CardBody style={{
                    textAlign: 'center'
                    }}>
                    <CardTitle tag="h5">
                        <NavLink to='/Curso' ><Button color='danger'>Mas Informacion</Button></NavLink>
                    </CardTitle>
                </CardBody>
            </Card>
        </>
    )
}
export const CardsIII = () =>{

    return(
        <>
            <Container>
                <Fila>
                    <Card style={{
                        margin: '20px',
                        backgroundColor: 'rgba(255, 255, 255, 0.4)'
                        }}>
                    <Imagen alt="Sample" src="https://scontent.fscl4-1.fna.fbcdn.net/v/t39.30808-6/312910338_10229356811483332_5041438500088720951_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=jTruaoGeoSsAX_KARcp&_nc_ht=scontent.fscl4-1.fna&oh=00_AfDXptDdAnjU_9lSzr4OrtVlMHbKhMrGnFnSP68FUAzRpQ&oe=63678849"/>
                    <CardBody>
                        <CardTitle tag="h5">
                            <FotCar />
                        </CardTitle>
                    </CardBody>
                    </Card>
                    <Card style={{
                            margin: '20px',
                            backgroundColor: 'rgba(255, 255, 255, 0.4)'
                            }}>
                        <Imagen alt="Sample" src={Img2}/>
                        <CardBody>
                            <CardTitle tag="h5">
                                <Termo/>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Fila>
                <Fila>
                    <Card style={{
                            margin: '20px',
                            backgroundColor: 'rgba(255, 255, 255, 0.4)'
                            }}>
                        <Imagen alt="Sample" src={Img3}/>
                        <CardBody>
                            <CardTitle tag="h5">
                                <ObraCivil />
                            </CardTitle>
                        </CardBody>
                    </Card>
                    <Card  style={{
                            margin: '20px',
                            backgroundColor: 'rgba(255, 255, 255, 0.4)'
                            }}>
                        <Imagen alt="Sample" src="https://planeoproducciones.com/wp-content/uploads/2019/07/drones-vs-helicopteros.jpg"/>
                        <CardBody>
                            <CardTitle tag="h5">
                                <Videos/>
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Fila>
                <Fila>
                    <Card  style={{
                            margin: '20px',
                            backgroundColor: 'rgba(255, 255, 255, 0.4)'
                            }}>
                        <Imagen alt="Sample" src="https://iberfdrone.es/wp-content/uploads/2019/11/piloto-drones-e1573828549744.jpg"/>
                        <CardBody>
                            <CardTitle tag="h5">
                                <CursoPiloto />
                            </CardTitle>
                        </CardBody>
                    </Card>
                </Fila>
            </Container> 
        </>
    )
}

const Container = styled.div`
@media screen and (max-width: 600px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
}
@media screen and (min-width: 600px) {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`
const Fila = styled.div`
@media screen and (max-width:600px){

}
@media screen and (min-width:600px){
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    margin: 30px;
}
`


const Imagen = styled.img`
@media screen and (min-width: 600px){
    height: 40vh;
    width: 40vw;
}
@media screen and (max-width: 600px){
    height: 40vh;
    width: 100%;
}

`
