import './menu.scss'

export const Menu = () => {
  return (
    <nav className='menu'>
      <ul className="menu__list">
       <li className="menu__item">
          <a href="$" className="menu__link" title='Как заказать' onClick={e => e.preventDefault()}>Как заказать</a>
        </li>
        <li className="menu__item">
          <a href="$" className="menu__link" title='Доставка и оплата' onClick={e => e.preventDefault()}>Доставка и оплата</a>
        </li>
        <li className="menu__item">
          <a href="$" className="menu__link" title='Кредит и рассрочка' onClick={e => e.preventDefault()}>Кредит и рассрочка</a>
        </li>
       <li className="menu__item">
          <a href="$" className="menu__link" title='Сборка' onClick={e => e.preventDefault()}>Сборка</a>
        </li>
       <li className="menu__item window">
          <a href="$" className="menu__link" title='Частые вопросы' onClick={e => e.preventDefault()}>Частые вопросы</a>
          <ul className="window__list">
            <li className="window__item">
              <a href="$" className="window__link" title='О нас' onClick={e => e.preventDefault()}>О нас</a></li>
            <li className="window__item"><a href="$" className="window__link" title='Отзывы' onClick={e => e.preventDefault()}>Отзывы</a></li>
            <li className="window__item"><a href="$" className="window__link" title='Гарантии' onClick={e => e.preventDefault()}>Гарантии</a></li>
          </ul>
          <span className='window__triangle'></span>
        </li>
      </ul>
    </nav>
  )
}