import styled from "styled-components";
import Img2 from '../Image/asunto.png'
import Img from '../Image/m30t.png'

export const ContainerHeader = styled.div`
@media screen and (max-width: 600px){
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color:  rgba(0, 0, 0, 0.2);
    background-image: url(${Img});
    background-size: cover;
    background-position: center;
    
}
@media screen and (min-width: 600px){
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    border-bottom: 2px solid black;
    background-image: url(${Img2});
    background-position: right;
    background-size: auto;
    background-color: white;
    background-repeat: no-repeat;
}
`

export const LogoEmp = styled.img`
@media screen and (max-width: 600px) {
    height: 19vh;
    width: 28vw;
    padding: 5px;
    margin-left: 8px;
}
@media screen and (min-width: 600px) {
    height: 19vh;
    width: 12vw;
    margin-left: 50px;
}
`

export const ContLogoEmp = styled.div`
@media screen and (max-width: 600px) {
    height: 20vh;
    width: auto;
    background: rgba(255, 255, 255, 0.7);
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    border-radius: 2.5%;
}
@media screen and (min-width: 600px) {
    height: 19vh;
    width: 14vw;
}
`


export const ContainerCenter = styled.div`

@media screen and (max-width: 600px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
@media screen and (min-width: 600px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 450px;
}
`
export const Botonera = styled.nav`
    
    @media screen and (max-width: 600px){
        display: none;
    }
    @media screen and (min-width: 600px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 20px;
        a{
            text-decoration: none;
            color: black;
            font-weight: bold;
            margin: 10px;
            color: gray;
        }
        a.active{
            border-bottom: 3px solid gray;
        }
    }
    
`

export const Botonera2 = styled.nav`
    
    @media screen and (max-width: 600px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 10px;
        background-color: rgba(207, 208, 210, 0.8);
        border-radius: 50px;
        a{
            text-decoration: none;
            color: black;
            font-weight: bold;
            margin: 10px;
            color: gray;
            
        }
        a.active{
            border-bottom: 3px solid gray;
        }
        display: none;
    }
    @media screen and (min-width: 600px){
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 20px;
        a{
            text-decoration: none;
            color: black;
            font-weight: bold;
            margin: 10px;
            color: gray;
        }
        a.active{
            border-bottom: 3px solid gray;
        }
    }
    
`

export const MenuBoton = styled.div`
@media screen and (max-width: 600px){
    height: 50px;
    width: 50px;
    border: 1px solid gray;
    border-radius: 10%;
}
@media screen and (min-width: 600px){

    display: none;
}
`
export const Text = styled.div`
@media screen and (max-width: 600px){
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
}
@media screen and (min-width: 600px){
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
}
`

export const Titulo = styled.h1`
@media screen and (max-width: 600px){
    display: none;
}
@media screen and (min-width: 600px){
    display: flex;
}
`