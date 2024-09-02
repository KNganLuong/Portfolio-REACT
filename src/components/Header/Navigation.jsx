import { HashLink } from 'react-router-hash-link'
import { useEffect } from 'react'

const NavigationBanner = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById('nav-wrap')
      if (window.scrollY > 50) {
        nav.classList.add('nav-scrolled')
      } else {
        nav.classList.remove('nav-scrolled')
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <nav id='nav-wrap'>
      <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
        Show navigation
      </a>

      <a className='mobile-btn' href='#' title='Hide navigation'>
        Hide navigation
      </a>
      <ul id='nav' className='nav'>
        <li className='current'>
          <HashLink smooth to='/' className='smoothscroll' href='#home'>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to='/#about' className='smoothscroll' href='#about'>
            About
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to='/#resume'
            className='smoothscroll'
            href='#resume'
          >
            Resume
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to='/#footer'
            className='smoothscroll'
            href='#contact'
          >
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  )
}
export default NavigationBanner
