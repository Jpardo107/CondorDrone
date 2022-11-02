import React from 'react'
import {ContainerBody} from '../Styles/Body.Styles'
import {Routes, Route} from 'react-router-dom'
import { Home } from './BodyPages/Home'
import { Curso } from './BodyPages/Curso'
import { Contacto } from './BodyPages/Contacto'
import { Equipamiento } from './BodyPages/Equipamiento'
import BgVideo from '../Image/VideoFondo.mp4'

export const Body = () => {
  return (
    <>
        <ContainerBody className='Bg-Overlay'>
        <video src={BgVideo} autoPlay muted  loop class='Video-bg'/>
        <Routes>
          <Route path='/Home' element = {<Home/>}/>
          <Route path='/Curso' element = {<Curso/>}/>
          <Route path='/Equipamiento' element = {<Equipamiento/>}/>
          <Route path='/Contacto' element = {<Contacto/>}/>
          <Route path='*' element = {<Home/>}/>
        </Routes>
        </ContainerBody>
    </>
  )
}
