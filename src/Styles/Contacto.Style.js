import styled from "styled-components";

export const ContenedorContacto = styled.div`

@media screen and (max-width: 600px) {
    width: 95vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    overflow-y: scroll;
    margin-top: 10px;
}
@media screen and (min-width: 600px) {
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    overflow-y: scroll;
}

`
export const TituloContacto = styled.div`
margin: 10px;
text-align: center;
`
export const BodyContacto = styled.div`
margin: 10px;
text-align: center;
`
export const Rrss = styled.div`
margin: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`
export const Menu = styled.div`
margin: 10px;
`
export const Container = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgba(255, 255, 255, 0.1);
`
export const Links = styled.a`
text-decoration: none;
color: black;
font-weight: bold;
margin: 10px;
`

export const Info = styled.div`
@media screen and (max-width: 600px) {
    width: 95vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    margin: 30px;
}
@media screen and (min-width: 600px) {
    width: 70vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    margin: 30px;
}
`