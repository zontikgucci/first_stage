import './header.scss'

import { Menu } from '../component/Menu/Menu'
import { Phone } from '../component/Phone/Phone'
import { Geo } from '../component/Geo/Geo'
import { Logo } from '../component/Logo/Logo'
import { Catalog } from '../component/Catalog/Catalog'
import { Personal } from '../component/Personal/Personal'


export const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__top">
          <Geo />
          <Menu />
          <Phone />
        </div>
        <div className="header__under">
          <Logo />
          <Catalog/>
          <Personal/>
        </div>
      </div>
    </header>
  )
}