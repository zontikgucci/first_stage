import './menu.scss'

export const Menu = () => {
  return (
    <nav className='menu'>
      <ul className="menu__list">
       <li className="menu__item">
          <a href="javascipt:void(0)" className="menu__link">Как заказать</a>
        </li>
        <li className="menu__item">
          <a href="javascipt:void(0)" className="menu__link">Доставка и оплата</a>
        </li>
        <li className="menu__item">
          <a href="javascipt:void(0)" className="menu__link">Кредит и рассрочка</a>
        </li>
       <li className="menu__item">
          <a href="javascipt:void(0)" className="menu__link">Сборка</a>
        </li>
       <li className="menu__item window">
          <a href="javascipt:void(0)" className="menu__link">Частые вопросы</a>
          <ul className="window__list">
            <li className="window__item">
              <a href="javascipt:void(0)" className="window__link">О нас</a></li>
            <li className="window__item"><a href="javascipt:void(0)" className="window__link">Отзывы</a></li>
            <li className="window__item"><a href="javascipt:void(0)" className="window__link">Гарантии</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  )
}