import React from 'react'
import { Lenguage } from '../Lenguage/Lenguage'

function Footer () {
  return (
    <footer className=' py-10 px-40 max-h-auto  bg-black border-t-8 border-gray-400/60 text-gray-400 text-sm relative flex flex-col items-center sm:items-start'>
      <p className='text-center  w-[65%] sm:text-start'>
        ¿Preguntas? Llama al 01 800 917 1564
      </p>
      <div className='w-[65%] flex sm:gap-6 mt-10 flex-col sm:flex-row mb-10'>
        <ul className=' '>
          <li>Preguntas frecuentes</li>
          <li>Centro de ayuda</li>
          <li>Cuenta</li>
          <li>Prensa</li>
          <li>Relaciones con inversionistas</li>
          <li>Empleo</li>
          <li>Canjear</li>
        </ul>
        <ul>
          <li>tarjetas de regalo</li>
          <li>Comprar tarjetas de regalo</li>
          <li>Formas de ver Términos de uso</li>
          <li>Privacidad</li>
          <li>Preferencias de cookies</li>
          <li>Información</li>
          <li>corporativa</li>
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
