import React from 'react'
import { Lenguage } from '../Lenguage/Lenguage'

function Footer () {
  const FooterMenu = [
    'Preguntas frecuentes',
    'Centro de ayuda',
    'Cuenta',
    'Prensa',
    'Relaciones con inversionistas',
    'Empleo',
    'Canjear'
  ]

  const FooterMenuTwo = [
    'tarjetas de regalo',
    'Comprar tarjetas de regalo',
    'Formas de ver Términos de uso',
    'Privacidad',
    'Preferencias de cookies',
    'Información',
    'corporativa'
  ]
  return (
    <footer className=' w-full py-10 sm:pl-10 max-h-auto  bg-black border-t-8 border-gray-400/60 text-gray-400 text-sm relative flex flex-col items-center sm:items-start'>
      <p className='text-center  w-[65%] sm:text-start'>
        ¿Preguntas? Llama al 01 800 917 1564
      </p>
      <div className='w-[65%] flex sm:gap-6 mt-10 flex-col sm:flex-row mb-10'>
        <ul className=' '>
          {FooterMenu.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
        <ul>
          {FooterMenuTwo.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
        <ul>
          <li>Contáctanos</li>
          <li>Prueba de velocidad</li>
          <li>Avisos legales Solo en Netflix</li>
        </ul>
      </div>
      <Lenguage />
      <span className='mt-5'>Netflix Colombia</span>
    </footer>
  )
}

export { Footer }
