import styled from "styled-components";

export const ContainerHome = styled.div`
    
    @media screen and (max-width: 600px){
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }
    @media screen and (min-width: 600px){
        width: 100%;
        height: 100vh;
        background-color: rgba(255, 255, 255, 0.1);
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
    }
`
export const Titulo = styled.h1`
    font-weight: bold;
`
export const ContenedorTitulo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
    p{
        text-align: justify;
        padding: 10px;
    }
`
export const ContenedorPres = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
    margin: 5px 60px 10px 60px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    p{
        @media screen and (max-width: 600px){
        display: none;
        }
        @media screen and (min-width: 600px){
            display: flex;
            margin: 0px 30px 30px 30px;
            font-weight: bold;
        }
    }   
`
export const ContenedorPres2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10px 60px 10px 60px;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    p{
        display: flex;
        font-weight: bold;
    }   
`

export const ContenedorCarrusel = styled.div`

@media screen and (max-width: 600px){
        display: none;
    }
    @media screen and (min-width: 600px){
        height: auto;
        width: auto;
        margin: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
export const ContenedorCarrusel2 = styled.div`

@media screen and (max-width: 600px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    @media screen and (min-width: 600px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
export const ContenedorCards = styled.div`
    @media screen and (max-width: 600px){
        height: auto;
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    @media screen and (min-width: 600px){
        display: none;
    }
`
export const ContenedorServicios = styled.div`
    @media screen and (max-width: 600px){
        height: auto;
        width: 90%;
        display: flex;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 10px;
        margin-bottom: 10px;
        p{
            text-align: justify;
            margin: 0px 30px 20px 30px;
            font-weight: bold;
        }
    }
    @media screen and (min-width: 600px){
        display: none;
    }
`

export const ContenedorCurso = styled.div`
    @media screen and (max-width: 600px){
        height: auto;
        width: 90%;
        display: flex;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 10px;
        margin-bottom: 10px;
        p{
            text-align: justify;
            margin: 0px 30px 20px 30px;
            font-weight: bold;
        }
    }
    @media screen and (min-width: 600px){
        height: auto;
        width: 90%;
        display: flex;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 10px;
        margin-bottom: 10px;
        justify-content: center;
        p{
            text-align: justify;
            margin: 0px 30px 20px 30px;
            font-weight: bold;
        }
    }
`
export const ContenedorCardsII = styled.div`
        height: auto;
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: 10px;
`