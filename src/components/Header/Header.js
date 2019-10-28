import React from 'react'
import './Header.css'
import logoFace from '../../assets/face.png'

function Header(){
  return (
    <div id="header">
      <img src={logoFace} />
      <a href="">Meu Perfil</a>
    </div>  
  )
}

export default Header