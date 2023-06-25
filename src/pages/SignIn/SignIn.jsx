import React from 'react'
import { Logo } from '../../components/Logo/Logo'

function SignIn () {
  return (
    <>
      <div className='background '></div>
      <div className='gradient z-1'></div>
      <Logo />
      <div className='absolute'>
        <h3>Inicia sesión</h3>
        <form action=''>
          <label htmlFor=''>
            <input type='email' placeholder='Email o número de telefono' />
          </label>
          <label htmlFor=''>
            <input type='password' placeholder='Contraseña' />
          </label>
          <button>Iniciar sesión</button>
        </form>
        <div>
          <label htmlFor=''>
            <input type='check' />
            Recuérdame
          </label>
          <span>¿Necesitas ayuda?</span>
        </div>
        <div>
          <p>¿Primera vez en Netflix?</p>
          <span>Suscríbete ahora.</span>
        </div>
        <p>
          Esta página está protegida por Google reCAPTCHA para comprobar que no
          eres un robot. Más info.
        </p>
      </div>
    </>
  )
}

export { SignIn }
