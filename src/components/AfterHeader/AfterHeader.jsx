import React from 'react'
import { Logo } from '../Logo/Logo'
import { SearchIcon } from '../SearchIcon/SearchIcon'
import { NotificationsIcon } from '../NotificationsIcon/NotificationsIcon'
import './AfterHeader.css'

function AfterHeader () {
  return (
    <header className='flex w-full py-5 px-20 gradient text-gray-100 items-center gap-5 absolute z-50'>
      <Logo />
      <nav className='w-full pl-4 flex justify-between text-sm items-center container'>
        <ul className='flex w-[45%] justify-between'>
          <li>Inicio</li>
          <li>Series</li>
          <li>Peliculas</li>
          <li>Novedades populares</li>
          <li>Mi lista</li>
          <li>Explora por idiomas</li>
        </ul>
        <ul className='flex gap-5 pr-5 items-center '>
          <li>
            <SearchIcon />
          </li>
          <li>Niños</li>
          <li>
            <NotificationsIcon />
          </li>
          <li>
            <span className='profile-link' role='presentation'>
              <img
                className='profile-icon'
                src='https://occ-0-2612-2218.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229'
                alt=''
              />
            </span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export { AfterHeader }
