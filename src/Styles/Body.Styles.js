import styled from "styled-components";

export const ContainerBody = styled.div`
@media screen and (max-width: 600px){
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    background-color: rgba(255, 255, 255, 0.1);
}
@media screen and (min-width: 600px){
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
    background-color: rgba(255, 255, 255, 0.1);
}
`