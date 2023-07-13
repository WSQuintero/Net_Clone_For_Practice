import React, { useContext, useState } from 'react'
// import { Logo } from '../../components/Logo/Logo'
import { Gradient } from '../../components/Gradient/Gradient'
import { Background } from '../../components/Background/Background'
import { Context } from '../../Context/Context'
import { NavLink, useNavigate } from 'react-router-dom'

function SignIn () {
  const { signInFirebase, state: { error }, setIsAuthenticated } = useContext(Context)
  const [informationCaptcha, setInformationCaptcha] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const signIn = (event) => {
    event.preventDefault()
    signInFirebase({ email, password }).then((user) => {
      if (user.accessToken) {
        navigate('/home')
        setIsAuthenticated()
        sessionStorage.setItem('isAuthenticated', 'true')
      }
    })
  }

  return (
    <div className='w-full h-[100vh] flex justify-center items-center'>
      <Background />
      <Gradient />
      <div className='absolute top-0 left-0 p-5'>{/* <Logo /> */}</div>
      <div className='absolute text-gray-100 bg-black/70 w-[350px] gap-5 min-h-[70vh] p-10 font-netflixBlack  flex flex-col justify-center items-center'>
        <h3 className='w-full text-start text-2xl'>Inicia sesión</h3>
        <form action='' className='w-full'>
          <label htmlFor='' className='w-[100%]'>
            <input
              type='email'
              placeholder='Email o número de telefono'
              className='w-full p-3 bg-[#333] pl-6 text-sm'
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label htmlFor='' className='w-full '>
            <input
              type='password'
              placeholder='Contraseña'
              className='w-full p-3 mt-5 bg-[#333] pl-6 text-sm'
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          <button className='p-3 w-full bg-[#e50914] mt-10' onClick={signIn}>
            Iniciar sesión
          </button>
        </form>
        {error !== '' && (
          <span className='text-yellow-500 font-bold text-lg'>{error}</span>
        )}
        <div className='flex justify-between text-sm w-full'>
          <label htmlFor=''>
            <input type='checkbox' className='' required /> Recuérdame
          </label>
          <span className='text-[12px]'>¿Necesitas ayuda?</span>
        </div>
        <div className='flex text-[13px] w-full justify-between'>
          <p className='text-[#818181]'>¿Primera vez en Netflix?</p>
          <span className='text-white'>
            <NavLink to={'/sign-up'}>Suscríbete ahora.</NavLink>
          </span>
        </div>
        <p className='text-[11px] text-justify text-[#818181]'>
          Esta página está protegida por Google reCAPTCHA para comprobar que no
          eres un robot.
          {!informationCaptcha && (
            <span
              className='text-blue-500 cursor-pointer'
              onClick={() => setInformationCaptcha(true)}
            >
              {' '}
              Más info.
            </span>
          )}
        </p>
        {informationCaptcha && (
          <p className='text-[10px] text-justify text-[#818181]'>
            La información recopilada por Google reCAPTCHA está sujeta a la
            Política de privacidad y a las Condiciones del servicio de Google, y
            se utiliza para proporcionar, mantener y mejorar el servicio de
            reCAPTCHA, así como para fines generales de seguridad (Google no la
            utiliza para personalizar publicidad).
          </p>
        )}
      </div>
    </div>
  )
}

export { SignIn }
