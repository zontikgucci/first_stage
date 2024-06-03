import { Menu } from '../component/Menu/Menu'
import { Phone } from '../component/Phone/Phone'
import './header.scss'
import point from '../../assets/icons/point.svg'
import { Geo } from '../component/Geo/Geo'

export const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__body">
          <Geo />
          <Menu />
          <Phone />
        </div>
      </div>
    </header>
  )
}