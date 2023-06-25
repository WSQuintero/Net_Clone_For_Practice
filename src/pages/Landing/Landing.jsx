import React, { useContext, useEffect } from 'react'
import { Context } from '../../Context/Context'
import { BeginContainer } from '../../components/BeginContainer/BeginContainer'
import { ButtonInformation } from '../../components/ButtonInformation/ButtonInformation'
import { Gradient } from '../../components/Gradient/Gradient'
import { Background } from '../../components/Background/Background'

import './Landing.css'

function Landing () {
  const { state, listeningWindowInnerWidth } = useContext(Context)

  useEffect(() => listeningWindowInnerWidth(), [state.lenguage])

  return (
    <>
    <Background/>
      <Gradient/>
      <section className='h-[100vh] w-full font-netflix-medium text-white flex flex-col justify-center items-center px-[33px] z-0 relative'>
        <h1 className='font-netflixBlack font-bold text-[30px] sm:text-5xl xl:text-5xl text-center w-[99%] mt-40'>
          Películas, series ilimitadas y mucho más
        </h1>
        <p className='mt-4 text-center w-full text-lg sm:text-xl'>
          Disfruta donde quieras. Cancela cuando quieras.
        </p>
        <p className='mt-7 text-center w-[90%] sm:text-xl'>
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
          reiniciar tu membresía de Netflix.
        </p>
        <BeginContainer />
      </section>
      <section className='h-[100vh] bg-black text-gray-100 flex items-center justify-center relative border-t-8 border-gray-400/60 p-10'>
        <div className='relative flex flex-col items-center lg:flex-row'>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='mt-20 sm:mt-0 text-4xl lg:text-6xl  text-center lg:text-start text-gray-100  w-full '>
              Disfruta en TV
            </h2>
            <p className='mt-10 text-sm sm:text-lg text-center  lg:text-start  py-5 w-full'>
              Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV,
              reproductores de Blu-ray y más.
            </p>
          </div>
          <div className='relative flex justify-center items-center h-[30vh] lg:w-[50vw] mb-10 lg:mb-0 mt-20 lg:mt-0 '>
            <img
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
              alt='tv-png'
              className='absolute w-full'
            />
            <video autoPlay muted loop className='w-[80%]'>
              <source
                src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
      </section>
      <section className='h-[100vh]  bg-black text-gray-100  lg:flex-row flex flex-col items-center justify-center relative border-t-8 border-gray-400/60 p-10 font-netflix-medium'>
        <div className='lg:absolute lg:right-0  lg:w-[50vw] flex flex-col justify-center items-center w-full '>
          <h3 className='mt-20 lg:mt-0 text-4xl sm:text-5xl  text-center lg:text-start text-gray-100 pr-6 '>
            Descarga tus series para verlas offline
          </h3>
          <p className='text-center lg:text-start mt-10 w-full'>
            Guarda tu contenido favorito y tendrás siempre algo para ver.
          </p>
        </div>
        <div className='lg:w-[50vw] h-[60vh] lg:h-full overflow-hidden flex flex-col justify-center items-center lg:absolute lg:left-0 lg:px-20'>
          <img
            alt=''
            src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
            data-uia='nmhp-card-animation-asset-image'
            className='w-full'
          />
          <div className='flex   px-5 py-2justify-start items-center gap-4 w-[70%] bg-black/80 rounded-lg border border-gray-300 relative bottom-20'>
            <img
              data-uia='nmhp-card-animation-asset-animation'
              alt=''
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'
              className='w-10'
            />
            <div>
              <p>Stranger Things</p>
              <span className='text-sm text-blue-600'>Descargando...</span>
            </div>
          </div>
        </div>
      </section>
      <section className='h-[100vh] bg-black text-gray-100 flex items-center justify-center relative border-t-8 border-gray-400/60 p-10'>
        <div className='relative flex flex-col items-center lg:flex-row'>
          <div className='flex flex-col items-center justify-center pl-10'>
            <h2 className='mt-20 lg:mt-0 text-4xl sm:text-5xl  text-center lg:text-start text-gray-100 w-full  '>
              Disfruta donde quieras
            </h2>
            <p className='mt-10 text-xl text-center w-full lg:text-start  '>
              Películas y series ilimitadas en tu teléfono, tablet, computadora
              y TV.
            </p>
          </div>
          <div className='relative flex justify-center items-center h-[50vh] lg:w-[50vw] mt-10 lg:mt-0'>
            <img
              alt=''
              src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'
              data-uia='nmhp-card-animation-asset-image'
              className='absolute w-full z-10'
            />
            <video
              data-uia='nmhp-card-animation-asset-video'
              autoPlay
              muted
              loop
              className='relative w-[60%] z-0 bottom-10'
            >
              <source
                src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'
                type='video/mp4'
              />
            </video>
          </div>
        </div>
      </section>
      <section className='h-[100vh]  bg-black text-gray-100  lg:flex-row flex flex-col items-center justify-center relative border-t-8 border-gray-400/60 p-10 font-netflix-medium'>
        <div className='lg:absolute lg:right-0 lg:w-[50vw] flex flex-col w-full items-center lg:pr-10'>
          <h3 className='mt-20 lg:mt-0 text-4xl sm:text-5xl xl:text-6xl text-center lg:text-start text-gray-100  '>
            Crea perfiles para niños
          </h3>
          <p className='text-center lg:text-start mt-10 pl-2'>
            Los niños vivirán aventuras con sus personajes favoritos en un
            espacio diseñado exclusivamente para ellos, sin costo con tu
            membresía.
          </p>
        </div>
        <div className='lg:w-[60vw] h-[60vh] lg:h-full overflow-hidden flex flex-col justify-center items-center lg:absolute lg:left-0 lg:px-20'>
          <img
            alt=''
            src='https://occ-0-1108-2705.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABS2wPb0M8BZZsg7maAVHhc1rfAZm9RWMpYfL95TcWCTiT1OvZGx4qg2NVvAtqK_AONqNNWbJYzdgVvbgrQGgag-qgYnKEi2RKM9A.png?r=25d'
            data-uia='nmhp-card-animation-asset-image'
            className='w-[70%] sm-[100%]'
          />
        </div>
      </section>
      <section className='h-auto bg-black border-t-8 border-gray-400 p-6 flex flex-col items-center no-underline'>
        <h4 className='w-full mt-20 lg:mt-0 text-2xl lg:text-4xl  text-center  text-gray-100  '>
          Preguntas frecuentes
        </h4>
        <ul className='mt-10 w-[80%] flex flex-col gap-3'>
          <li className='w-full  h-auto relative min-h-10'>
            <ButtonInformation title='¿Que es Netflix?'>
              Netflix es un servicio de streaming que ofrece una gran variedad
              de películas, series y documentales premiados en casi cualquier
              pantalla conectada a internet.{<br />}
              {<br />}
              Todo lo que quieras ver, sin límites ni comerciales, a un costo
              muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas las
              semanas se agregan más películas y series!
            </ButtonInformation>
          </li>
          <li className='w-full  h-auto relative min-h-10'>
            <ButtonInformation title='¿Cuánto cuesta Netflix?'>
              D <div className='background '></div>
              isfruta Netflix en tu smartphone, tablet, smart TV, laptop o
              dispositivo de streaming, todo por una tarifa plana mensual.
              Planes desde $ 16.900 hasta $ 38.900 al mes. Sin costos
              adicionales ni contratos.
            </ButtonInformation>
          </li>
          <li className='w-full  h-auto relative min-h-10'>
            <ButtonInformation title='Dónde puedo ver Netflix?'>
              Disfruta donde quieras, cuando quieras. Inicia sesión en tu cuenta
              de Netflix para ver contenido al instante a través de netflix.com
              desde tu computadora personal o en cualquier dispositivo con
              conexión a internet que cuente con la app de Netflix, como smart
              TV, smartphones, tablets, reproductores multimedia y consolas de
              juegos.{<br />}
              {<br />}
              Además, puedes descargar tus series favoritas con iOS, Android o
              la app para Windows 10. Con la función de descarga, puedes ver
              donde vayas y sin conexión a internet. Lleva Netflix contigo
              adonde sea.
            </ButtonInformation>
          </li>
          <li className='w-full  h-auto relative min-h-10'>
            <ButtonInformation title='Cómo cancelo?'>
              Netflix es flexible. Sin contratos molestos ni compromisos.
              Cancela la membresía online con solo dos clics. No hay cargos por
              cancelación. Empieza y termina cuando quieras.
            </ButtonInformation>
          </li>
          <li className='w-full  h-auto relative min-h-10'>
            <ButtonInformation title='¿Que puedo ver en Netflix?'>
              Netflix tiene un amplio catálogo de películas, series,
              documentales, animes, originales premiados y más. Todo lo que
              quieras ver, cuando quieras.
            </ButtonInformation>
          </li>
          <li className='w-full  h-auto relative min-h-10'>
            <ButtonInformation title='¿Es bueno Netflix para los niñox?'>
              La experiencia de Netflix para niños está incluida en la membresía
              para que los padres tengan el control mientras los peques
              disfrutan series y películas familiares en su propio espacio.
              {<br />}
              {<br />}
              Los perfiles para niños incluyen controles parentales protegidos
              por PIN que te permiten restringir el contenido que pueden ver los
              niños en función de la clasificación por edad y bloquear
              determinados títulos que no quieras que los niños vean.
            </ButtonInformation>
          </li>
        </ul>
        <p className='text-xl text-center text-gray-300 mt-10'>
          ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
          reiniciar tu membresía de Netflix.
        </p>
        <div className='pb-10 w-full flex justify-center'>
          <BeginContainer />
        </div>
      </section>
    </>
  )
}

export { Landing }
