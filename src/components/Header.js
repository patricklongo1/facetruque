import React from 'react'
import logoFace from '../assets/facebook-1.svg'

function Header(){
  return (
    <header>
      <nav>
        <img src={logoFace} />
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>  
  )
}

export default Header