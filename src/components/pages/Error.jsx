/* eslint-disable react/no-unescaped-entities */

import { Link } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

const Error = () => {
  return (
    <div>
      <Header></Header>
      <main className='error_container'>
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas </h2>
        <Link to='/' className='error_page_link'>
          Retournez sur la page d'accueil
        </Link>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default Error
